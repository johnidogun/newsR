import { View, Text, StyleSheet } from 'react-native';
import { Divider } from "native-base";
import React from 'react'
import { BottomTabBarHeightCallbackContext } from '@react-navigation/bottom-tabs';

export default function AllScreens() {
  return (
    <View>
       <View style={styles.container}>
          <Text style={styles.text}>AllScreens</Text>
    </View>
    <View>
        <View styles={styles.flex}>
           <Text style={styles.title}>Title</Text>
           <Text style={styles.date}>Date</Text>
        </View>
    </View>
     <View styles={styles.flex}>
      <Text style={styles.description}>Description</Text>
    </View>
    <View>
        <View styles={styles.flex}>
           <Text style={styles.title}>Title</Text>
           <Text style={styles.date}>Date</Text>
        </View>
    </View>
     <View styles={styles.flex}>
      <Text style={styles.description}>Description</Text>
    </View>
    <View>
        <View styles={styles.flex}>
           <Text style={styles.title}>Title</Text>
           <Text style={styles.date}>Date</Text>
        </View>
    </View>
     <View styles={styles.flex}>
      <Text style={styles.description}>Description</Text>
    </View>
    <View>
        <View styles={styles.flex}>
           <Text style={styles.title}>Title</Text>
           <Text style={styles.date}>Date</Text>
        </View>
    </View>
     <View styles={styles.flex}>
      <Text style={styles.description}>Description</Text>
    </View>
    <View>
        <View styles={styles.flex}>
           <Text style={styles.title}>Title</Text>
           <Text style={styles.date}>Date</Text>
        </View>
    </View>
     <View styles={styles.flex}>
      <Text style={styles.description}>Description</Text>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        textAlign: 'center',
        padding: 10,
        backgroundColor: '#E0E0E0',
        border: '3px solid #bdbdbd'        
    },
    text:{
        fontSize:20,   
      
    },
    flex:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      padding:20,
      backgroundColor:'yellow',

    },
    title:{
      padding:20,
      fontSize: 13
    },
    date:{
      padding:20,      
      fontSize: 13
    },
    description:{
      padding:20,
      fontSize: 13
    },
});