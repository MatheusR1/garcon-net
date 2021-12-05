import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import { Button, Avatar } from 'react-native-paper';

export default function Home({ navigation }) {

    return (

        <Grid style={styles.container}>
            <Row size={3} >
                <Image source={require('../../../assets/logo.png')} />
            </Row>
            <Row size={1}>
                <Text style={styles.title}> Bem vindo ao Garçon.NET </Text>
            </Row>
            <Row size={1}>
                <View>
                    <Button
                        mode="contained"
                        labelStyle={{ fontSize: 24 }}
                        uppercase={false} i
                        icon="arrow-right"
                        onPress={() => navigation.navigate('Nome')}
                        mode="outlined"
                    >
                        Entrar
                    </Button>
                </View>
            </Row>
        </Grid>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: 'space-around',
    },
    title: {
        color: '#6C63FF',
        fontWeight: 'bold',
        fontSize: 20
    }
})