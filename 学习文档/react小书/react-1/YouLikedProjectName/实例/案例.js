// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// // import React from 'react';
// // import type {Node} from 'react';
// // import {
// //   SafeAreaView,
// //   ScrollView,
// //   StatusBar,
// //   StyleSheet,
// //   Text,
// //   useColorScheme,
// //   View,
// // } from 'react-native';

// 小模块按钮
// import React, { useState } from "react";
// import { View, TouchableOpacity, Text, StyleSheet, Button } from "react-native";

// const AlignSelfLayout = () => {
//   const [alignSelf, setAlignSelf] = useState("stretch");

//   return (
//     <PreviewLayout
//       label="alignSelf"
//       selectedValue={alignSelf}
//       values={["stretch", "flex-start", "flex-end", "center", "baseline"]}
//       setSelectedValue={setAlignSelf}
//     >
//       <View
//         style={[
//           styles.box,
//           {
//             alignSelf,
//             width: "auto",
//             minWidth: 50,
//             backgroundColor: "powderblue",
//           },
//         ]}
//       />
//       <View style={[styles.box, { backgroundColor: "skyblue" }]} />
//       <View style={[styles.box, { backgroundColor: "steelblue" }]} />
//     </PreviewLayout>
//   );
// };

// const PreviewLayout = ({
//   label,
//   children,
//   values,
//   selectedValue,
//   setSelectedValue,
// }) => (
//   <View style={{ padding: 10, flex: 1, marginTop: "10%" }}>
//     <Text style={styles.label}>{label}</Text>
//     <View style={styles.row}>
//       {values.map((value) => (
//         <TouchableOpacity
//           key={value}
//           onPress={() => setSelectedValue(value)}
//           style={[styles.button, selectedValue === value && styles.selected]}
//         >
//           <Text
//             style={[
//               styles.buttonLabel,
//               selectedValue === value && styles.selectedLabel,
//             ]}
//           >
//             {value}
//           </Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//     <Button
//       onPress={() => {
//         alert("你点击了按钮！");
//       }}
//       title="点我！"
//     />

//     <View style={styles.container}>{children}</View>
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 8,
//     backgroundColor: "aliceblue",
//     minHeight: 200,
//   },
//   box: {
//     width: 50,
//     height: 50,
//   },
//   row: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//   },
//   button: {
//     paddingHorizontal: 8,
//     paddingVertical: 6,
//     borderRadius: 4,
//     backgroundColor: "oldlace",
//     alignSelf: "flex-start",
//     marginHorizontal: "1%",
//     marginBottom: 6,
//     minWidth: "48%",
//     textAlign: "center",
//   },
//   selected: {
//     backgroundColor: "coral",
//     borderWidth: 0,
//   },
//   buttonLabel: {
//     fontSize: 12,
//     fontWeight: "500",
//     color: "coral",
//   },
//   selectedLabel: {
//     color: "white",
//   },
//   label: {
//     textAlign: "center",
//     marginBottom: 10,
//     fontSize: 24,
//   },
// });

// export default AlignSelfLayout;

// 案例
// 路由，多页面导航，，上下页面返回
// import * as React from 'react';
// import {View, Text, Button} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import {createAppContainer} from 'react-navigation';

// function HomeScreen({navigation, route}) {
//   // 传递参数
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text style={{height: 80, fontSize: 20, fontWeight: '500'}}>if you need 蓝胖子</Text>
//       <Text style={{height: 50}}>i think everyone wants to have blue flat</Text>
//       <Button
//         title="详情ye"
//         onPress={() =>
//           // 把参数作为对象的第二个参数放置在对象中，将参数传递给路线navigation.navigate
//           navigation.navigate('Details', {itemId: 86, otherParam: '传递数据'})
//         }
//       />
//       <Button
//         title="更新标题"
//         // 更新标题
//         onPress={() => navigation.setOptions({title: 'NEWS'})}
//       />
//     </View>
//   );
// }

