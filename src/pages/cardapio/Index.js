import React, { useState, useEffect } from "react";
import { Text, View, FlatList } from "react-native";
import api from '../../services/api';

export default function Cardapio() {

    const [menu, setMenu] = useState();

    useEffect(() => {
        try {

            getCardapio = async () => {
                const response = await api.get('/menu');
                setMenu(response.data)
            };
        } catch (error) {
            console.log(error)
        }
        getCardapio();
    }, [])

    return (
        <View>
            <Text> hello cardapio </Text>
            <FlatList
                data={menu.produtos}
                renderItem={({item}) => {
                    return (
                        <Text>{item.nome}</Text>
                    )
                }}
            />
        </View>
    )
}