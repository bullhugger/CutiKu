import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Image, StatusBar} from 'react-native';

import * as firebase from 'firebase';

export default class LoginScreen extends React.Component{

    static navigationOptions = {
        headerShown: false
    }
    state = {
        email: "",
        password: "",
        errorMessage: null
    }

    handleLogin = () => {
        const {email, password} = this.state;

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error => this.setState({errorMessage: error.message}))
    }
  render(){
    return (
      <View style= {styles.container}>

        <StatusBar barStyle="dark-content"/>

        <Image 
        source={require("../assets/webse-logo_bk.png")}
        style={styles.logo}
        ></Image>

        <View style= {styles.errorMessage}>
            {this.state.errorMessage && <Text style= {styles.error}>{this.state.errorMessage}</Text>}
        </View>

        <View style= {styles.formLogin}>
            <View>
                <Text style= {styles.inputTitle}>Email Address</Text>
                  <TextInput 
                  style= {styles.input} 
                  autoCapitalize="none"
                  onChangeText = {email => this.setState({email})}
                  ></TextInput>
            </View>
            <View style={{marginTop: 32}}>
                <Text style= {styles.inputTitle}>Password</Text>
                  <TextInput 
                  style= {styles.input} 
                  secureTextEntry 
                  autoCapitalize="none"
                  onChangeText = {password => this.setState({password})}
                  value = {this.state.password}
                  ></TextInput>
            </View>

            <TouchableOpacity 
            style= {styles.button}
            onPress= {this.handleLogin}>
                <Text style= {{color: '#fff', fontWeight: "500", alignSelf: 'center', fontSize: 15}}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity style= {{marginTop: 32, alignSelf: 'center'}}>
                <Text style={{color: "#414959", fontSize: 13}}>Forget your login? <Text style={{fontWeight: '500', color: '#E9446A'}}>Email admin.</Text></Text>
            </TouchableOpacity>

        </View>

      </View>
    );
  }
}

const styles= StyleSheet.create ({
  container: {
    flex: 1
  },
  formLogin: {
    marginBottom: 48,
    marginHorizontal: 30
  },
  errorMessage: {
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  button: {
    marginTop: 20,
    marginHorizontal: 30,
    backgroundColor: 'darkblue',
    borderRadius: 8,
    padding: 10
  },
  input: {
    borderBottomColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15

  },
  inputTitle: {
    textTransform: "uppercase",
    fontSize: 10,
    color: '#8A8F9E'
  },
  greeting: {
    marginTop: '13%',
    fontSize: 18,
    textAlign: 'center',    
  },
  logo: {
      marginTop: '30%',
      justifyContent: 'center',
      alignSelf: 'center'
  }
});