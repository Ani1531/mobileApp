import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import store from './redux/store';
import Toast from 'react-native-toast-message';
import Loader from './utiles/Loader';
import SplashScreen from './screens/SplashScreen';
import {SafeAreaView} from 'react-native-safe-area-context';
import StackRouter from './navigators/StackRouter';

const App = () => {
  const [splash, setSplash] = React.useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 3000);
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        {splash ? <SplashScreen /> : <StackRouter />}
      </SafeAreaView>
      <Toast />
      <Loader />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
