// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// 标签导航栏---就是点击底部标签切换不同页面
import React, {Component} from 'react';
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
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
// 实现标签导航
import {createBottomTabNavigator} from 'react-navigation-tabs';
// 安全区域
import SafeAreaView from 'react-native-safe-area-view';

// class App1 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {name: props.name};
//   }

//   updateState = () => {
//     const name = this.state.name == 'ayan' ? 'hello welcome' : '121212121212';
//     this.setState({name: name});
//   };

//   render() {
//     const {name} = this.state;
//     return (
//       <View
//         style={{
//           flex: 1,
//           justifyContent: 'center',
//           alignItems: 'center',
//           backgroundColor: '#ccc',
//         }}>
//         <Text onPress={this.updateState}>fgdscd: {name}</Text>
//       </View>
//     );
//   }
// }

// export default class App extends React.Component {
//   render() {
//     return (
//       <View
//         style={{
//           flex: 1,
//           justifyContent: 'center',
//           alignItems: 'center',
//           backgroundColor: 'pink',
//         }}>
//         <App1 name={'ayan'} />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({

// })

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      intro: '',
      animating: true,
    };
  }

  handleEmail = text => {
    this.setState({email: text});
  };

  handlePassword = text => {
    this.setState({password: text});
  };

  handleIntro = text => {
    this.setState({intro: text});
  };

  closeActivityIndicator = () => {
    this.setState({animating: !this.state.animating});
  };

  register = (email, password, intro) => {
    alert(email + password + intro)
  };

  componentDidMount = () => this.closeActivityIndicator();

  showAlert1 = () => {
    Alert.alert('发送成功');
  };

  showAlert2 = () => {
    Alert.alert('删除成功');
  };

  showAlert0 = () => {
    Alert.alert('警告', '确认删除',
    [
      {text: '确认', onPress: () => this.showAlert2()},
      {text: '取消'},
    ],
    {cancelable: false}
   );
  };

  render() {
    const animating = this.state.animating;
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {/* 加载loading */}
        <ActivityIndicator animating={animating} color="orange" size="large" />
        <Button onPress={this.closeActivityIndicator} title="正在加载 请稍后" />
        <TextInput
          style={{width: 260, height: 50, fontSize: 20, marginBottom: 20, borderColor: 'orange', borderWidth: 1}}
          underlineColorAndroid="transparent"
          placeholder="邮箱"
          placeholderTextColor="#ccc"
          autoCapitalize="none"
          keyboardType="email-address"
          returnKeyType="next"
          onChangeText={this.handleEmail}
        />
        <TextInput
          style={{width: 260, height: 50, fontSize: 20, marginBottom: 20, borderColor: 'orange', borderWidth: 1}}
          underlineColorAndroid="transparent"
          placeholder="密码"
          placeholderTextColor="#ccc"
          autoCapitalize="none"
          keyboardType="email-address"
          returnKeyType="next"
          // 以密码的形式显示出来
          secureTextEntry={true}
          onChangeText={this.handlePassword}
        />
        <TextInput
          style={{width: 260, height: 50, fontSize: 20, marginBottom: 20, borderColor: 'orange', borderWidth: 1}}
          underlineColorAndroid="transparent"
          placeholder="描述"
          placeholderTextColor="#ccc"
          autoCapitalize="none"
          multiline={true}
          numberOfLines={4}
          textAlignVertical="top"
          returnKeyType="done"
          onChangeText={this.handleIntro}
        />
        {/* 弹出框 */}
        <View style={styles.alert}>
          <TouchableOpacity onPress={this.showAlert1}>
            <Text style={{fontSize: 16, marginRight: 20}}>发送</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.showAlert0}>
            <Text style={{fontSize: 16}}>删除</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => this.register(this.state.email, this.state.password, this.state.intro)}>
          <Text style={{width: 100, height: 30, backgroundColor: 'skyblue', lineHeight: 30, textAlign: 'center'}}>注册❤️</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  alert: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    marginLeft: 170,
  },
});
export default Input;
