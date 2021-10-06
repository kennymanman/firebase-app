import React, { useState, useContext, PureComponent, useEffect } from "react"
import firebase from "../config/firebase"
import { View, Text, TextInput, Button, SafeAreaView } from 'react-native'
import { AuthenticatedUserContext } from '../Navigation/AuthenticatedUserProvider';






export class Details extends PureComponent {



constructor() {
super();
this.state = {
firstname: "",
lastname: "",
address: "",
phone:  "" ,
};
 } 


updateInput = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
}




addUser = e => {
  e.preventDefault();
  const db = firebase.firestore();
  db.settings({
    timestampsInSnapshots: true
  });
  const userRef = db.collection("info").add({
    firstname: this.state.firstname,
    lastname: this.state.lastname,
    address: this.state.address,
    phone: this.state.phone
  });  
  
  this.setState({
    firstname: "",
    lastname: "",
    address: "",
    phone: ""
  });
};



render() {
return (


<View>
<SafeAreaView>


<TextInput
            
placeholder='First name'
onChangeText={(text)=> 
this.setState({firstname: text })}
type="text"
name="firstname"
value={this.state.firstname} 
/>


<TextInput
  placeholder='Last name'
  onChangeText={(text)=> this.setState({lastname: text})}
  type="text"
  name="lastname"
  value={this.state.lastname}
           
/>


<TextInput
            placeholder='Address'
            onChangeText={(text)=> this.setState({address: text})}
            type="text"
            name="address"
            value={this.state.address}
  />


  <TextInput
            placeholder='Phone'
            onChangeText={(text)=> this.setState({phone: text})}
            type="text"
            name="phone"
            value={this.state.phone}
  />



<Button onPress={this.addUser} title='Add my info' />

</SafeAreaView>

</View>
        )
    }
}

export default Details


