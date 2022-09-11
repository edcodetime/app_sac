import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { EmergencyMenuScreen } from '../screens/EmergencyMenuScreen';
import { ServicesMenuScreen } from '../screens/ServicesMenuScreen';
import { ReportFormScreen } from '../screens/ReportFormScreen';
import { SERVICE } from '../constants/enums';

export type RootStackParams = {
    HomeScreen: undefined,
    EmergencyMenuScreen: undefined,
    ServicesMenuScreen: undefined,
    ReportFormScreen: { service: SERVICE }
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerStyle: {
                elevation: 0,
                shadowColor: 'transparent'
            }
        }}
    
    >
      <Stack.Screen name="HomeScreen" options={{ title:"Home" }} component={ HomeScreen } />
      <Stack.Screen name="EmergencyMenuScreen" options={{ title:"Emergencia" }} component={ EmergencyMenuScreen } />
      <Stack.Screen name="ServicesMenuScreen" options={{ title:"Reporte servicios" }} component={ ServicesMenuScreen } />
      <Stack.Screen name="ReportFormScreen" options={{ title:"Reporte" }} component={ ReportFormScreen } />
    </Stack.Navigator>
  );
}