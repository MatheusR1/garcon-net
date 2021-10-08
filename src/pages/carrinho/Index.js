import React, { useState, useEffect } from "react";
import { Text, View, FlatList } from "react-native";
import api from '../../services/api';
import { Card, Button, Icon } from "react-native-elements";
import { useCart } from "../../context/CartProvider";

export default function Carrinho() {

    const { cart, addCart, removeCart } = useCart();

    const [total, setTotal] = useState();

    useEffect(() => {
        let value = 0;
        cart.forEach(item => {
            value = value + (item.preco * item.quantidade)
        });
        setTotal(value)
    }, [cart]);

    const cards = (produto) => {
        return (
            <Card>
                <Card.Title>{produto.nome}</Card.Title>
                <Card.Divider />
                <Text style={{ marginBottom: 10 }}> preco: R$ {produto.preco}  quantidade : {produto.quantidade}</Text>
                <Button
                    icon={<Icon type='font-awesome' name='plus' color='#ffffff' />}
                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                    onPress={() => addCart(produto)}
                />
                <Button
                    icon={<Icon type='font-awesome' name='minus' color='#ffffff' />}
                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                    onPress={() => removeCart(produto)}
                />
            </Card>
        )
    }

    return (
        <View>
            <FlatList
                keyExtracto={item => item.id}
                data={cart}
                renderItem={({ item }) => cards(item)}
            />
            <Text> total : {total || 0 } </Text>
        </View>
    )
}