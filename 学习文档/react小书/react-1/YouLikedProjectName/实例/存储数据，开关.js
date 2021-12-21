// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */
import React, { Component } from "react";
import {
  Text,
  View,
  Button,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Alert,
  AsyncStorage,
  Switch,
  Picker,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
// 实现标签导航
import {createBottomTabNavigator} from 'react-navigation-tabs';
// 安全区域
import SafeAreaView from 'react-native-safe-area-view';
import {TouchableHighlight} from 'react-native';

// 存储数据,异步存储数据
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: 'ayan',
//       inputText: 'happy every day',
//     };
//   }

//   async readName() {
//     try {
//       const value = await AsyncStorage.getItem('name');
//       if (value !== null) {
//         this.setState({name: value});
//       }
//       Alert.alert('成功');
//     } catch (e) {
//       Alert.alert('失败');
//     }
//   }

//   setName = () => {
//     AsyncStorage.setItem('name', this.setState.inputText);
//     Alert.alert('保存成功');
//   };

//   render() {
//     return (
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <TextInput
//           style={{}}
//           autoCapitalize="none"
//           value={this.state.inputText}
//         />
//         <View style={{display: 'flex', flexDirection: 'row'}}>
//           <TouchableHighlight onPress={this.setName}>
//             <Text style={styles.save}>保存</Text>
//           </TouchableHighlight>
//           <TouchableHighlight onPress={this.readName.bind(this)}>
//             <Text style={styles.read}>读取</Text>
//           </TouchableHighlight>
//         </View>
//         <View>
//           <Text style={styles.value}>当前值：{this.state.name}</Text>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   save: {
//     fontSize: 20,
//     margin: 15,
//   },
//   read: {
//     fontSize: 20,
//     margin: 15,
//   },
//   value: {
//     fontSize: 20,
//     margin: 15,
//   },
// });
// export default App;

// 开关组件

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.label = {false: '关', true: '开'};
//     this.state = {
//       switch1Value: true,
//     };
//   }

//   toggleSwitch = value => {
//     this.setState({switch1Value: value});
//   };

//   render() {
//     return (
//       <View style={styles.box}>
//         <Switch
//           onValueChange={this.toggleSwitch}
//           value={this.state.switch1Value}
//         />
//         <Text>当前状态是{this.label[this.state.switch1Value]}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   box: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
// export default App;

// 组建状态栏,,显示不限时，白天或者晚上色系模式
// class App extends Component {
//   users = [
//     {label: '性别', value: ''},
//     {label: '男', value: 'male'},
//     {label: '女', value: 'female'},
//     {label: '其他', value: 'other'},
//   ];

//   constructor(props) {
//     super(props);
//     this.state = {
//       hidden: false,
//       barStyle: 'default',
//       user: '',
//     };
//   }

//   updateUser = user => {
//     this.setState({user: user});
//   };

//   changeHidden = () => {
//     var hidden = this.state.hidden ? false : true;
//     this.setState({hidden: hidden});
//   };

//   changeBarStyle = () => {
//     var barStyle =
//       this.state.barStyle == 'light-content' ? 'dark-content' : 'light-content';
//     this.setState({barStyle: barStyle});
//   };

//   render() {
//     return (
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <StatusBar hidden={this.state.hidden} barStyle={this.state.barStyle} />
//         {/* <TouchableOpacity onPress={this.changeHidden}>
//           <Text>显示还是隐藏</Text>
//         </TouchableOpacity> */}
//         <TouchableOpacity onPress={this.changeBarStyle}>
//           <Text>主题色改变</Text>
//         </TouchableOpacity>
//         {/* 选择器 */}
//         <Picker selectedValue={this.state.user} onValueChange={this.updateUser}>
//           {
//             this.users.map((o,index) =>
//               <Picker.Item label={o.label} value={o.value}/>
//             )
//           }
//         </Picker>
//         <Text>您选择的是{this.state.users}</Text>
//       </View>
//     );
//   }
// }
// export default App;


