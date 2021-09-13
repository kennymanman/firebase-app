import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import  IconButton   from '../Components/IconButton';
import Firebase from '../config/firebase';
import { AuthenticatedUserContext } from '../Navigation/AuthenticatedUserProvider';


const auth = Firebase.auth();




export default function ProfileScreen() {

  const { user } = useContext(AuthenticatedUserContext);


  return (


    <View>
        <Text>Welcome to Profile Screen</Text>
         <Text>{user.email}</Text>
    </View>


  )

}
