import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Routes from "./src/routes";
import TableProvider from './src/context/TableProvider';
import UserProvider from './src/context/UserProvider';
import CartProvider from './src/context/CartProvider';
export default function App() {

  return (
    <UserProvider>
      <TableProvider>
        <CartProvider>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </CartProvider>
      </TableProvider>
    </UserProvider>
  )
}