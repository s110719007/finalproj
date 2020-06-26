import React, { useState, useEffect } from "react";
import { Video } from 'expo-av';
import { StyleSheet,ScrollView, Linking,View,Image } from 'react-native';
import { Button, Card, Text, PricingCard, Tile } from 'react-native-elements';
import { VictoryPie,VictoryChart,VictoryPolarAxis,VictoryBar } from "victory-native";
import Panel from "./Panel";
const sampleData = [
  { x: "週六", y: 10 },
  { x: "週日", y: 90 },
  { x: "週一", y: 130 },
  { x: "週二", y: 40 },
  { x: "週三", y: 80 },
  { x: "週四", y: 55 },
  { x: "週五", y: 25 },
  
];
const defaultData = [
  { x: "週六", y: 0 },
  { x: "週日", y: 0 },
  { x: "週一", y: 0 },
  { x: "週二", y: 0 },
  { x: "週三", y: 0 },
  { x: "週四", y: 0 },
  { x: "週五", y: 0 },
];



const heartScreen = ({ route }) => {
  const [graphicData, setGraphicData] = useState(defaultData);
  useEffect(() => {
    setGraphicData(sampleData);
  }, []);
 

  return (
    <View style={style.allback}>
     
    <ScrollView >
    
    <Video
  source={{ uri: 'https://github.com/lg30assqwedrf/11111111111111111/blob/master/Better%20sleep-%20a%202-minute%20guide.mp4?raw=true' }}
  rate={1.0}
  volume={1.0}
  isMuted={false}
  resizeMode="cover"
  shouldPlay
  isLooping
  style={{ width: 340, height: 300 ,borderRadius:30,marginLeft:18                                                          ,marginTop:20}}
/>

    <View style={style.back}>
        <Text style={style.today}>睡眠分析</Text>
        <Text style={style.num}>7小時27分</Text>
        <Text style={style.average}>20/7/2 上午10:34</Text>
        <View style={style.line1}></View>
        <View style={style.line2}></View>
    </View>


     <View style={style.picback}>
       <Text style={style.word}>過去一週</Text>
       <View style={style.pic}>
       <VictoryChart polar
       width={340}
       height={280}
  >
      
    <VictoryPolarAxis/>
    <VictoryBar
      data={sampleData}
      style={{ data: { fill: "#c43a31", stroke: "black", strokeWidth: 2 }}}
   
    />
  </VictoryChart>
     
     </View>
     
    </View>
    
  
    <Panel
      title="就寢時間"
      expanded="false"
      content="如何設定就寢時間
    第一次設定就寢時間時，「時鐘」app 會先詢問幾個問題：
      
      開啟「時鐘」app，然後點一下「就寢時間」標籤頁。
      點一下「開始設定」，然後選擇您的設定。
      點一下「完成」。
      設定就寢時間後，iPhone 會提醒您該上床睡覺，並響起鬧鐘喚醒您起床。"
    />
 

    <View style={style.down}>
    <Text style={style.today}>顯示每天記錄</Text>
    <Image
                        style={style.pic1}
                        source={{uri:'https://github.com/lg30assqwedrf/image-test/blob/master/right.png?raw=true'}}/>
   </View>
   <View style={style.box1}>
      <Text style={style.contact}>Contact Us : (02)1234-5678</Text>
   </View>
  </ScrollView>
  </View>
  );
}
const style = StyleSheet.create({
  allback:{
 
backgroundColor:'#DAD7D7'
  },
  back:{
    height:120,
    width:330,
    backgroundColor:'#FFFFFF',
    marginLeft:25,
    marginTop:25,
    borderRadius:25,
  },
  today:{
    fontSize:18,
    marginLeft:20,
    marginTop:13,
    
  },
  num:{
    fontSize:43,
    color:'#BF2828',
    marginLeft:100,
    fontWeight:'600'
  
  },
  average:{
    marginLeft:200,
    color:'#939393',

  },
  line1:{
  width:200,
  height:3,
  backgroundColor:'#AD3A3A',
  marginLeft:20,
  marginTop:5
  },
  line2:{
    width:100,
  height:3,
  backgroundColor:'#C5C4C4',
  marginLeft:200,
  marginTop:-3
  },

 picback:{
   height:340,
   width:330,
   backgroundColor:'#FFFFFF',
   marginLeft:25,
   marginTop:25,
   borderRadius:30,
 },
 pic:{
  height:289,
  width:300,
  marginLeft:-7,
  marginTop:5
 },
 word:{
    color:'#000',
    fontSize:19,
    marginLeft:20,
    marginTop:23,
 },
 box:{
marginTop:25,
marginLeft:25,
height:100,
width:330,
backgroundColor:'#FFFFFF',
borderRadius:22,

 },
 word1:{
fontSize:18,
marginLeft:20,
    marginTop:13,
 },
 stair:{
  fontSize:37,
  fontWeight:'600',
  marginLeft:200,
    marginTop:0,
 },
 down:{
  marginTop:25,
marginLeft:25,
height:45,
width:330,
backgroundColor:'#FFFFFF',
borderRadius:22,
 },
 pic1:{
    height:25,
    width:25,
    marginTop:-23,
    marginLeft:290

 },
 box1:{
  height:30,
    width:600,
    marginTop:25,
    backgroundColor:'#2B475D',
 },
 contact:{
    color:'#fff',
    marginLeft:95,
    marginTop:7
 },
});

export default heartScreen;
