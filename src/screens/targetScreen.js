import React ,{useState,useRef}from "react";
import { StyleSheet,ScrollView, Linking,View,Animated,Dimensions,TouchableOpacity,Image } from 'react-native';
import { Button, Card, Text, PricingCard, Tile } from 'react-native-elements';
import warmupScreen from "./warmupScreen";



const targetScreen = ({ navigation }) => {



  return (
    

    <ScrollView style={style.allback}>
    
    
    <TouchableOpacity 
            onPress={() => navigation.navigate('warmup', warmupScreen)}
          >
    <View style={style.back}>
    
    <Text style={style.word}>暖身</Text>
    <Text style={style.zero}>2</Text>
    <Text style={style.num}>/4</Text>

        
     
      <View style={style.line}/>
      <View style={style.line1}/>   
      
    </View>
    </TouchableOpacity>
    <View style={style.back}>
    <Text style={style.word}>伸展</Text>
    <Text style={style.zero}>0</Text>
    <Text style={style.num}>/6</Text>
      <View style={style.line}>
          
      </View>
      </View>
      <View style={style.back}>
      <Text style={style.word}>調節心血管</Text>
      <Text style={style.zero}>0</Text>
      <Text style={style.num}>/6</Text>
      <View style={style.line}>
          
      </View>
      </View>
      <View style={style.back}>
      <Text style={style.word}>全身肌耐力</Text>
      <Text style={style.zero}>0</Text>
      <Text style={style.num}>/4</Text>
      <View style={style.line}>
          
      </View>
      </View>
      <View style={style.back}>
      <Text style={style.word}>暖和運動</Text>
      <Text style={style.zero}>0</Text>
      <Text style={style.num}>/4</Text>
      <View style={style.line}>
          
      </View>
      </View>
        

    
    

   
  </ScrollView>
 
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
    marginTop:30,
    borderRadius:25,
  },
  line:{
      backgroundColor:'#DAD7D7',
      height:3,
      width:280,
      marginTop:30,
      marginLeft:25
  },
  word:{
    color:'#000',
    fontSize:25,
    marginLeft:36,
    marginTop:25,
    fontWeight:'500'
  },
  zero:{
    color:'#000',
    fontSize:25,
    marginLeft:250,
    marginTop:-28,
    fontWeight:'500' 
  },
  num:{
    color:'#000',
    fontSize:20,
    marginLeft:275,
    marginTop:-25,
    fontWeight:'500' 
  },
  line1:{
    backgroundColor:'#C400FF',
    height:3,
    width:140,
    marginTop:-3,
    marginLeft:25
  },
  ball: {
    height: 0,
    width: 0,
    
  },
});

export default targetScreen;
