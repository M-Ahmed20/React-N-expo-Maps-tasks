import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Brightness from 'expo-brightness';

export default function Bright() {
  useEffect(() => {
    (async () => {
      const { status } = await Brightness.requestPermissionsAsync();
      if (status === 'granted') {
        Brightness.setSystemBrightnessAsync(1);
      }
    })();
  }, []);

  return (
    <View>
      <Text>Brightness Module Example</Text>
    </View>
  );
}