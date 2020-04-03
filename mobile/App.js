import React from 'react';
import Routes from './src/Routes'
import { StatusBar, View } from 'react-native'
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'


export default function App() {
  return (
    <View style={{ flex: 1}}>
      <StatusBar barStyle='dark-content' />        
      <Routes />
    </View>
  )
}
