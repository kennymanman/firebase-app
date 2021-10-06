import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import  IconButton   from '../Components/IconButton';
import Firebase from '../config/firebase';
import { AuthenticatedUserContext } from '../Navigation/AuthenticatedUserProvider';


const auth = Firebase.auth();




export default function SavedScreen() {

  const { user } = useContext(AuthenticatedUserContext);


  return (


    <View>
        <Text>Welcome to saved Screen</Text>
         <Text>{user.uid}</Text>

    </View>


  )

}




