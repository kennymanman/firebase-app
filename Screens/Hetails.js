import React, { useState, useContext } from "react"
import firebase from "../config/firebase"
import { View, Text, TextInput, Button, SafeAreaView } from 'react-native'
import { AuthenticatedUserContext } from '../Navigation/AuthenticatedUserProvider';



export default function Hetails () {








  const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
  const [qty, setQty] = useState("");
   const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");



const onSubmit = e => {
    /* 
    preventDefault is important because it 
    prevents the whole page from reloading
    */
    e.preventDefault();
    firebase
      .firestore()
      .collection("data")
      .add({
        firstName,
        lastName,
        qty,
        phone,
        address
      })
      //.then will reset the form to nothing
      .then(() => setFirstName(""), setLastName(""), setQty(""), setPhone(""), setAddress(""));
  };


return (
<View>

<SafeAreaView>
<TextInput
            value={firstName}
            placeholder='First name'
            onChange={e => setFirstName(e.target.value)}
            type="text"
            name="firstName"
/>
<TextInput
            value={lastName}
            placeholder='last name'
            onChange={e => setLastName(e.target.value)}
     type="text"
     name="lastName"
/>
<TextInput
            value={qty}
            placeholder='quantity'
            onChange={e => setQty(e.target.value)}
           type="text"
  />
<Button onPress={onSubmit} title='Add my info' />
</SafeAreaView>
</View> 
)

}
