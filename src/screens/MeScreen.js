import React, { Component } from 'react';
import { StyleSheet,ScrollView,View ,Image} from 'react-native';
import { Tile, ListItem, Icon,Text } from 'react-native-elements';
import sharedata from "../json/share.json";


// Make a component
const MeScreen = ({ navigation }) => {
    return (
      <View style={style.allback}>
      <ScrollView>
        
      <Image
        style={style.pic}
        source={{uri:sharedata.bookList[5].image}}
      />
      <Text style={style.word}>月光仙子</Text>
        
      <View style={style.back}>
          <Text style={style.word1}>
            性別
          </Text>
          <Text style={style.word2}>
            女
          </Text>
          <View style={style.box}></View>
          <Text style={style.word1}>
            身高體重
          </Text>
          <Text style={style.word3}>
            160/43
          </Text>
          <View style={style.box}></View>
          <Text style={style.word1}>
            年齡
          </Text>
          <Text style={style.word2}>
            14
          </Text>
          <View style={style.box}></View>
          <Text style={style.word1}>
            Email
          </Text>
          <Text style={style.word4}>
            a123@gmail.com
          </Text>
          <View style={style.box}></View>
          <Text style={style.word1}>
            Birthday
          </Text>
          <Text style={style.word5}>
            2020/5/1
          </Text>
          <View style={style.box}></View>
          <Text style={style.word1}>
            疾病史
          </Text>
          <Text style={style.word6}>
            愛滋
          </Text>
          <View style={style.box}></View>
          <Text style={style.word1}>
            過敏
          </Text>
          <Text style={style.word2}>
            無
          </Text>
          <View style={style.box}></View>
         
          </View>
      </ScrollView>
      </View>
    );
}

const style = StyleSheet.create({
    allback:{
        backgroundColor:'#DAD7D7',
    },

    pic:{
      height:150,
      width:150,
      marginLeft:110,
      marginTop:35
    },
    word:{
      fontSize:23,
     
      marginTop:15,
      marginLeft:143,
      fontWeight:'500'
    },

    back:{
      backgroundColor:'#fff',
      height:490,
      width:350,
      borderRadius:30,
      marginLeft:14,
      marginTop:25

    },
 
    word1:{
      fontSize:19,
      marginTop:33,
      marginLeft:30,
      color:'#919191'
    },
    word2:{
      fontSize:19,
      marginTop:-22,
      marginLeft:300
      
    },
    word3:{
      fontSize:19,
      marginTop:-22,
      marginLeft:263
    },
    word4:{
      fontSize:19,
      marginTop:-22,
      marginLeft:175
    },
    word5:{
      fontSize:19,
      marginTop:-22,
      marginLeft:240
    },
    word6:{
      fontSize:19,
      marginTop:-22,
      marginLeft:280
    },
    box:{
      height:1.2,
      width:290,
      backgroundColor:'#707070',
      marginTop:10,
      marginLeft:30
    }
});
export default MeScreen;
