import React from "react";
import { Text , View} from "react-native";
import { useUser } from '../../context/UserProvider';
import {useTable } from '../../context/TableProvider';

export default function User () {

    const {user} = useUser();
    const {tableCode} = useTable();

    return (
        <View>
            <Text> usuario : {user.name} </Text>
            <Text> debito : {user.debit === null ? 0 : user.debit}</Text>
            <Text> mesa : {tableCode}</Text>
        </View>
    )
}