'use strict'
import React, { Component, Navigator, Text } from 'react-native'
import PeopleIndexScreen from '../screens/HittersIndexScreen'
import PersonShowScreen from '../screens/HitterDetailScreen'

class AppNavigator extends Component {

  _renderScene(route, navigator) {
    var globalNavigatorProps = { navigator }

    switch(route.ident) {
      case "HittersIndex":
        return (
          <HittersIndexScreen
            {...globalNavigatorProps} />
        )

      case "HitterDetail":
        return (
          <HitterDetailScreen
            {...globalNavigatorProps}
            person={route.hitter} />
        )

      default:
        return (
          <Text>{`YO YOU MESSED SOMETHING UP ${route}`}</Text>
        )
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={this.props.initialRoute}
        ref="appNavigator"
        style={styles.navigatorStyles}
        renderScene={this._renderScene}
        configureScene={(route) => ({
          ...route.sceneConfig || Navigator.SceneConfigs.FloatFromRight })} />
    )
  }

}

const styles = React.StyleSheet.create({

  navigatorStyles: {

  }

})

module.exports = AppNavigator
