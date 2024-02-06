import Toast from 'react-native-toast-message';

class ToastService {
  showToast = (type, text1, text2) => {
    switch (type) {
      case 'SUCCESS':
        Toast.show({
          type: 'success',
          text1: text1,
          text2: text2 || '',
        });
        break;
      case 'ERROR':
        Toast.show({
          type: 'error',
          text1: text1,
          text2: text2 || 'Something went wrong',
        });
        break;
      case 'INFO':
        Toast.show({
          type: 'info',
          text1: text1,
          text2: text2 || '',
        });
        break;
      default:
        Toast.show({
          type: 'success',
          text1: text1,
          text2: text2 || '',
        });
    }
  };
}

const toastService = new ToastService();
export default toastService;
