import React from 'react'
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';

interface Props {
    title: string;
    icon: any;
    size: 'small'|'large';
    onPress: () => void;
}

export const SubMenuButton = ({ title, icon, size, onPress }: Props) => {
  return (
    <TouchableOpacity 
        style={ styles.button }
        onPress={ onPress }
        activeOpacity={ 0.8 }
        >
        <View style={ styles.buttonContent}>
            <Image source={icon} resizeMode='contain' style={ styles.icon } />
            <Text style={[ styles.buttonText, size === 'small' ? styles.small : styles.large ]}>{title}</Text>
        </View>
        

    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    button: {
        flex: 1,
        position: 'relative',

        backgroundColor: 'white', //TEST SIZE
        width: 200,
        height:200,
        borderRadius: 30,

       // justifyContent: 'center',
       // alignItems:'center',
    },
    buttonContent: {
      flex: 1,
      flexDirection:"column",
      position: 'relative',
      alignItems:'center',
  //    justifyContent: 'center',
    },
    icon: {
        flex:5,
        height:50,
        width:100
    },
    buttonText: {
        flex:3,
        color: 'grey',
        //fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        alignItems:'center',
        justifyContent: 'center',
    },
    small: {
        fontSize: 17,
    },
    large: {
        fontSize: 25,
    }
})