import * as React from 'react';
import {Picker} from 'react-native';
import {Button, View, Text, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            lineHeight: 40,
            marginTop: 20,
            marginBottom: 20,
          }}>
          <Text style={{fontSize: 18, marginRight: 16}}>总可用余额</Text>
          <Text style={{fontSize: 22}}>343.80 USDT</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            lineHeight: 40,
            marginTop: 20,
            marginBottom: 30,
          }}>
          <Text style={{fontSize: 18, marginRight: 16}}>昨日收益</Text>
          <Text>3.80 USDT≈200.05 CNY</Text>
        </View>
        <View
          style={{
            width: '100%',
            paddingLeft: 20,
            paddingRight: 20,
            marginTop: 20,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 30}}>FIL</Text>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <View>
              <Text>可用 126.35</Text>
              <Text>抵押余额 126.35</Text>
            </View>
            <Button
              title=">"
              onPress={() => this.props.navigation.navigate('Details')}
            />
          </View>
        </View>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switch1Value: true,
      language: '',
    };
  }

  toggleSwitch = value => {
    this.setState({switch1Value: value});
  };

  render() {
    const a = [{value: 1}, {value: 2}, {value: 3}];
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Picker
          mode={'dropdown'}
          selectedValue={this.state.language}
          onValueChange={value => this.setState({language: value})}>
          <Picker.Item
            style={{backgroundColor: '#ccc'}}
            label="FIL"
            value="chinese"
          />
          <Picker.Item label="英文" value="english" />
        </Picker>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
