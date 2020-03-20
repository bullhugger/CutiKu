import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, StatusBar, SafeAreaView} from 'react-native';
import LoginScreen from './LoginScreen';
import * as firebase from 'firebase';

export default class HomeScreen extends React.Component{

    static navigationOptions = {
        headerShown: false
    }

    state = {
        email: "",
        displayName: ""
    }

    componentDidMount() {
        const {email, displayName} = firebase.auth().currentUser;
        this.setState({email, displayName});
    }

    signOutUser = () => {
        firebase.auth().signOut();
    }
    render(){
        return (
        <SafeAreaView>
            <View style={styles.container}>
                <StatusBar barStyle="dark-content"></StatusBar>
                <TouchableOpacity 
                style={styles.button}
                onPress= {this.signOutUser}
                >
                    <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>
                <View style = {styles.content}>
            <Text style = {styles.greeting}>Hi {this.state.email}</Text>
                </View>
            </View>
        </SafeAreaView>
        );
    }
}

const styles= StyleSheet.create ({
  container: {
    marginTop: "6%",
    flex: 1,
  },
  button: {
      alignSelf: "flex-end",
      backgroundColor: "darkblue",
      paddingHorizontal: '3%',
      paddingVertical: '1%'
  },
  buttonText: {
      color: "white"
  },
  greeting: {
      alignSelf: 'center',
  },
  content: {
      alignItems: 'center',
      justifyContent: 'center',
  }
});