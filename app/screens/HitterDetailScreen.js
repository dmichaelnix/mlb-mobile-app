'use strict'
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';
import ViewContainer from '../components/ViewContainer'
import StatusBarBackground from '../components/StatusBarBackground'
import Icon from 'react-native-vector-icons/FontAwesome'

class HitterDetailScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ViewContainer>
        <StatusBarBackground />
        <Text style={{marginTop: 100, fontSize: 30, backgroundColor: 'coral', padding: 10}}>{'Hitter Val Scouting Report for'}</Text>
        <Text style={styles.hitterName}>{`${this.props.hitter.firstName} ${this.props.hitter.lastName}`}</Text>
        <Image source={{uri: 'http://mlb.mlb.com/mlb/images/players/head_shot/547180.jpg'}}
          style={{width: 100, height: 200}} />
      </ViewContainer>
    )
  }

}



const styles = StyleSheet.create({

  hitterName: {
    padding: 10,
    backgroundColor: "coral",
    fontSize: 30
  },

});

module.exports = HitterDetailScreen
