import React, { useState, useEffect } from "react";
import { TextInput, Text, View, Button } from 'react-native';
import { useRestaurant } from "../../context/RestaurantProvider";

export default function restaurantCode({ navigation }) {

    const { setRestaurantCode } = useRestaurant();
    const [value, onChangeText] = useState();

    useEffect(() => {
        navigation.addListener('beforeRemove', e => {
            if (e.data.action.type === 'GO_BACK') e.preventDefault();
        });
    }, [navigation])

    return (
        <View>
            <Text> Digite o Código abaixo </Text>
            <TextInput
                onChangeText={text => onChangeText(text)}
                value={value}
            />
            <Button title={'Enviar'} onPress={() => setRestaurantCode(value)}></Button>
            <Button title={'voltar para home'} onPress={() => navigation.popToTop()}></Button>
        </View>
    );
};