// function DetailsScreen({route, navigation}) {
//   const {itemId, otherParam} = route.params;
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>蓝胖子集结地❤️</Text>
//       <Text>itemId: {JSON.stringify(itemId)}</Text>
//       <Text>otherParam: {JSON.stringify(otherParam)}</Text>
//       <Button
//         title="再一次详情页"
//         onPress={() =>
//           navigation.push('Details', {
//             itemId: Math.floor(Math.random() * 100),
//           })
//         }
//       />
//       <Button title="go to home" onPress={() => navigation.navigate('Home')} />
//       {/* 到指定页面 */}
//       <Button title="go back" onPress={() => navigation.goBack()} />
//       {/* 返回上一层页面 */}
//       <Button title="回到首页" onPress={() => navigation.popToTop()} />
//       {/* 回到首页 */}
//     </View>
//   );
// }

// const Stack = createStackNavigator(); // createStackNavigator()是一个函数包含screen和 navigator,,用于配置路由

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         {/* 标题重新命名+样式 */}
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{
//             title: '蓝胖子e屋',
//             headerStyle: {
//               backgroundColor: 'skyblue',
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//               fontWeight: '400',
//             },
//           }}
//           // options={{title: 'Overview'}},,指定呈现的标题
//         />
//         {/* 添加第二个屏幕，并将主屏幕配置为首先渲染 */}
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;


// 标题和参数案例
// import React from 'react';
// import {Button, View, Text, Image} from 'react-native';
// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';

// class HomeScreen extends React.Component {
//   // static navigationOptions = ({navigation}) => {
//   //   return {
//   //     // 给标题传递参数---新标题
//   //     title: navigation.getParam('otherParams', '新标题'),
//   //   };
//   // }

//   // static navigationOptions = {
//   // 渲染图片来作为标题或者按钮
//   //   headerTitle: () => <LogoTitle />,
//   // };
//   static navigationOptions = {
//     headerTitle: () => <LogoTitle />,
//     headerRight: () => (
//       <Button onPress={() => alert('welcome')} title="+" color="gray" />
//     ),
//   };

//   render() {
//     return (
//       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//         <Text>首页内容</Text>
//         <Button
//           title="Go to Details"
//           onPress={() => {
//             this.props.navigation.navigate('Details', {
//               itemId: 86,
//               otherParam: '任何你想传递的',
//             });
//           }}
//           // onPress={() =>
//           // 点击时改变标题
//           //  this.props.navigation.setParams({otherParams: 'hello'})
//           // }
//         />
//       </View>
//     );
//   }
// }

// class DetailsScreen extends React.Component {
//   // 为了再标题中传递参数，需要创建navigationOptions一个返回配置对象的函数
//   // static navigationOptions = {
//   //   title: '121212',
//   //   headerStyle: {
//   //     backgroundColor: '#f4511e',
//   //   },
//   //   headerTintColor: '#fff',
//   //   headerTitleStyle: {
//   //     fontWeight: 'bold',
//   //   },
//   // };

//   render() {
//     const {navigation} = this.props;
//     return (
//       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//         <Text>详情 Screen</Text>
//         <Text>
//           itemId: {JSON.stringify(navigation.getParam('itemId', 'NO-ID'))}
//         </Text>
//         <Text>
//           otherParam:{' '}
//           {JSON.stringify(navigation.getParam('otherParam', 'default value'))}
//         </Text>
//         <Button
//           title="再入详情... again"
//           onPress={() =>
//             navigation.push('Details', {
//               itemId: Math.floor(Math.random() * 100),
//             })
//           }
//         />
//         <Button
//           title="Update the title"
//           onPress={() =>
//             this.props.navigation.setParams({otherParam: 'Updated!'})
//           }
//         />
//         <Button
//           title="Go to Home"
//           onPress={() => this.props.navigation.navigate('Home')}
//         />
//         <Button
//           title="Go back"
//           onPress={() => this.props.navigation.goBack()}
//         />
//       </View>
//     );
//   }
// }

// class LogoTitle extends React.Component {
//   render() {
//     return (
//       <Image
//         source={require('./image/lanlan.jpeg')}
//         style={{width: 20, height: 18}}
//       />
//     )
//   }
// }

// const RootStack = createStackNavigator({
//     Home: HomeScreen,
//     Details: DetailsScreen,
//   },
//   {
//     initialRouteName: 'Home',
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: 'skyblue',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     },
//   },
// );

