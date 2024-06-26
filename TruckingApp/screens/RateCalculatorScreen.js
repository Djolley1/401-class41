import React, { useContext, useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { AppContext } from '../context/AppContext';

const RateCalculatorScreen = () => {
  const [state, setState] = useContext(AppContext);
  const [distance, setDistance] = useState('');
  const [rate, setRate] = useState('');

  const calculateRate = () => {
    const rateResult = parseFloat(distance) * parseFloat(rate);
    setState({ ...state, rate: rateResult });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rate Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter distance"
        value={distance}
        onChangeText={setDistance}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter rate per mile"
        value={rate}
        onChangeText={setRate}
        keyboardType="numeric"
      />
      <Button title="Calculate" onPress={calculateRate} />
      {state.rate !== null && <Text>Total Rate: ${state.rate.toFixed(2)}</Text>}
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
  },
});

export default RateCalculatorScreen;
