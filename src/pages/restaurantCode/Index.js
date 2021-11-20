import React, { useState, useEffect } from "react";
import { TextInput, Text, View, Button } from 'react-native';
import { useRestaurant } from "../../context/RestaurantProvider";

export default function restaurantCode({ navigation }) {

    const { setRestaurantCode } = useRestaurant();
    const [value, onChangeText] = useState();
    const [code , setCode] = useState();
    

    useEffect(() => {
        navigation.addListener('beforeRemove', e => {
            if (e.data.action.type === 'GO_BACK') e.preventDefault();
        });
    }, [navigation])

    useEffect(() => {
        try {
            code > 3 ? searchRestaurante(code) : throw 'deve ser maior q 3'; 
        } catch (e) {
            console.log(e)
        }
    }, [code])

    const searchRestaurante = async (code) => {
        const response = await api.get('/restarante');
        let codeRestaurante = response.data?.codigo;
        setRestaurantCode(codeRestaurante)
    } 

    return (
        <View>
            <Text> Digite o Código abaixo </Text>
            <TextInput
                onChangeText={text => onChangeText(text)}
                value={value}
            />
            <Button title={'Enviar'} onPress={() => setCode(value)}></Button>
            <Button title={'voltar para home'} onPress={() => navigation.popToTop()}></Button>
        </View>
    );
};