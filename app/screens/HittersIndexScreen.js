'use strict'
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, ListView, Navigator, Image, TouchableOpacity } from 'react-native';
import ViewContainer from '../components/ViewContainer'
import StatusBarBackground from '../components/StatusBarBackground'
import Icon from 'react-native-vector-icons/FontAwesome'

const hitters = [
  {firstName: "Mike", lastName: "Trout", teamName: "Las Angeles Angels", mlbID: 545361},
  {firstName: "Bryce", lastName: "Harper", teamName: "Washington Nationals", mlbID: 547180},
  {firstName: "Clayton", lastName: "Kershaw", teamName: "Las Angeles Dodgers", mlbID: 477132},
  {firstName: "Andrew", lastName: "McCutchen", teamName: "Pittsburgh Pirates", mlbID: 457705}
]

class HittersIndexScreen extends Component {
  constructor(props) {
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
    this.state = {
      hittersDataSource: ds.cloneWithRows(hitters)
    }
  }

  render() {
    return (
      <ViewContainer>
        <StatusBarBackground />
        <Text style={{backgroundColor: 'coral', textAlign: 'center'}}>{'Hitter Val Scouting Report'}</Text>
        <ListView
          style={{marginTop: 100}}
          dataSource={this.state.hittersDataSource}
          renderRow={(hitter) => { return this._renderHitterRow(hitter) }} />
      </ViewContainer>
    )
  }

  _renderHitterRow(hitter) {
    return (
      <TouchableOpacity style={styles.hitterRow} onPress={(event) => this._navigateToHitterDetail(hitter) }>
        <Text style={styles.hitterName}>{`${hitter.firstName} ${hitter.lastName}`}</Text>
        <View style={{flex: 1}} />
        <Icon name="chevron-right" size={20} style={styles.hitterMoreIcon} />
      </TouchableOpacity>
    )
  }

_navigateToHitterDetail(hitter) {
  this.props.navigator.push({
    ident: "HitterDetail",
    hitter: hitter
  })
}




}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  hitterRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 30
  },

  hitterName: {
    marginLeft: 25,
    height: 20
  },

  hitterMoreIcon: {
    color: 'blue',
    height: 20,
    width: 20,
    marginRight: 25
  },


});

module.exports = HittersIndexScreen
