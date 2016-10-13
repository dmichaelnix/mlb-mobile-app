class DisplayAnImage extends Component {
  render() {
    return (
      <View>
        <Image
          source={"http://mlb.mlb.com/mlb/images/players/head_shot/545361.jpg"}
        />
        <Image
          style={{width: 50, height: 50}}
          source={{uri: 'http://mlb.mlb.com/mlb/images/players/head_shot/545361.jpg'}}
        />
      </View>
    );
  }
}

// App registration and rendering
AppRegistry.registerComponent('DisplayAnImage', () => DisplayAnImage);
