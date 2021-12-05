import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Button, Dialog, Portal, Avatar, Paragraph, Provider } from 'react-native-paper';

export default function ErrorConection({ navigation }) {

    const reload = () => {
        this.refreshScreen = this.refreshScreen.bind(this);
        return this.refreshScreen;
    }

    const [visible, setSetVisible] = useState(true);

    const hideDialog = () => {
        reload();
        return setSetVisible(false);
    }

    return (
        <Provider>
            <View>
                <Portal>
                    <Dialog visible={visible} onDismiss={hideDialog}>
                        <Dialog.Title>Ops...</Dialog.Title>
                        <Dialog.Content>
                            <Paragraph>Erro de conexão</Paragraph>
                        </Dialog.Content>
                        <Dialog.Actions>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </View>
        </Provider>
    );
}