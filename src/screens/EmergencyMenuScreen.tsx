import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native';
import { SubMenuButton } from '../components/SubMenuButton';

export const EmergencyMenuScreen = () => {
  return (
    <View style={ styles.container }>


        <View style={ styles.header }>
            <Image source={require('../image/header-logo.png')} />
        </View>

        <View style={ styles.title }>
            <Text>EMERGENCIA</Text>
        </View>

        <View style={ styles.menu }>
            <View style={ styles.fila }>
                <SubMenuButton 
                    title='Ambulancia'
                    onPress={ () => console.log('Ambulancia')}
                    icon={require('../image/ambulancia.png')}
                    size='large'
                />
                <SubMenuButton 
                    title='Bomberos'
                    onPress={ () => console.log('Bomberos')}
                    icon={require('../image/bombero.png')}
                    size='large'
                />
            </View>
            <View style={ styles.fila }>
                <SubMenuButton 
                    title='Policía'
                    onPress={ () => console.log('Policía')}
                    icon={require('../image/policia.png')}
                    size='large'
                />
                <SubMenuButton 
                    title='911'
                    onPress={ () => console.log('911')}
                    icon={require('../image/911.png')}
                    size='large'
                />
            </View>
            <View style={ styles.fila }>
                <SubMenuButton 
                    title='Rescate Animal'
                    onPress={ () => console.log('Rescate Animal')}
                    icon={require('../image/rescate-animal.png')}
                    size='large'
                />
                <View style={styles.emptyButton}></View>
            </View>
        </View>


    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    header: {
        flex: 2,
        backgroundColor: 'white', //TEST SIZE
        alignItems: 'center'
    },
    title: {
        flex: 1,
        backgroundColor: 'pink',
    },
    menu: {
        flex: 12,
        backgroundColor: 'white', //TEST SIZE
    },
    fila: {
        flexDirection: 'row',
        justifyContent: 'center',
        //marginBottom: 5,
        paddingHorizontal: 10,
    },
    emptyButton: {
        flex: 1,
        position: 'relative',

        backgroundColor: 'white', //TEST SIZE
        width: 200,
        height:200,
    }
})