import React, { useState, useEffect } from "react";
import { TextInput, View, Text, FlatList, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { Card, Icon } from "react-native-elements";
import { Button } from 'react-native-paper';
import { DataTable } from 'react-native-paper';
import { Col, Row, Grid } from "react-native-easy-grid";

export default function Comanda({ navigation }) {

    let dataMock = [
        { id: 1, status: 'fazendo', nome: 'asdas', preco: '10,00' },
        { id: 2, status: 'fazendo', nome: 'sadas', preco: '10,00' },
        { id: 3, status: 'fazendo', nome: 'carai', preco: '10,00' },
        { id: 4, status: 'fazendo', nome: 'werd', preco: '10,00' },
        { id: 5, status: 'asdas', nome: 'afwe', preco: '10,00' },
        { id: 6, status: 'fazendo', nome: 'ewrew', preco: '10,00' },
        { id: 7, status: 'pronto', nome: 'werwer', preco: '10,00' },
    ]

    const rows = (data) => {
        return (
            <DataTable.Row>
                <DataTable.Cell string>{data.nome}</DataTable.Cell>
                <DataTable.Cell numeric>{data.status}</DataTable.Cell>
                <DataTable.Cell numeric>{data.preco}</DataTable.Cell>
            </DataTable.Row>
        )
    }

    return (
        <Grid>
            <Row size={3}>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>Nome</DataTable.Title>
                        <DataTable.Title numeric>status</DataTable.Title>
                        <DataTable.Title numeric>preco</DataTable.Title>
                    </DataTable.Header>
                    <FlatList
                        keyExtracto={item => item.id}
                        data={dataMock}
                        renderItem={({ item }) => rows(item)}
                    />
                </DataTable>
            </Row>
            <Row size={2} style={styles.container}>
                <Button icon="credit-card-outline" mode="outlined" onPress={() => console.log('Pressed')}>
                 Fechar comanda
                </Button>
            </Row>
        </Grid>
    )
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
       flexDirection: 'column',
       alignItems :'center'
    },
 })