// // 两种导出方式
// // export default createAppContainer(RootStack);

// const AppContainer = createAppContainer(RootStack);

// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }


// import React from 'react';
// import {Button, View, Text, Image} from 'react-native';
// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';

// class HomeScreen extends React.Component {
//   static navigationOptions = {
//     headerTitle: () => <LogoTitle />,
//     headerRight: () => (
//       <Button onPress={() => alert('welcome')} title="+" color="gray" />
//     ),
//   };

//   componentDidMount() {
//     this.props.navigation.setParams({increaseCount: this._increaseCount});
//   }

//   state = {
//     count: 0,
//   };

//   _increaseCount = () => {
//     this.setState({count: this.state.count + 1});
//   };

//   render() {
//     return (
//       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//         <Text>首页内容</Text>
//         <Text>累计：{this.state.count}</Text>
//         <Button
//           title="Go to Details"
//           onPress={() => {
//             this.props.navigation.navigate('Details', {
//               itemId: 86,
//               otherParam: '任何你想传递的',
//             });
//           }}
//         />
//       </View>
//     );
//   }
// }

// class DetailsScreen extends React.Component {
//   render() {
//     const {navigation} = this.props;
//     return (
//       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//         <Text>详情 Screen</Text>
//         <Text>
//           itemId: {JSON.stringify(navigation.getParam('itemId', 'NO-ID'))}
//         </Text>
//         <Text>
//           otherParam:{' '}
//           {JSON.stringify(navigation.getParam('otherParam', 'default value'))}
//         </Text>
//         <Button
//           title="再入详情... again"
//           onPress={() =>
//             navigation.push('Details', {
//               itemId: Math.floor(Math.random() * 100),
//             })
//           }
//         />
//         <Button
//           title="Update the title"
//           onPress={() =>
//             this.props.navigation.setParams({otherParam: 'Updated!'})
//           }
//         />
//         <Button
//           title="Go to Home"
//           onPress={() => this.props.navigation.navigate('Home')}
//         />
//         <Button
//           title="Go back"
//           onPress={() => this.props.navigation.goBack()}
//         />
//       </View>
//     );
//   }
// }

// class LogoTitle extends React.Component {
//   render() {
//     return (
//       <Image
//         source={require('./image/lanlan.jpeg')}
//         style={{width: 20, height: 18}}
//       />
//     )
//   }
// }

// const RootStack = createStackNavigator({
//     Home: HomeScreen,
//     Details: DetailsScreen,
//   },
//   {
//     initialRouteName: 'Home',
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: 'skyblue',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     },
//   },
// );

// // 两种导出方式
// // export default createAppContainer(RootStack);

// const AppContainer = createAppContainer(RootStack);

// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }

// 全屏模式
// import React from 'react';
// import {Button, Platform, Image, View, Text} from 'react-native';
// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';

// class LogoTitle extends React.Component {
//   render() {
//     <Image
//       source={require('./image/lanlan.jpeg')}
//       style={{width: 30, height: 30}}
//     />;
//   }
// }

// class HomeScreen extends React.Component {
//   static navigatonOptions = ({navigation}) => {
//     const params = navigation.state.params || {};

//     return {
//       headerTitle: () => <LogoTitle />,
//       headerLeft: () => (
//         <Button
//           onPress={() => navigation.navigate('我的新模块')}
//           title="info"
//           color={Platform.OS === 'ios' ? '#fff' : null}
//         />
//       ),
//       headerRight: () => (
//         <Button
//           onPress={params.increaseCount}
//           title="+1"
//           color={Platform.OS === 'ios' ? "#fff" : null}
//         />
//       ),
//     };
//   };

//   componentWillMount() {
//     this.props.navigation.setParams({increaseCount: this._increaseCount});
//   }

//   state = {
//     count: 0,
//   };

//   _increaseCount = () => {
//     this.setState({count: this.state.count + 1});
//   };

