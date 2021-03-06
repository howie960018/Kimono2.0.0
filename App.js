
import * as React from 'react';
import { View, Text, Button, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigation from './src/navigation/index';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import AuthContextProvider from './store/auth-context';
import Root from './src/navigation/index';
import StripeApp from "./src/StripeApp";
import { StripeProvider } from "@stripe/stripe-react-native";


function App() {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <Provider store={store}>
          <AuthContextProvider>
            <Root />
          </AuthContextProvider>
        </Provider>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}

export default App;

