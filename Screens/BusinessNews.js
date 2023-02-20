import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function BusinessNews() {
    return (
      <View>
      <View style={styles.container}>
        <Text style={styles.text}>Business</Text>
      </View>
      <View>
        <Text></Text>
        <Text></Text>
      </View>
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
          fontSize:20,
      },
      flex: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,

      }
  });