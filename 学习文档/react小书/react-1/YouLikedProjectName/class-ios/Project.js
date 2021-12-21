import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

class Project extends Component {
  render() {
    return (
      <View>
        <Text style={styles.box}> textInComponent </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    fontSize: 30,
    marginTop: 80,
  },
});

export default Project;
