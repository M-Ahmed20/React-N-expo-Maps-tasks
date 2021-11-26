import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';

import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Location from 'expo-location';

export default function Mapss() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            console.log(location, 'locationlocation')
            setLocation(location);
        })();
    }, []);


    return (
        <View style={styles.container}>
            {location ?
                <MapView style={styles.map}
                    initialRegion={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    maxZoomLevel={20}
                    minZoomLevel={15}
                >
                    <Marker
                        coordinate={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                        }}
                        title={"Hamara Ghar :)"}
                    />

                </MapView> : null

            }

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});