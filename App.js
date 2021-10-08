import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Routes from "./src/routes";
import RestaurantProvider from './src/context/RestaurantProvider';
import UserProvider from './src/context/UserProvider';
import CartProvider from './src/context/CartProvider';
export default function App() {

  return (
    <UserProvider>
      <RestaurantProvider>
        <CartProvider>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </CartProvider>
      </RestaurantProvider>
    </UserProvider>
  )
}