import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useRestaurant } from "./context/RestaurantProvider";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/home/Index";
import Carrinho from "./pages/cardapio/Index";
import Cardapio from "./pages/cardapio/Index";
import QRcode from "./pages/qrCode/Index";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function Routes() {

    const {restaurantCode} = useRestaurant();

    if (!restaurantCode) {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="QRCODE" component={QRcode}/>
            </Stack.Navigator>
        );
    }

    return (
        <Tab.Navigator>
            <Tab.Screen name="Cardapio" component={Cardapio} />
            <Tab.Screen name="Carrinho" component={Carrinho} />
        </Tab.Navigator>
    )
}