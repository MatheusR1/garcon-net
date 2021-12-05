import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTable } from "./context/TableProvider";
import { useUser } from './context/UserProvider';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/home/Index";
import Carrinho from './pages/carrinho/Index'
import Cardapio from './pages/cardapio/Index';
import QRcode from "./pages/qrCode/Index";
import TableCodeComponent from './pages/tableCode/Index';
import ModalScanner from './components/ModalScanner';
import Nome from './components/Nome';
import { useCart } from "./context/CartProvider";
import User from './pages/user/Index';
import { Icon } from 'react-native-elements'
import Comanda from './pages/comanda/Index';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function Routes() {

    const { TableCode } = useTable();
    const { user } = useUser();
    const { cart } = useCart();

    const [valid, setvalid] = useState(false)

    useEffect(() => {
        user.nome !== null && TableCode !== false ? setvalid(true) : setvalid(false)
    }, [user, TableCode])


    if (!valid) {
        return (
            <Stack.Navigator >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Nome" component={Nome} options={{ headerBackVisible: false }} />
                <Stack.Screen name="QRCODE" component={QRcode} />
                <Stack.Screen name="ModalScanner" component={ModalScanner} />
                <Stack.Screen name="TableCode" component={TableCodeComponent} options={{ headerBackVisible: false }} />
            </Stack.Navigator>
        );
    }

    return (
        <Tab.Navigator>
            <Tab.Screen name="Cardapio" component={Cardapio} options={{ tabBarIcon: () => <Icon name="menu-book" type='material' color='#6C63FF'></Icon> }} />
            <Tab.Screen name="Carrinho" component={Carrinho} options={{
                tabBarBadge: Object.keys(cart).length || 0,
                tabBarIcon :  () => <Icon name="shopping-cart" type='material' color='#6C63FF'></Icon>
            }} />
            <Tab.Screen name="Comanda" component={Comanda} options={{ tabBarIcon: () => <Icon name="receipt" type='material'color='#6C63FF'></Icon> }}/>
            <Tab.Screen name="User" component={User} options={{ tabBarIcon: () => <Icon name="person" type='material' color='#6C63FF'></Icon> }}/>
        </Tab.Navigator>
    )
}