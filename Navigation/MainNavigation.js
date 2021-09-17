
import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native'
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';

import CartScreen from '../Screens/CartScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import LoginScreen from "../Screens/LoginScreen"
import SignupScreen from "../Screens/SignupScreen"
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';
import Firebase from '../config/firebase';
import { AuthenticatedUserContext } from "../Navigation/AuthenticatedUserProvider"
import SavedStack from "../Navigation/SavedStack"
import ProfileStack from "../Navigation/ProfileStack"
import AuthStack from '../Navigation/AuthStack';






const auth = Firebase.auth();

export default function MainNavigation() {




const Tab = createMaterialBottomTabNavigator();   

function MainoTabNavigator() {
    return (
    
    
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Saved" component={SavedStack} />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Profile" component={ProfileStack} />
    
    </Tab.Navigator>
    
        )
    }



    return (

<NavigationContainer>
<MainoTabNavigator/>
</NavigationContainer>
      
    )
}
