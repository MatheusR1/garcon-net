import React from "react";
import { Text , View , Button, StyleSheet, Image} from "react-native";

export default function Home ({navigation}) {

    return (
        <View style={styles.container} >
            <Image source={require('../../../assets/logo.png')} />
            <Text style={styles.title}> Bem vindo ao Garçon.NET </Text>
            <Button title="Acessar Restaurante" onPress={() => navigation.navigate('Nome')}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        backgroundColor : "#fff",
        alignItems:"center",
        justifyContent: "space-around"
    },
    title :  {
      color: '#6C63FF',
      fontWeight : 'bold',
      fontSize : 20
    }
})