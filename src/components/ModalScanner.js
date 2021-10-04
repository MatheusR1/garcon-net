import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, Modal } from "react-native";
import Scanner from "./Scanner";

export default function ModalScanner({navigation}){

    return (
        <Modal animationType='slide' style={style.modal}>
            <Scanner />
            <StatusBar style="auto"/>
            <Button title="Cancelar" onPress={()=> navigation.pop()} ></Button>
        </Modal>
    );
}

const style = StyleSheet.create({
    modal: {
        width:"100%",
        height : "100%",
        alignItems: "center",
        justifyContent : "space-around",
        backgroundColor:"lightgrey",
    }
})