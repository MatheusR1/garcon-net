import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, FlatList, RefreshControl } from "react-native";
import api from '../../services/api';
import { useCart } from '../../context/CartProvider';
import { Searchbar } from 'react-native-paper';
import { Card, Paragraph, Title, Button, Divider } from 'react-native-paper';

export default function Cardapio() {

    const [menu, setMenu] = useState([]);
    const { addCart } = useCart();
    const [search, setSearch] = useState();
    const [show, setShow] = useState(true);
    const [oldMenu, setoldMenu] = useState();
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        try {
            getCardapio();
            setRefreshing(false);
        } catch (error) {
            console.log(error)
            alert('algo deu errado!');
            setRefreshing(false);
            setShow(false)
        }
    }, []);

    const getCardapio = async () => {
        const response = await api.get('/menu');
        let produtos = response.data?.produtos;
        setMenu(produtos);
        setoldMenu(produtos);
        setShow(false)
    };

    const searchProduto = (value) => {
        setSearch(value);
        setShow(true);

        let newMenu = menu.filter(item => {
            return item.nome.includes(value.toLowerCase());
        });

        if ((newMenu.length === 0) || (value.length === 0)) {
            setMenu(oldMenu);
            setShow(false);
            return;
        }
        setShow(false);
        setMenu(newMenu);
    }

    const cards = (produto) => {
        return (
            <Card style={{ marginBottom: 10 }}>
                <Card.Content>
                    <Title>{produto.nome}</Title>
                    <Paragraph> preco: R$ {produto.preco}</Paragraph>
                </Card.Content>
                <Card.Actions>
                    <Button onPress={() => addCart(produto)}>
                        adicionar
                    </Button>
                </Card.Actions>
                <Divider />
            </Card>
        )
    }

    return (
        <View>
            <Searchbar
                style={{ padding: 2 }}
                onChangeText={(value) => searchProduto(value)}
                value={search}
                placeholder="procure um produto"
            />
            {show && <ActivityIndicator size="large" color="#0000ff" style={{marginTop: 12 }} />}
            <FlatList
                contentContainerStyle={{ paddingBottom: 100, marginTop: 5 }}
                keyExtracto={item => item.id}
                data={menu}
                renderItem={({ item }) => cards(item)}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={getCardapio} />
                }
            />
        </View>
    )
}