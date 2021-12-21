// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

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
// 卡片组件
// import Cardview from 'react-native-cardview-wayne'; // 只支持安卓
// import poolPage from './case/poolPage';
import NewPage from './case/NewPage';
import poolPage from './case/poolPage';
// 将原来的homePage用新的页面替换掉，填充页面
// class HomeScreen extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       sex: " ",
//       city: " ",
//     };
//   }

//   componentDidMount() {
//     this.setState({
//       selectValue: this.state.selectValue,
//     });
//   }

//   render() {
//     const selectValue = this.state;
//     return (
//       <SafeAreaView style={{ marginTop: "10%" }}>
//         <View style={{display: 'flex', flexDirection: 'row'}}>
//           {/* <Button
//            // 标签之间跳转，onPress显示的跳转路径
//            title="下一个页面"
//           onPress={() => this.props.navigation.navigate('发现')}
//           /> */}
//           <poolPage />
//         </View>
//       </SafeAreaView>
//     );
//   }
// }

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

// NewPage可跳转页面替换
class MinesScreen extends React.Component {
  render() {
    return (
      <View style={styles.balance}>
        <StatusBar barStyle={'light-content'}></StatusBar>
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
        <View style={styles.btnbox}>
          <Text style={{fontSize: 26}}>FIL</Text>
          <View style={styles.rightbox}>
            <View>
              <Text>可用 126.35</Text>
              <Text>抵押余额 126.35</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  // 放置顺序即为显示顺序
  我的: NewPage,
  矿池: poolPage,
  首页: SettingsScreen,
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

class SwitchPage extends React.Component {
  constructor(props) {
    super(props);
    this.label = {false: '关', true: '开'};
    this.state = {
      switch1Value: true,
    };
  }

  toggleSwitch = value => {
    this.setState({switch1Value: value});
  };

  render() {
    return (
      <View style={styles.box}>
        <Switch
          title="矿池"
          onValueChange={this.toggleSwitch}
          value={this.state.switch1Value}
        />
        <Text>当前状态是{this.label[this.state.switch1Value]}</Text>
      </View>
    );
  }
}
