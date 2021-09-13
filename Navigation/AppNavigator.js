import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native'
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import SavedScreen from '../Screens/realSavedScreen';
import CartScreen from '../Screens/CartScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import LoginScreen from "../Screens/LoginScreen"
import SignupScreen from "../Screens/SignupScreen"
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';
import Firebase from '../config/firebase';
import { AuthenticatedUserContext } from "../Navigation/AuthenticatedUserProvider"







const auth = Firebase.auth();






export default function AppNavigator() {


    const { user, setUser } = useContext(AuthenticatedUserContext);
    const [isLoading, setIsLoading] = useState(true);






    useEffect(() => {
        // onAuthStateChanged returns an unsubscriber
        const unsubscribeAuth = auth.onAuthStateChanged(async authenticatedUser => {
          try {
            await (authenticatedUser ? setUser(authenticatedUser) : setUser(null));
            setIsLoading(false);
          } catch (error) {
            console.log(error);
          }
        });
    
        // unsubscribe auth listener on unmount
        return unsubscribeAuth;
      }, []);
    
      if (isLoading) {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size='large' />
          </View>
        );
      }





    const Stack = createNativeStackNavigator();

    function AuthStack() {
      return (
        <Stack.Navigator headerMode='none'>
          <Stack.Screen name='Login' component={LoginScreen} />
          <Stack.Screen name='Signup' component={SignupScreen} />
        </Stack.Navigator>
      )
    }








    

const SavedStack = createNativeStackNavigator();

function SavedStackScreen() {
  return (
    <SavedStack.Navigator>
       
      <SavedStack.Screen name="Auth" component={AuthStack} />

      <SavedStack.Screen name="Paved" component={SavedScreen} />
    
     

    </SavedStack.Navigator>

  );
}






    const Tab = createMaterialBottomTabNavigator();   

    function MainTabNavigator() {
    return (
    
    
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Saved" component={SavedStackScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
    
    </Tab.Navigator>
    
        )
    }






    return (
       
        <NavigationContainer>
          
           <MainTabNavigator />

        </NavigationContainer>
    )
}
