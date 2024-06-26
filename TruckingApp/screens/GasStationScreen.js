import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import { AppContext } from '../context/AppContext';

const GasStationScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [state, setState] = useContext(AppContext);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
      // Mock API call to fetch gas stations using the location
      const gasStations = [
        { id: 1, name: 'Gas Station 1', distance: '2 miles' },
        { id: 2, name: 'Gas Station 2', distance: '5 miles' },
      ];
      setState({ ...state, gasStations });
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = `Latitude: ${location.coords.latitude}, Longitude: ${location.coords.longitude}`;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nearby Gas Stations</Text>
      {state.gasStations.map((station) => (
        <Text key={station.id}>{station.name} - {station.distance}</Text>
      ))}
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default GasStationScreen;
