import React, { useState, useEffect } from "react";
import { Text, View, FlatList } from "react-native";
import api from '../../services/api';
import { Card, Button, Icon } from "react-native-elements";
import {useCart} from '../../context/CartProvider';

export default function Cardapio() {

    const [menu, setMenu] = useState();
    const {addCart} = useCart();

    useEffect(() => {
        try {
            getCardapio();
        } catch (error) {
            console.log(error)
        }
    },[]);

    const getCardapio = async () => {
        const response = await api.get('/menu');
        let produtos = response.data?.produtos;
        setMenu(produtos);
    };
    
    const cards = (produto) => {
        return (
            <Card>
                <Card.Title>{produto.nome}</Card.Title>
                <Card.Divider />
                <Text style={{ marginBottom: 10 }}> preco: R$ {produto.preco} </Text>
                <Button
                    icon={<Icon type='font-awesome' name='plus' color='#ffffff' />}
                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                    onPress = {()=>addCart(produto)}
                />
            </Card>
        )
    }

    return (
        <View>
            <Text> hello cardapio </Text>
            <FlatList
                keyExtracto={item => item.id}
                data={menu}
                renderItem={({ item }) => cards(item)}
            />
        </View>
    )
}