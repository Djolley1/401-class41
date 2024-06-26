import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trucking App</Text>
      <Button
        title="Upload Documents"
        onPress={() => navigation.navigate('DocumentUpload')}
      />
      <Button
        title="Calculate Rates"
        onPress={() => navigation.navigate('RateCalculator')}
      />
      <Button
        title="Find Gas Stations"
        onPress={() => navigation.navigate('GasStation')}
      />
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

export default HomeScreen;
