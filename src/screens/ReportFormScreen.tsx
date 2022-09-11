import React from 'react'
import { Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'ReportFormScreen'>{};

export const ReportFormScreen = ({ route, navigation}: Props) => {
  
  const params = route.params;
  
  return (
    <View>

        <Text>{ params!.service }</Text>
    </View>
  )
}
