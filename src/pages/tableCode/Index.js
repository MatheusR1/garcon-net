import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Alert } from 'react-native';
import { useTable } from "../../context/TableProvider";
import { Col, Row, Grid } from "react-native-easy-grid";
import { TextInput, Button, Title } from "react-native-paper";
import api from '../../services/api';

export default function tableCode({ navigation }) {

    const { setTableCode } = useTable();
    const [value, onChangeText] = useState(null);
    const [code, setCode] = useState(null);

    useEffect(() => {
        navigation.addListener('beforeRemove', e => {
            if (e.data.action.type === 'GO_BACK') e.preventDefault();
        });
    }, [navigation])

    useEffect(() => {
        try {

            if (code !== null) {
                let id = parseInt(code);
                Number.isInteger(id) ? searchRestaurante(id) : throw 'Deve ser um número inteiro';
            }

        } catch (e) {
            Alert.alert(e);
        }
    }, [code])

    const searchRestaurante = async (code) => {
        try {
            const response = await api.get(`/tables/${code}.json`);
            let status = response.data?.status;

            if (status !== 'reserved') {
                setTableCode(code);
            } else {
                Alert.alert('Mesa já reservada!');
            }
        } catch (error) {
            Alert.alert('Mesa não encontrada!');
            console.log(error);
        }
    }

    return (
        <Grid>
            <Row size={1} style={styles.title}>
                <Col>
                    <Title> Digite o Código abaixo </Title>
                </Col>
            </Row>
            <Row size={1}>
                <Col>
                    <TextInput
                        keyboardType='numeric'
                        onChangeText={text => onChangeText(text)}
                        value={value}
                    />
                </Col>
            </Row>
            <Row size={1}>
                <Col>
                    <Button title={'voltar'} onPress={() => navigation.popToTop()}> voltar </Button>

                </Col>
                <Col>
                    <Button title={'Enviar'} onPress={() => setCode(value)}> Enviar </Button>
                </Col>
            </Row>
        </Grid>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'space-around',
    },
    title: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
    },
    button: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'flex-start',
    },
    input: {
        minWidth: '90%'
    }
})