import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button as RNButton } from 'react-native';
import Firebase from '../config/firebase';
import { AuthenticatedUserContext } from '../Navigation/AuthenticatedUserProvider';
import  IconButton   from '../Components/IconButton';
import Orders from '../Screens/Orders';
import Details from '../Screens/Details';
import Password from '../Screens/Password';
import { createNativeStackNavigator } from '@react-navigation/native-stack';







const auth = Firebase.auth();




export default function ProfileScreen({navigation}) {

  const { user } = useContext(AuthenticatedUserContext);

  //Copy this to enable signout function..
  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };













  return (


    <View>
        <Text>Welcome to Profile Screen</Text>
         <Text>{user.email}</Text>


         <IconButton
          name='logout'
          size={24}
          color='black'
          onPress={handleSignOut}
        />




<View style={{marginTop:50}} >

     

     <RNButton
     
        onPress={() => navigation.navigate('My Details')}
        title='My Details'
        color='black'
      />


<RNButton
        onPress={() => navigation.navigate('My Orders')}
        title='My Orders'
        color='black'
      />


<RNButton
        onPress={() => navigation.navigate('Change my password')}
        title='Change my password'
        color='black'
      />

</View>

    </View>


  )

}
