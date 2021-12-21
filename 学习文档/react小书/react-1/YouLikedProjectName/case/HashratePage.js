// import React, {Component} from 'react';
// import {Dimensions, View, Text} from 'react-native';
// import Echarts from 'native-echarts';

// let {width, height} = Dimensions.get('window');

// export default class HashratePage extends Component {
//   render() {
//     const lineOption = {
//       tooltip: {},
//       legend: {
//         backgroundColor: '#0C294B',
//         borderColor: '#081C3F',
//         borderWidth: 1,
//         paddingTop: 5,
//         itemWidth: 30,
//         itemHeight: 15,
//         itemGap: 15,
//         textStyle: {
//           color: '#A9A9A9',
//         },
//         data: [
//           {
//             name: '电话',
//           },
//           {
//             name: '询价',
//           },
//         ],
//       },
//       xAxis: {
//         data: ['日', '一', '二', '三', '四', '五', '六'],
//         axisLine: {
//           show: true,
//           lineStyle: {
//             color: '#A9A9A9',
//           },
//         },
//         splitLine: {
//           show: true,
//           lineStyle: {
//             color: '#A9A9A9',
//           },
//         },
//       },
//       yAxis: {
//         axisLine: {
//           show: true,
//           lineStyle: {
//             color: '#A9A9A9',
//           },
//         },
//         splitLine: {
//           show: true,
//           lineStyle: {
//             color: '#A9A9A9',
//           },
//         },
//       },
//       series: [
//         {
//           name: '电话',
//           type: 'line',
//           data: [5, 20, 36, 10, 10, 20, 25],
//         },
//         {
//           name: '询价',
//           type: 'line',
//           data: [15, 10, 16, 20, 30, 10, 15],
//         },
//       ],
//       color: ['#7CCD7C', '#5CACEE'],
//     };
//     const pieOption = {
//       title: {
//         x: '60',
//         text: '分享渠道',
//         bottom: 10,
//         textStyle: {
//           color: '#FFFFFF',
//         },
//       },
//       series: [
//         {
//           name: '分享渠道',
//           type: 'pie',
//           center: ['100', '40%'],
//           radius: ['45%', '65%'],
//           avoidLabelOverlap: false,
//           startAngle: 45,
//           label: {
//             normal: {
//               show: false,
//               position: 'center',
//             },
//             emphasis: {
//               show: true,
//               textStyle: {
//                 fontSize: '20',
//                 fontWeight: 'bold',
//                 color: '#FFFFFF',
//               },
//             },
//           },
//           labelLine: {
//             normal: {
//               show: false,
//             },
//           },
//           data: [
//             {value: 63, name: '百度'},
//             {value: 43, name: 'Google'},
//             {value: 31, name: '360搜索'},
//             {value: 18, name: '有道'},
//             {value: 15, name: '搜狐'},
//             {value: 9, name: 'Yahoo'},
//             {value: 7, name: '搜狗'},
//           ],
//         },
//       ],
//       legend: {
//         orient: 'vertical',
//         y: 'center',
//         right: '40',
//         align: 'right',
//         data: ['百度', 'Google', '360搜索', '有道', '搜狐', 'Yahoo', '搜狗'],
//         textStyle: {
//           color: '#FFFFFF',
//         },
//       },
//       color: [
//         '#1E90FF',
//         '#90EE90',
//         '#87CEFA',
//         '#FF8C00',
//         '#FFA500',
//         '#FF4500',
//         '#800080',
//       ],
//     };

//     return (
//       <View style={{flex: 1, backgroundColor: '#183A63'}}>
//         <View
//           style={{
//             width: width - 10,
//             height: 80,
//             margin: 5,
//             flexDirection: 'row',
//             borderWidth: 1,
//             borderColor: '#081C3F',
//           }}>
//           <View
//             style={{
//               flex: 1,
//               padding: 10,
//               borderRightWidth: 1,
//               borderRightColor: '#081C3F',
//               backgroundColor: '#0C294B',
//               flexDirection: 'column',
//             }}>
//             <Text style={{color: '#A9A9A9'}}>电话:</Text>
//             <Text style={{color: '#7CCD7C', fontSize: 30, fontWeight: 'bold'}}>
//               160
//             </Text>
//           </View>
//           <View
//             style={{
//               flex: 1,
//               padding: 10,
//               borderRightWidth: 1,
//               borderRightColor: '#081C3F',
//               backgroundColor: '#0C294B',
//             }}>
//             <Text style={{color: '#A9A9A9'}}>邮件:</Text>
//             <Text style={{color: '#FFFFFF', fontSize: 30, fontWeight: 'bold'}}>
//               89
//             </Text>
//           </View>
//           <View
//             style={{
//               flex: 1,
//               padding: 10,
//               borderRightWidth: 1,
//               borderRightColor: '#081C3F',
//               backgroundColor: '#0C294B',
//             }}>
//             <Text style={{color: '#A9A9A9'}}>留言:</Text>
//             <Text style={{color: '#FFFFFF', fontSize: 30, fontWeight: 'bold'}}>
//               694
//             </Text>
//           </View>
//           <View style={{flex: 1, padding: 10, backgroundColor: '#0C294B'}}>
//             <Text style={{color: '#A9A9A9'}}>询价:</Text>
//             <Text style={{color: '#5CACEE', fontSize: 30, fontWeight: 'bold'}}>
//               350
//             </Text>
//           </View>
//         </View>
//         <Echarts option={lineOption} height={240} width={width} />
//         <View
//           style={{
//             height: 1,
//             backgroundColor: '#969696',
//             width: width - 10,
//             marginLeft: 5,
//           }}
//         />
//         <Echarts option={pieOption} height={200} width={width} />
//       </View>
//     );
//   }
// }

import * as echarts from 'echarts';

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
  title: {
    text: 'ECharts 入门示例',
  },
  tooltip: {},
  legend: {
    data: ['销量'],
  },
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
  },
  yAxis: {},
  series: [
    {
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20],
    },
  ],
};

option && myChart.setOption(option);
