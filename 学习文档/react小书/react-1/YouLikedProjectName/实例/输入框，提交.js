import React from 'react';
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: [1, 2, 3, 4, 5, 6],
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleBtnPress = this.handleBtnPress.bind(this);
  }

  componentDidMount() {
    this.getListInfo();
  }

  getListInfo() {
    fetch('./case/index.json')
      // fetch('http://172.28.31.27.8080/api/repositor/editor/alarm/get_noti_group_list')
      .then(res => res.json())
      .then(res => {
        this.setState({
          list: res.data.result,
        });
      });
  }

  handleTextChange(value) {
    // alert();
    this.setState({inputValue: value});
  }

  handleBtnPress() {
    //alert('press');
    // this.setState({
    // 上一次的state,加上这一次的state
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: '',
    // });

    this.setState(prevState => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: '',
    }));
  }

  render() {
    return (
      <View style={styles.conbox}>
        <View style={styles.commit}>
          <TextInput
            style={styles.input}
            placeholder="请输入内容"
            placeholderTextColor="#666"
            onChangeText={this.handleTextChange}
            value={this.state.inputValue}
          />
          <Button title="提交" style={styles.but} onPress={this.handleBtnPress}></Button>
        </View>
        <View>
          <Text>输入的内容：{this.state.inputValue}</Text>
        </View>

        {this.state.list.map((item, index) => {
          // console.log(item);
          return <Text key={index}>{item}</Text>;
        })}
        <Text
          style={{
            width: 200,
            height: 80,
            backgroundColor: 'pink',
            fontSize: 20,
          }}>
          123从圣诞节卡号发的
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conbox: {
    marginTop: 100,
    marginLeft: 30,
  },
  commit: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 20,
    marginBottom: 20,
  },
  input: {
    width: 270,
    fontSize: 16,
    paddingBottom: 15,
    borderWidth: 1,
    borderColor: '#666',
  },
});
export default App;
