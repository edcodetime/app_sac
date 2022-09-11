import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { MainMenuButton } from '../components/MainMenuButton';

interface Props extends StackScreenProps<any, any>{};

export const HomeScreen = ({ navigation }: Props) => {
  
  return (
    <View style={{
        flex: 1,
        //alignItems: 'center', //Centrar horizontalmente
        //justifyContent: 'center' //Centrar verticalmente
      }}>

        <View style={ styles.header }>
          <Image source={require('../image/header-logo.png')} style={ styles.header_image } />
        </View>

        <View style={ styles.weather }>
          
        </View>

        <View style={ styles.menu }>
          <MainMenuButton 
            title='EMERGENCIA'
            color='#E6151B'
            onPress={ () => navigation.navigate('EmergencyMenuScreen')}
            icon={require('../image/emergencia.png')}
          />

          <MainMenuButton 
            title='REPORTE SERV.'
            color='#FA3530'
            onPress={ () => navigation.navigate('ServicesMenuScreen')}
            icon={require('../image/advertencia.png')}
          />

          <MainMenuButton 
            title='BOTÓN DE PÁNICO'
            color='#FE592E'
            onPress={ () => console.log('BOTÓN DE PÁNICO')}
            icon={require('../image/alerta.png')}
          />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 3,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  header_image: {
    //flex: 1,
    //resizeMode:'cover',
  },
  weather: {
    flex: 2,
    backgroundColor: '#003870',
  },
  menu: {
    flex: 10,
    backgroundColor: 'white', //TEST SIZE
    alignItems: 'center',
    justifyContent: 'space-evenly',
  }
})