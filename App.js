import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Routes from "./src/routes";
import RestaurantProvider from './src/context/RestaurantProvider';
import UserProvider from './src/context/UserProvider';

export default function App() {

  return (
    <UserProvider>
      <RestaurantProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </RestaurantProvider>
    </UserProvider>
  )
}