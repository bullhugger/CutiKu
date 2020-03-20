import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import * as firebase from 'firebase';

export default class NoticeScreen extends React.Component{
    render(){
        return (
        <View style={styles.container}>
            <Text>Notice Screen.</Text>
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