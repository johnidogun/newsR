import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
/*import { Button, StyleSheet, Text, View } from 'react-native';*/
import React from 'react';
import Settings from './Screens/Settings';
import Sports from './Screens/Sports';
import BusinessNews from './Screens/BusinessNews';
import TechScreens from './Screens/TechScreens';
import HealthScreens from './Screens/HealthScreens';
import AllScreens from './Screens/AllScreens';
import Ionic from 'react-native-vector-icons/Ionicons';

/*import Icon from 'react-native-vector-icons/MaterialIcons';
/*import {Icon} from 'react-native-element';*/
/*import { ViewPropTypes } from 'deprecated-react-native-prop-types';*/
/*import { createDrawerNavigator,DrawerContentScrollView  } from '@react-navigation/drawer';*/



/*const TechDrawer =({navigation}) =>{

  return(
    <View style ={{flex:1, alignItems:'center', justifyContent: 'center'}}>
       <DrawerContentScrollView>
        <Button title='Drawer Page' onPress={()=> navigation.navigate('Technology')}></Button>

       </DrawerContentScrollView>
    
    </View>
  )
}
const HealthDrawer =({navigation}) =>{

  return(
    <View style ={{flex:1, alignItems:'center', justifyContent: 'center'}}>
       <DrawerContentScrollView>
        <Button title='Drawer Page' onPress={()=> navigation.navigate('Health')}></Button>

       </DrawerContentScrollView>
    
    </View>
  )
}

function MyDrawer(){
  return (
    <Drawer.Navigator>
       <Drawer.Screen name="Technology" component={TechDrawer}/>
       <Drawer.Screen name='Health' component={HealthDrawer}/>

    </Drawer.Navigator>
  )
}

const Drawer = createDrawerNavigator();*/
/*const DrawerS = DrawerContentScrollView();*/
const Tab = createBottomTabNavigator();



function App() {
  return (
    <NavigationContainer>

      <Tab.Navigator  screenOptions={ ({route})=> ({
        tabBarIcon:({focused , size, colour }) =>{
        let iconName;
        if(route.name === 'All'){
          iconName = focused ? 'ios-home': 'ios-home-outline';
        }
        else if (route.name === 'Technology'){
          iconName = focused ? 'ios-home': 'ios-home-outline';
        }
        else if (route.name === 'Health'){
          iconName = focused ? 'ios-heart': 'ios-heart-outline';
        }
        else if (route.name === 'Business'){
          iconName = focused ? 'ios-briefcase': 'ios-briefcase-outline';
        }
        else if (route.name === 'Settings'){
          iconName = focused ? 'ios-settings': 'ios-settings-outline';
        }
        else if (route.name === 'Sports'){
          iconName = focused ? 'ios-home': 'ios-home-outline';
        }
        return <Ionic name={iconName} size={size} colour={colour} />;
      }, tabBarShowLabel:false, tabBarActiveTintColor:'#ffc107'})} >


        <Tab.Screen name= 'All' component={AllScreens} options={{headerShown: false}}/>
      
        <Tab.Screen name= 'Technology' component={TechScreens} options={{headerShown: false,
           tabBarBadge: 3, tabBarBadgeStyle:{backgroundColor:'#ffc107'}}}/> 
        <Tab.Screen name= 'Health' component={HealthScreens} options={{headerShown: false}}/>
        <Tab.Screen name= 'Business' component= {BusinessNews} options={{headerShown: false}}/>
        <Tab.Screen name='Settings' component={Settings} options ={{headerShown: false}}/>
        <Tab.Screen name='Sports' component ={Sports} options = {{headerShown: false}}/>
      </Tab.Navigator>
      <StatusBar style='auto' />

    </NavigationContainer>
    
      
      
      
  );
}
export default App ;

