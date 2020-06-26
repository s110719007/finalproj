import React, { useState, useEffect } from "react";
import CountDown from 'react-native-countdown-component';
import { StyleSheet,ScrollView, Linking,View,Image } from 'react-native';
import { Button, Card, Text, PricingCard, Tile } from 'react-native-elements';
import { VictoryPie,VictoryChart,VictoryTheme,VictoryAxis,VictoryBar } from "victory-native";
import workoutData from "../json/workout.json";
import Panel from "./Panel";
import { clockRunning, startClock } from "react-native-reanimated";
const LINEWIDTH=280;

const workoutScreen = ({ route }) => {
    const[num,setnum]=useState(5)
    const[run,setrun]=useState(0)
    const[run2,setrun2]=useState(0)
    const[run3,setrun3]=useState(0)
    const[run4,setrun4]=useState(0)
    const[run5,setrun5]=useState(0)
    const[line,setline]=useState(200)
    
  return (
    <View style={style.allback}>
     
    <ScrollView >
    
    

    <View style={style.back}>
        <Text style={style.today}>今天</Text>
        <Text style={style.num}>{num}</Text>
        <Text style={style.average}>剩餘</Text>
        <View style={style.line2}></View>
        <View style={style.line1}></View>
    </View>


     <View style={style.picback}>
       <Text style={style.word}>MINI DIPS</Text>
       
       <Image
                    style={style.pic1}
                    source={{uri:workoutData.bookList[0].image,
                    }}
                    
                    />
     <CountDown
  
     running={run}
        until={5}
        onFinish={() => setnum(num-1)}
       
        onPress={() => setrun(1)}
        size={20}
        timeToShow={['M', 'S']}
      />

     
    </View>
    
    <View style={style.picback}>
       <Text style={style.word}>SPLIT SQUAT</Text>
       
       <Image
                    style={style.pic1}
                    source={{uri:workoutData.bookList[1].image,
                    }}
                    
                    />
     <CountDown
     running={run2}
        until={5}
        onFinish={() => setnum(num-1)}
        onPress={() => setrun2(1)}
        size={20}
        timeToShow={['M', 'S']}
      />

     
    </View>
    <View style={style.picback}>
       <Text style={style.word}>TRIEXTENSIONS</Text>
       
       <Image
                    style={style.pic1}
                    source={{uri:workoutData.bookList[2].image,
                    }}
                    
                    />
     <CountDown
     running={run3}
        until={5}
        onFinish={() => setnum(num-1)}
        onPress={() => setrun3(1)}
        size={20}

        timeToShow={['M', 'S']}
      />

     
    </View>
    <View style={style.picback}>
       <Text style={style.word}>L SIT</Text>
       
       <Image
                    style={style.pic1}
                    source={{uri:workoutData.bookList[4].image,
                    }}
                    
                    />
      <CountDown
      running={run4}
        until={ 5}
        size={20}
        onFinish={() => setnum(num-1)}
        onPress={() => setrun4(1)}
        timeToShow={['M', 'S']}
        
      />

     
    </View>
    <View style={style.picback}>
       <Text style={style.word}>KNEE RAISES</Text>
       
       <Image
                    style={style.pic1}
                    source={{uri:workoutData.bookList[5].image,
                    }}
                    
                    />
     <CountDown
     running={run5}
        until={5}
        onFinish={() => setnum(num-1)}
        onPress={() => setrun5(1)}
        size={20}
        timeToShow={['M', 'S']}
      />

     
    </View>
    <Panel
      title="健身小竅門"
      expanded="false"
      content="如果你是空著肚子進行鍛鍊，

      很有可能在鍛鍊過程中感到頭暈、噁心、嘔吐和頭疼，
      
      這時需要及時進食碳水化合物含量較高的食物以補充恢復體力，
      
      如一支大香蕉或是半個麵包圈是最好的加餐，
      
      在加餐的同時不要忘記飲用大量的水。
      
      因為時間較長和強度較大的鍛鍊會造成人體脫水。
      
      
      
      原文網址：https://kknews.cc/health/4goga2.html"
    />

   <View style={style.box1}>
      <Text style={style.contact}>Contact Us : (02)1234-5678</Text>
   </View>
  </ScrollView>
  </View>
  );
}
const style = StyleSheet.create({
  allback:{
 flex:1,
backgroundColor:'#DAD7D7'
  },
  back:{
    height:120,
    width:330,
    backgroundColor:'#FFFFFF',
    marginLeft:25,
    marginTop:25,
    borderRadius:25,
    shadowColor: "#000",
    shadowOffset:{width:5,height:5},
    shadowOpacity:0.2,
  },
  today:{
    fontSize:18,
    marginLeft:20,
    marginTop:13,
    
  },
  num:{
    fontSize:43,
    color:'#BF2828',
    textAlign:"center",
    fontWeight:'600'
  
  },
  average:{
    marginLeft:270,
    color:'#939393',

  },
  line1:{
  width:LINEWIDTH,
  height:3,
  backgroundColor:'#AD3A3A',
  marginLeft:20,
  marginTop:-3
  },
  line2:{
  width:100,
  height:3,
  backgroundColor:'#C5C4C4',
  marginLeft:200,
  marginTop:5
  },

 picback:{
   height:340,
   width:330,
   backgroundColor:'#FFFFFF',
   marginLeft:25,
   marginTop:25,
   borderRadius:30,
   shadowColor: "#000",
    shadowOffset:{width:5,height:5},
    shadowOpacity:0.2,
 },

 pic1:{
     marginTop:20,
     marginLeft:65,
    height:200,
    width:200
 },
 word:{
    color:'#000',
    fontSize:20,

    marginTop:15,
    textAlign:"center"
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
 pic:{
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

export default workoutScreen;
