import React, { Component } from "react"
import { StyleSheet, SafeAreaView, Text, View, TextInput, Button } from "react-native"
import Firebase from "../config/firebase"
import "firebase/firestore"



const firestore= Firebase.firestore();

export default class Letails extends Component {
  state = {
    Firstname: "",
    Lastname: "",
    Address: "",
    Phone: "",
  }




render() {


    const handleRpdate = async() => {
     
  
      
      firestore()
      .collection('Fruits')
      .doc("w3fKVYybVbLeYIdRbbNX")
      .update({
        Firstname: userData.Firstname,
        Lastname: userData.Lastname,
        Address: userData.Address,
        Phone: userData.Phone,
       
      })
      .then(() => {
        console.log('Profile changed');
        Alert.alert(
          'Profile Updated!',
          'Your profile has been updated successfully.'
        );
      })
    }





    const handleUpdate = async() => {

dbstore
.collection("Fruits")
.doc("w3fKVYybVbLeYIdRbbNX")
.add({
  Firstname: "h",
  Lastname:"h",
  Phone: "p"
})

    }








    const { Firstname, Lastname, Address, Phone } = this.state
return (
  
      <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            value={Firstname}
            placeholder='First name'
            style={styles.textInput}
            onChangeText={value => this.setState({ Firstname: value })}
          />
<TextInput
            value={Lastname}
            placeholder='last name'
            style={styles.textInput}
            onChangeText={value => this.setState({ Lastname: value })}
          /> 


<TextInput
            value={Address}
            placeholder='Address'
            style={styles.textInput}
            onChangeText={value => this.setState({ Address: value })}
          /> 


<TextInput
            value={Phone}
            placeholder='Phone number'
            style={styles.textInput}
            onChangeText={value => this.setState({ Phone: value })}
          /> 

<Button onPress={handleUpdate} title='Add my info' color='#841584' />
        </View>
      </SafeAreaView>
    )
  }
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  inputContainer: {
    margin: 30
  },
  textInput: {
    height: 30,
    textAlign: "center",
    color: "#333333",
    marginBottom: 10,
    fontSize: 24,
    borderWidth: 1,
    borderBottomColor: "#111111"
  }
})