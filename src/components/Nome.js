import React, {useState, useEffect} from "react";
import { TextInput, View , Button , Text } from "react-native";
import { useUser } from "../context/UserProvider";


export default function Nome({navigation}) {

    const [newName , setNewName] = useState();
    const [value, onChangeText] = useState();
    const {user,setUser} = useUser();

    useEffect(() => {
        console.log(user)
        user.name !== null ? navigation.navigate('ModalScanner') : '';
    },[user])

    const saveName  = (value) => {
        setNewName(value);
        let newUser  = {...user};
        newUser.name = newName;
        setUser(newUser);
    }

    return (
        <View>
            <Text> Como vc quer ser Chamado ?</Text>
            <TextInput
                onChangeText={text => onChangeText(text)}
                value={value}
            />
            <Button title={'Salvar'} onPress={() => saveName(value)}></Button>
        </View>
    );
}