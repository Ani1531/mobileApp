import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import TabRouter from './TabRouter';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const StackRouter = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'teal',
          },
        }}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: 'LOGIN',
          }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{
            title: 'SIGNUP',
          }}
        />
        <Stack.Screen
          name="TabScreen"
          component={TabRouter}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackRouter;