//   render() {
//     return (
//       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//         <Text>主页内容</Text>
//         <Text>Count: {this.state.count}</Text>
//         <Button title="到详情页" />
//       </View>
//     );
//   }
// }
// export default HomeScreen;


// 全屏模式
// import React from 'react';
// import {Button, Platform, Image, View, Text} from 'react-native';
// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';

// class LogoTitle extends React.Component {
//   render() {
//     return (
//       <Image
//         source={require('./image/lanlan.jpeg')}
//         style={{width: 30, height: 30}}
//       />
//     );
//   }
// }

// class HomeScreen extends React.Component {
//   static navigationOptions = ({navigation}) => {
//     const params = navigation.state.params || {};

//     return {
//       headerTitle: () => <LogoTitle />,
//       headerLeft: () => (
//         <Button
//           onPress={() => navigation.navigate('全屏show')}
//           title="info"
//           color={Platform.OS === 'ios' ? '#fff' : 'orange'}
//         />
//       ),
//       headerRight: () => (
//         <Button
//           onPress={params.increaseCount}
//           title="+1"
//           color={Platform.OS === 'ios' ? '#fff' : 'orange'}
//         />
//       ),
//     };
//   };

//   componentWillMount() {
//     this.props.navigation.setParams({increaseCount: this._increaseCount});
//   }

//   state = {
//     count: 0,
//   };

//   _increaseCount = () => {
//     this.setState({count: this.state.count + 1});
//   };

//   render() {
//     return (
//       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//         <Text>Home Screen</Text>
//         <Text>Count: {this.state.count}</Text>
//         <Button
//           title="Go to Details"
//           onPress={() => {
//             /* 1. Navigate to the Details route with params */
//             this.props.navigation.navigate('Details', {
//               itemId: 86,
//               otherParam: 'First Details',
//             });
//           }}
//         />
//       </View>
//     );
//   }
// }

// class DetailsScreen extends React.Component {
//   static navigationOptions = ({ navigation, navigationOptions }) => {
//     const { params } = navigation.state;

//     return {
//       title: params ? params.otherParam : 'A Nested Details Screen',
//       /* These values are used instead of the shared configuration! */
//       headerStyle: {
//         backgroundColor: navigationOptions.headerTintColor,
//       },
//       headerTintColor: navigationOptions.headerStyle.backgroundColor,
//     };
//   };

//   render() {
//     /* 2. Read the params from the navigation state */
//     const { params } = this.props.navigation.state;
//     const itemId = params ? params.itemId : null;
//     const otherParam = params ? params.otherParam : null;

//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//         <Text>itemId: {JSON.stringify(itemId)}</Text>
//         <Text>otherParam: {JSON.stringify(otherParam)}</Text>
//         <Button
//           title="Update the title"
//           onPress={() =>
//             this.props.navigation.setParams({ otherParam: 'Updated!' })}
//         />
//         <Button
//           title="Go to Details... again"
//           onPress={() => this.props.navigation.navigate('Details')}
//         />
//         <Button
//           title="Go back"
//           onPress={() => this.props.navigation.goBack()}
//         />
//       </View>
//     );
//   }
// }

// class ModalScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text style={{ fontSize: 30 }}>This is a modal!</Text>
//         <Button
//           onPress={() => this.props.navigation.goBack()}
//           title="Dismiss"
//         />
//       </View>
//     );
//   }
// }

// const MainStack = createStackNavigator(
//   {
//     Home: {
//       screen: HomeScreen,
//     },
//     Details: {
//       screen: DetailsScreen,
//     },
//   },
//   {
//     initialRouteName: 'Home',
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: '#f4511e',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     },
//   }
// );

// const RootStack = createStackNavigator(
//   {
//     Main: {
//       screen: MainStack,
//     },
//     MyModal: {
//       screen: ModalScreen,
//     },
//   },
//   {
//     mode: 'modal',
//     headerMode: 'none',
//   }
// );

// const AppContainer = createAppContainer(RootStack);

// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }





// 标签导航栏---就是点击底部标签切换不同页面
import React from 'react';
import {Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home!</Text>
      </View>
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
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Details!</Text>
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

export default createAppContainer(TabNavigator);
