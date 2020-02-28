import React, {Component} from 'react';
import {Text} from 'react-native';
import Container from './../components/Container';

class Screen extends Component {
  handlePress = () => {
    console.log('press2');
  };

  render() {
    return <Container backgroundcolor="#F44336" onPress={this.handlePress} />;
  }
}

export default Screen;
