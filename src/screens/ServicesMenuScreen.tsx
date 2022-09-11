import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SubMenuButton } from '../components/SubMenuButton';
import { SERVICE } from '../constants/enums';

interface Props extends StackScreenProps<any, any>{};

export const ServicesMenuScreen = ({ navigation }: Props) => {

    // headerBackTitle si no se pone, quedaria en el idioma que este el telefono
    useEffect(() => {
        navigation.setOptions({
            headerBackTitle: 'Atras'
        })
    }, [])

  return (
    // <ScrollView >
    <View style={ styles.container }>


    <View style={ styles.header }>
        <Image source={require('../image/header-logo.png')} />
    </View>

    <View style={ styles.title }>
        <Text>REPORTE SERVICIOS</Text>
    </View>

    <View style={ styles.menu }>
        <View style={ styles.fila }>
            <SubMenuButton 
                title='Agua potable y drenaje'
                onPress={ () => navigation.navigate('ReportFormScreen', {
                    service: SERVICE.AGUA_POTABLE_Y_DRENAJE
                })}
                icon={require('../image/grifo.png')}
                size='small'
            />
            <SubMenuButton 
                title='Seguridad publica'
                onPress={ () => navigation.navigate('ReportFormScreen', {
                    service: SERVICE.SEGURIDAD_PUBLICA
                })}
                icon={require('../image/camara-de-vigilancia.png')}
                size='small'
            />
            <SubMenuButton 
                title='Protección civil'
                onPress={ () => navigation.navigate('ReportFormScreen', {
                    service: SERVICE.PROTECCION_CIVIL
                })}
                icon={require('../image/architect.png')}
                size='small'
            />
        </View>
        <View style={ styles.fila }>
            <SubMenuButton 
                title='Mantenimiento calles / baches'
                onPress={ () => navigation.navigate('ReportFormScreen', {
                    service: SERVICE.MANTENIMIENTO_CALLES
                })}
                icon={require('../image/coche.png')}
                size='small'
            />
            <SubMenuButton 
                title='Alumbrado público'
                onPress={ () => navigation.navigate('ReportFormScreen', {
                    service: SERVICE.ALUMBRADO_PUBLICO
                })}
                icon={require('../image/luz-de-la-calle.png')}
                size='small'
            />
            <SubMenuButton 
                title='Basura'
                onPress={ () => navigation.navigate('ReportFormScreen', {
                    service: SERVICE.BASURA
                })}
                icon={require('../image/basura.png')}
                size='small'
            />
        </View>
        <View style={ styles.fila }>
            <SubMenuButton 
                title='Violencia de género'
                onPress={ () => navigation.navigate('ReportFormScreen', {
                    service: SERVICE.VIOLENCIA_DE_GENERO
                })}
                icon={require('../image/detener-la-violencia.png')}
                size='small'
            />
            <SubMenuButton 
                title='Maltrato animal'
                onPress={ () => navigation.navigate('ReportFormScreen', {
                    service: SERVICE.MALTRATO_ANIMAL
                })}
                icon={require('../image/maltrato-animal.png')}
                size='small'
            />
            <SubMenuButton 
                title='Mantenimiento urbano / limpia'
                onPress={ () => navigation.navigate('ReportFormScreen', {
                    service: SERVICE.MANTENIMIENTO_URBANO
                })}
                icon={require('../image/parque.png')}
                size='small'
            />
           
        </View>
        <View style={ styles.fila }>
            <SubMenuButton 
                title='Alerta sísmica'
                onPress={ () => navigation.navigate('ReportFormScreen', {
                    service: SERVICE.ALERTA_SISMICA
                })}
                icon={require('../image/megafono.png')}
                size='small'
            />
            {/* <View style={styles.emptyButton}></View>
            <View style={styles.emptyButton}></View> */}
           
        </View>
    </View>


</View>
// </ScrollView>
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
        backgroundColor: 'white',  //TEST SIZE
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