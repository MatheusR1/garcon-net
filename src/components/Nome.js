import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useUser } from "../context/UserProvider";
import { Col, Row, Grid } from "react-native-easy-grid";
import { Button, TextInput, Title} from 'react-native-paper';

export default function Nome({ navigation }) {

    const [value, onChangeText] = useState();
    const { user, setUser } = useUser();

    useEffect(() => {
        let possibilities = [null, undefined]
        possibilities.includes(user.name) ? "" : navigation.navigate('ModalScanner');
    }, [user])

    const saveName = (value) => {
        let possibilities = [null, undefined]
        if (!possibilities.includes(value)) {
            if (value.length > 5) {
                let newUser = { ...user };
                newUser.name = value;
                setUser(newUser);
                console.log(user, newUser);
            }
        }
    }

    return (
        <Grid style={styles.container}> 
            <Row size={1}>
                <View style={styles.title}>
                  <Title > Como vc quer ser Chamado ?</Title>
                </View>
            </Row>
            <Row size={1}>
                <View>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => onChangeText(text)}
                        value={value}
                    />
                </View>
            </Row>
            <Row size={1}>
                <View style={styles.button}>
                 <Button onPress={() => saveName(value)}> Salvar </Button>
                </View>
            </Row>
        </Grid>
    );
}

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
    input :{
        minWidth : '90%'
    }
})