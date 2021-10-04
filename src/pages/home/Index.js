import React , { useState , useLayoutEffect} from "react";
import { Text , View , Button, StyleSheet} from "react-native";
import ModalScanner from "../../components/ModalScanner";

export default function Home ({navigation}) {

    return (
        <View style={styles.container} >
            <Text> hello home </Text>
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