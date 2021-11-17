import React, { useState, useEffect } from "react";
import { Text, View, FlatList } from "react-native";
import api from '../../services/api';
import { Card, Button, Icon, SearchBar } from "react-native-elements";
import { useCart } from '../../context/CartProvider';

export default function Cardapio() {

    const [menu, setMenu] = useState();
    const { addCart } = useCart();
    const [search, setSearch] = useState();

    useEffect(() => {
        try {
            getCardapio();
        } catch (error) {
            console.log(error)
        }
    }, []);

    const getCardapio = async () => {
        const response = await api.get('/menu');
        let produtos = response.data?.produtos;
        setMenu(produtos);
    };

    const searchProduto = async (value) => {
        setSearch(value)
        const response = await api.get(`/menu?produtos.nome=${search}`);
        let produtos = response.data;
        console.log('asoidjasoijasd',produtos)
    }

    const cards = (produto) => {
        return (
            <Card>
                <Card.Title>{produto.nome}</Card.Title>
                <Card.Divider />
                <Text style={{ marginBottom: 10 }}> preco: R$ {produto.preco} </Text>
                <Button
                    icon={<Icon type='font-awesome' name='plus' color='#ffffff' />}
                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                    onPress={() => addCart(produto)}
                />
            </Card>
        )
    }

    return (
        <View>
            <SearchBar
                onChangeText={(value) => searchProduto(value)}
                value={search}
                placeholder="procure um produto"
            />
            <FlatList
                contentContainerStyle={{ paddingBottom: 100 }}
                keyExtracto={item => item.id}
                data={menu}
                renderItem={({ item }) => cards(item)}
            />
        </View>
    )
}