import React, {Component} from 'react'
import { View, Text } from 'react-native'
import Firebase from '../config/firebase';









class Details extends Component {
    state={
        user: {
            name: ""
        }
    }


constructor(props) {
    super(props);
    this.getUser();
    this.subscriber = firestore().collection("users").doc
    //Unique ID copy it below
    ("LMEVsI1XtilKQbYgPee").onSnapshot(doc=> {

        this.setState({
            user: {
                 name:doc.data().name
            }
        })
    })
}


getUser = async() =>{
    const userDocument = await firestore().collection("users").
    doc("LMEVsI1XtilKQbYgPeey").get()
    console.log(userDocument)
};


render() {
    return (
        <View>
            <Text>Name: {this.state.user.name}</Text>
        </View>
    )
}

}

export default  Getails