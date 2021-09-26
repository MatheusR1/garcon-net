import React , { useState } from "react";
import { Text , View , Button, StyleSheet} from "react-native";
import ModalScanner from "../../components/ModalScanner";

export default function Home () {
    
    const [modalVisible,setmodalVisible] = useState(false);

    return (
        <View style={styles.container} >
            <Text> hello home </Text>
            <Button title="acesse o restaurante" onPress={() => setmodalVisible(true)}></Button>
            <ModalScanner modalVisible={modalVisible} onClose={ () => setmodalVisible(false)}/>
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