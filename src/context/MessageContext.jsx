import React, { createContext, useContext, useState, useCallback } from 'react';

const MessageContext = createContext();

export const useMessage = () => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error('useMessage must be used within a MessageProvider');
  }
  return context;
};

export const MessageProvider = ({ children }) => {
  const [message, setMessage] = useState(null);
  const [type, setType] = useState('success');
  const [errors, setErrors] = useState([]);

  const showMessage = useCallback((msg, msgType = 'success') => {
    setMessage(msg);
    setType(msgType);
    setErrors([]);
    
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  }, []);

  const showErrors = useCallback((errorList) => {
    setErrors(Array.isArray(errorList) ? errorList : [errorList]);
    setType('error');
    setMessage(null);
    
    setTimeout(() => {
      setErrors([]);
    }, 5000);
  }, []);

  const clearMessage = useCallback(() => {
    setMessage(null);
    setErrors([]);
  }, []);

  return (
    <MessageContext.Provider value={{ 
      message, 
      type, 
      errors, 
      showMessage, 
      showErrors,
      clearMessage 
    }}>
      {children}
    </MessageContext.Provider>
  );
};