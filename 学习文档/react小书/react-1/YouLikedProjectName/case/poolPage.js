// // 标签导航栏---就是点击底部标签切换不同页面
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
// import dataList from './index.json';
import dataList from './../index.json';
console.log(dataList.data.categories);
// // 卡片组件
export default class poolPage extends React.Component {
  constructor(props) {
    super(props);
    this.label = {false: '关', true: '开'};
    this.state = {
      categories: [],
      switch1Value: true,
      language: '',
    };
    this.handleGetListSucc = this.handleGetListSucc.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:8081/index.json')
      .then(res => res.json())
      .then(this.handleGetListSucc)
      .catch(() => {
        alert('对不起您的请求异常!');
      });
  }

  handleGetListSucc(res) {
    // alert(JSON.stringify(res)) // 拿到本地模拟数据
    if (res.ret && res.data) {
      this.setState({
        categories: res.data.categories,
      });
    }
  }

  toggleSwitch = value => {
    this.setState({switch1Value: value});
  };

  render() {
    // 获取屏幕宽度
    const {Width} = Dimensions.get('window');
    const a = [{value: 1}, {value: 2}, {value: 3}];

    // alert(width);
    return (
      <View style={styles.container}>
        <View style={{position: 'relative'}}>
          {/* 保护电量条颜色不被其他干扰 */}
          <StatusBar barStyle={'light-content'}></StatusBar>
          <View
            style={{
              width: '100%',
              height: 60,
              position: 'absolute',
              top: 50,
              left: 10,
              // backgroundColor: 'red',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Switch
              onValueChange={this.toggleSwitch}
              value={this.state.switch1Value}
            />
            {/* <Dropdown label="请选择" data={a} /> */}
            <Picker
              mode={'dropdown'}
              style={styles.picker}
              selectedValue={this.state.language}
              onValueChange={value => this.setState({language: value})}>
              <Picker.Item style={{backgroundColor: '#ccc'}} label="FIL" value="chinese" />
              <Picker.Item label="英文" value="english" />
            </Picker>
          </View>

          <Image
            source={require('./../image/OIP.jpeg')}
            style={{Width, opacity: 0.6}}
          />
          <TextInput placeholder="请输入搜索内容" style={styles.search} />
        </View>
        <ScrollView style={styles.content}>
          <View style={styles.allContent}>
            <Text
              style={{
                paddingBottom: 10,
                paddingTop: 10,
                paddingLeft: 20,
                fontSize: 16,
                color: 'blue',
              }}>
              全网有效算力
            </Text>
            <View style={styles.scrollText}>
              {this.state.categories.map((item, index) => {
                console.log(item.imgUrl);
                return (
                  <View style={styles.textBox} key={item.id}>
                    {/* <Image source={{uri: item.imgUrl}} style={{width: 100, height: 100}} /> */}
                    <Text>{item.name}</Text>
                    <Text>{item.price}</Text>
                  </View>
                );
              })}
            </View>
          </View>

          <View style={styles.allContent}>
            <Text
              style={{
                paddingBottom: 10,
                paddingTop: 10,
                paddingLeft: 20,
                fontSize: 16,
                color: 'blue',
              }}>
              矿池详情
            </Text>
            <View style={styles.scrollText}>
              {this.state.categories.map((item, index) => {
                console.log(item.imgUrl);
                return (
                  <View style={styles.textBox} key={item.id}>
                    {/* <Image source={{uri: item.imgUrl}} style={{width: 100, height: 100}} /> */}
                    <Text>{item.name}</Text>
                    <Text>{item.price}</Text>
                  </View>
                );
              })}
            </View>
          </View>

          <View style={styles.allContent}>
            <Text
              style={{
                paddingBottom: 10,
                paddingTop: 10,
                paddingLeft: 20,
                fontSize: 16,
                color: 'blue',
              }}>
              我的算力
            </Text>
            <View style={styles.scrollText}>
              {this.state.categories.map((item, index) => {
                console.log(item.imgUrl);
                return (
                  <View style={styles.textBox} key={item.id}>
                    {/* <Image source={{uri: item.imgUrl}} style={{width: 100, height: 100}} /> */}
                    <Text>{item.name}</Text>
                    <Text>{item.price}</Text>
                  </View>
                );
              })}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cationer: {
    flex: 1,
  },
  picker: {
    width: 90,
    backgroundColor: '#fff',
  },
  search: {
    position: 'absolute',
    left: 20,
    right: 20,
    top: '50%',
    height: 40,
    paddingLeft: 18,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  allContent: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 20,
  },
  content: {
    position: 'absolute',
    top: 210,
    marginTop: 6,
    marginBottom: 60,
    marginLeft: 20,
    marginRight: 20,
  },
  textBox: {
    width: '40%',
    paddingTop: 20,
    paddingBottom: 20,
  },
  scrollText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    height: 150,
    paddingRight: 20,
    paddingLeft: 20,
  },
});
