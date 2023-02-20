import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Sports() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SportScreens</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        textAlign: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'grey',
        border: '1px solid #bdbdbd'

        
    },
    text:{
        fontSize:24,
    }
});