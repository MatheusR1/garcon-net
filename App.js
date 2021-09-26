import { NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Routes from "./src/routes";
import RestaurantProvider from './src/context/RestaurantProvider';

export default function App() {

  return (
    <RestaurantProvider>
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
    </RestaurantProvider>
  )
}