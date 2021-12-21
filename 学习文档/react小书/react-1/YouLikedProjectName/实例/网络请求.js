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
} from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
// 实现标签导航
import { createBottomTabNavigator } from "react-navigation-tabs";
// 安全区域
import SafeAreaView from "react-native-safe-area-view";
import { TouchableHighlight } from "react-native";

// 网络请求 类似fetch请求
var REQUEST_URL = "./data1.json";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: null,
    };
    this.fetchDate = this.fetchDate.bind(this);
  }

  componentDidMount() {
    this.fetchDate();
  }

  fetchDate() {
    fetch(REQUEST_URL)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          movies: responseData.movies,
        });
      });
  }

  render() {
    if (!this.state.movies) {
      return this.renderLoadingView();
    }
    var movie = this.state.movies[0];
    return this.renderMovie(movie);
  }

  renderLoadingView() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>加载中，请稍后。。。</Text>
      </View>
    );
  }

  renderMovie(movie) {
    return (
      <View>
        <Image
          source={{
            uri: 'https://tse1-mm.cn.bing.net/th/id/OIP.B6pZ8N_dG3MNAYppM-zX0AHaEo?w=287&h=180&c=7&o=5&dpr=2&pid=1.7',
          }}
        />
      </View>
    );
  }
}
