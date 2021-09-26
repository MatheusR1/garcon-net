import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, Modal, View } from "react-native";
import Scanner from "./Scanner";

export default function ModalScanner(props){

    return (
        <Modal visible={props.modalVisible} animationType='slide' style={style.modal}>
            <Scanner />
            <StatusBar style="auto"/>
            <Button title="Cancelar" onPress ={ () => props.onClose()}></Button>
        </Modal>
    )
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