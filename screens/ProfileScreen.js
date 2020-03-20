import React from 'react';
import {View, Text, StyleSheet, ListItem, FlatList} from 'react-native';
import {getUsers} from '../api/profileFetch';

export default class ProfileScreen extends React.Component{

  onUserReceived = (userList => {
    this.setState(prevState => ({
      userProfile: prevState.userProfile = userList
     }));
   })

   componentDidMount() {
    getUsers(this.onUserReceived);
   }

    render(){

            return (
              <View style={styles.container}>
                
                  <Text>Profile Screen. 
                  </Text>
              </View>
              );
            }
}

const styles= StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});