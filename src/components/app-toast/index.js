import toast from 'react-hot-toast';

const toastSuccess = (message) => {
  toast.success(message, {
    style: {
      border: '1px solid #00ae00',
    },
  });
}

const toastWarning = (message) => {
  toast.custom(message, {
    style: {
      border: '1px solid #ffac32',
    },
  });
}

const toastError = (message) => {
  toast.error(message, {
    style: {
      border: '1px solid #eb5757',
    },
  });
}

export {
  toastSuccess,
  toastWarning,
  toastError,
}