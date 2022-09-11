import 'react-native-gesture-handler';

import React from 'react'
import { SafeAreaView, Text, View } from 'react-native';
import { HomeScreen } from './src/screens/HomeScreen';
import { EmergencyMenuScreen } from './src/screens/EmergencyMenuScreen';
import { ServicesMenuScreen } from './src/screens/ServicesMenuScreen';
import { styles } from './src/theme/appTheme';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';

const App = () => {
  return (
    // <SafeAreaView style={ styles.backgroundApp }>
    <NavigationContainer>
      <StackNavigator />
      {/* <HomeScreen /> */}
      {/* <EmergencyMenuScreen /> */}
      {/* <ServicesMenuScreen />  */}
    </NavigationContainer>
        
        
    // </SafeAreaView>
    
  )
}


export default App;