import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';

interface Props {
  title: string;
  icon: any;
  color: string;
  onPress: () => void;
}

export const  MainMenuButton = ( { title, icon, color, onPress }: Props) => {
  return (
    <TouchableOpacity 
      style={{
        ...styles.button,
        backgroundColor: color,
      }}
      onPress={ onPress }
      activeOpacity={ 0.8 }
      >
        <View style={ styles.buttonContent}>
          <Text style={ styles.buttonText }>{title}</Text>
          <Image source={icon} resizeMode='contain' style={ styles.icon } />
        </View>
        

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        position: 'relative',
        backgroundColor: 'red',
        width: 350,
        height:80,
        borderRadius: 30,

        justifyContent: 'center',
        alignItems:'center',
    },
    buttonContent: {
      flex: .5,
      flexDirection:"row",
      alignItems:'center',
      justifyContent: 'center',
    },
    buttonText: {
        flex:.7,
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
        alignItems:'center',
        justifyContent: 'center',
    },
    icon: {
        flex:.2,
        height:80,
    }
})