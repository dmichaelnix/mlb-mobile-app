'use strict'
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Navigator, Text } from 'react-native';
import HittersIndexScreen from './app/screens/HittersIndexScreen'
import HitterDetailScreen from './app/screens/HitterDetailScreen'
import StatusBarBackground from './app/components/StatusBarBackground'
import ViewContainer from './app/components/ViewContainer'

class hvrn extends Component {

  _renderScene(route, navigator) {
    var globalNavigatorProps = { navigator }

    switch (route.ident) {
      case "HittersIndex":
        return(
          <HittersIndexScreen
            {...globalNavigatorProps} />
        )
      case "HitterDetail":
        return(
          <HitterDetailScreen
            {...globalNavigatorProps}
            hitter={route.hitter} />
        )
      default:
        return(
          <ViewContainer>
            <StatusBarBackground />
            <Text>{`something is wrong ${route}`}</Text>
          </ViewContainer>
        )
    }
  }

  render() {
    return(
      <Navigator
        initialRoute={{ident: "HittersIndex"}}
        ref="appNavigator"
        style={styles.navigatorStyles}
        renderScene={this._renderScene}
        configureScene={(route) => ({
          ...route.sceneConfig || Navigator.SceneConfigs.FloatFromRight })} />

    )
  }

}

const styles = StyleSheet.create({

  navigatorStyles: {

  }

});

AppRegistry.registerComponent('hvrn', () => hvrn);
