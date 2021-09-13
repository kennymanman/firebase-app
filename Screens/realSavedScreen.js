import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import Firebase from '../config/firebase';
import { AuthenticatedUserContext } from '../Navigation/AuthenticatedUserProvider';



const auth = Firebase.auth();

export default function realSavedScreen() {

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
            <Text>Saved</Text>
           

            <Text>{user.email}</Text>
        </View>
    )
}
