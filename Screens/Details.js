import React, { Component } from "react"
import { StyleSheet, SafeAreaView, Text, View, TextInput, Button } from "react-native"




export default class Details extends Component {
  state = {
    Firstname: "",
    Lastname: "",
    Address: "",
    Phone: "",
  }

  render() {
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

<Button onPress={() => alert("Profile changed")} title='Add my info' color='#841584' />
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