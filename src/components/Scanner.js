import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useRestaurant } from "../context/RestaurantProvider";
import { Camera } from 'expo-camera';
import { useNavigation } from '@react-navigation/native';

export default function scanner() {

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const {setRestaurantCode}  = useRestaurant();
  const navigation = useNavigation()

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setRestaurantCode(data);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
        ratio='16:9'
      >
        <Text style={styles.description}> Aponte a Camera para o QRCODE</Text>
      </Camera>
      <Button title={'Digitar Código do Restaurante'} onPress={() => navigation.navigate('restaurantCode')} />
      {scanned && <Button title={'Scannear novamente'} onPress={() => setScanned(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      height :"95%",
      width : "100%",
      flexDirection: "column",
      justifyContent: "flex-end",
      backgroundColor: "green"
    },
  });
  

