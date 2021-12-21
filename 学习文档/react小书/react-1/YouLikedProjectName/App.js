// 标签导航栏---就是点击底部标签切换不同页面
import React from 'react';
import {
  Text,
  View,
  Button,
  Image,
  StyleSheet,
  StatusBar,
  Switch,
  Picker,
  Dimensions,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
//下拉选择框
import {Dropdown} from 'react-native-material-dropdown';
import {createDrawerNavigator} from 'react-navigation-drawer';
// 实现标签导航
import {createBottomTabNavigator} from 'react-navigation-tabs';
// 安全区域
import SafeAreaView from 'react-native-safe-area-view';
import {TextInput} from 'react-native-gesture-handler';
import {ScrollView} from 'react-native';
// 放到根目录下模拟数据
import dataList from './index.json';
console.log(dataList.data.categories);
import NewPage from './case/NewPage';
import poolPage from './case/poolPage';
import FirstPage from './case/FirstPage';

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>ghjknm</Text>
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
          <Text style={{color: '#fff'}}>
            Photo by Mitchell Henderson on Unsplash
          </Text>
        </SafeAreaView>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  // 放置顺序即为显示顺序
  首页: FirstPage,
  我的: NewPage,
  矿池: poolPage,
  钱包: DetailsScreen,
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
  balance: {
    width: '100%',
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: '8%',
  },
  btnbox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
  },
  rightbox: {
    display: 'flex',
    flexDirection: 'row',
  },
  btn: {
    width: 20,
    fontSize: 18,
  },
});
export default createAppContainer(TabNavigator);
