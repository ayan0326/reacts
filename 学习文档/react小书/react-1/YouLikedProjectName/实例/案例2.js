// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// 标签导航栏---就是点击底部标签切换不同页面
import React from 'react';
import {Text, View, Button, Image, StyleSheet, StatusBar} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
// 实现标签导航
import {createBottomTabNavigator} from 'react-navigation-tabs';
// 安全区域
import SafeAreaView from 'react-native-safe-area-view';

class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.paragraph}>This is top text.</Text>
        <Text>Home!</Text>
        <Button
          // 标签之间跳转，onPress显示的跳转路径
          title="❤️"
          onPress={() => this.props.navigation.navigate('发现')}
        />
      </SafeAreaView>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <Image
          source={require('./image/img.jpg')}
          style={{resizeMode: 'contain', flex: 1}}
        />
        <SafeAreaView style={styles.attribution}>
          <Text style={{ color: '#fff' }}>
            Photo by Mitchell Henderson on Unsplash
          </Text>
        </SafeAreaView>
      </View>
    );
  }
}

class MinesScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>my!</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  微信: HomeScreen,
  通讯录: SettingsScreen,
  发现: DetailsScreen,
  我: MinesScreen,
});

const styles = StyleSheet.create({
  attribution: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

// const HomeStack = createStackNavigator({
//   微信: HomeScreen,
//   发现: DetailsScreen,
// });

// const SettingStack = createStackNavigator({
//   通讯录: SettingsScreen,
//   发现: DetailsScreen,
// })

// export default createAppContainer(
//   createBottomTabNavigator({
//     Home: HomeStack,
//     Settings: SettingStack,
//   }),
// );
export default createAppContainer(TabNavigator);

// 屏幕显示区域
// import React from 'react';
// import Project from './class-ios/Project';

// const App: () => React$Node = () => {
//   return (
//     <Project />
//   )
// }
// export default App;
