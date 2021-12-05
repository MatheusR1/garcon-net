import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useTable } from "../context/TableProvider";
import { Camera } from 'expo-camera';
import { useNavigation } from '@react-navigation/native';
import api from '../services/api';

export default function scanner() {

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const { TableCode, setTableCode } = useTable();
  const navigation = useNavigation();
  const [codeValid, setCodeValid] = useState(false);
  const [code, setCode] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        let id = code.slice(-1);
        const response = await api.get(`/tables/${id}.json`);
        let status = response.data?.status;

        if (status !== "reserved") {
          setCodeValid(true);
          setTableCode(code);
        }
      } catch (error) {
        console.log(error.request)
      }
    })();
  }, [code, TableCode, codeValid]);

  const handleBarCodeScanned = ({ type, data }) => {
    setCode(data);
    setScanned(true);
  };

  if (hasPermission === null) {
    return <Text> Dê permissão para acessar</Text>;
  }
  
  if (hasPermission === false) {
    return <Text>Sem acesso à camera</Text>;
  }

  return (
    <View style={styles.container}>
      {codeValid && <ActivityIndicator size="large" style= {styles.loading} />}
      <Camera
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
        ratio='16:9'
      >
        <Text style={styles.description}> Aponte a Camera para o QRCODE</Text>
      </Camera>
      <Button title={'Digitar Código da Mesa'} onPress={() => navigation.navigate('TableCode')} />
      {scanned && <Button title={'Scannear novamente'} onPress={() => setScanned(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "95%",
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-end",
    backgroundColor: "green"
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999999,
    elevation: 99999
  }
});


