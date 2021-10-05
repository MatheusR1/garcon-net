import React from "react";
import { Text , View , Button, StyleSheet} from "react-native";

export default function Home ({navigation}) {

    return (
        <View style={styles.container} >
            <Text> hello home </Text>
            <Button title="Informe seu nome" onPress={() => navigation.navigate('Nome')}></Button>
            <Button title="acesse o restaurante" onPress={() => navigation.navigate('ModalScanner')}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        backgroundColor : "#fff",
        alignItems:"center",
        justifyContent: "space-around"
    }
})