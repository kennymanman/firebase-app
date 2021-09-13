
import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native'
import ProfileScreen from "../Screens/ProfileScreen";
import AuthStack from "../Navigation/AuthStack"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthenticatedUserContext } from '../Navigation/AuthenticatedUserProvider';
import { ActivityIndicator } from 'react-native';
import Firebase from '../config/firebase';


const auth = Firebase.auth();




export default function ProfileStack() {


  {/*

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
    }   */}


    


    const ProfileStack = createNativeStackNavigator();


  return (
      
    <ProfileStack.Navigator  >

       
      <ProfileStack.Screen name="Auth" component={AuthStack} /> 

      <ProfileStack.Screen name="Profilepage" component={ProfileScreen} />
    
     

    </ProfileStack.Navigator>

  );
}






