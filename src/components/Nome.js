import React, {useState, useEffect} from "react";
import { TextInput, View , Button , Text } from "react-native";
import { useUser } from "../context/UserProvider";


export default function Nome() {

    const [newName , setNewName] = useState();
    const [value, onChangeText] = useState();
    const {user,setUser} = useUser();

    useEffect(() => {
        let newUser  = {...user}
        newUser.name = newName;
        setUser(newUser)
    }, [newName])

    return (
        <View>
            <Text> Como vc quer ser Chamdo ?</Text>
            <TextInput
                onChangeText={text => onChangeText(text)}
                value={value}
            />
            <Button title={'Salvar'} onPress={() => setNewName(value)}></Button>
        </View>
    );
}