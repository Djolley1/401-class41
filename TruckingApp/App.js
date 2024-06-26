import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DocumentUploadScreen from './screens/DocumentUploadScreen';
import RateCalculatorScreen from './screens/RateCalculatorScreen';
import GasStationScreen from './screens/GasStationScreen';
import { AppProvider } from './context/AppContext';
import { ThemeProviderWrapper } from './context/ThemeContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProviderWrapper>
      <AppProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="DocumentUpload" component={DocumentUploadScreen} />
            <Stack.Screen name="RateCalculator" component={RateCalculatorScreen} />
            <Stack.Screen name="GasStation" component={GasStationScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </AppProvider>
    </ThemeProviderWrapper>
  );
}
