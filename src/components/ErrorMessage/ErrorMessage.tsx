import React, { useEffect } from 'react';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

interface ErrorMessageProps {
  message: string | null;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  useEffect(() => {
    if (message) {
      iziToast.error({
        title: 'Error',
        message: message,
        position: 'topRight',
      });
    }
  }, [message]);

  return null;
};

export default ErrorMessage;