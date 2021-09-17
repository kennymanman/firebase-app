
import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native'
import SavedScreen from "../Screens/SavedScreen";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthenticatedUserContext } from '../Navigation/AuthenticatedUserProvider';
import { ActivityIndicator } from 'react-native';
import Firebase from '../config/firebase';
import AuthStack from '../Navigation/AuthStack'

import ProfileScreen from '../Screens/ProfileScreen';
import RandomScreen from '../Screens/RandomScreen';




const auth = Firebase.auth();

export default function SavedStack() {

 

  





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
  





  





  const SavedStack = createNativeStackNavigator();

  function SavedStackScreen () {
return (
  <SavedStack.Navigator headerMode="none"  >
    
<SavedStack.Screen name="SavedScreen" component={SavedScreen} />

     
</SavedStack.Navigator> 
)

  }





return (

  <NavigationContainer independent={true}>
  {user ? <SavedStackScreen /> : <AuthStack />}
  </NavigationContainer>
)

  

} 



