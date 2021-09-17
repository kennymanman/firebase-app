
import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native'
import ProfileScreen from "../Screens/ProfileScreen";
import AuthStack from "../Navigation/AuthStack"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthenticatedUserContext } from '../Navigation/AuthenticatedUserProvider';
import Orders from '../Screens/Orders';
import Details from '../Screens/Details';
import Password from '../Screens/Password';
import { ActivityIndicator } from 'react-native';
import Firebase from '../config/firebase';


const auth = Firebase.auth();




export default function ProfileStack() {


  const { user, setUser } = useContext(AuthenticatedUserContext); 

  


    


    const ProfileStack = createNativeStackNavigator();

    function ProfileStackScreen () {
  return (
      
    <ProfileStack.Navigator  >

       
      

      <ProfileStack.Screen name="Profilepage" component={ProfileScreen} />
      <ProfileStack.Screen name="My Details" component={Details} />
      <ProfileStack.Screen name="My Orders" component={Orders} />
      <ProfileStack.Screen name="Change my password" component={Password} />

    </ProfileStack.Navigator>

  );
}



return (

  <NavigationContainer independent={true}>
  {user ? <ProfileStackScreen /> : <AuthStack />}
  </NavigationContainer>
)

  

} 


