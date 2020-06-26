import React from "react";
import { StyleSheet,ScrollView ,View,Image, TouchableOpacity} from 'react-native';
import {Text,SearchBar,Input,Icon} from 'react-native-elements';
import albumData from "../json/albums.json";
import DetailScreen from "./DetailScreen";
import heartScreen from "./heartScreen";
import dietScreen from "./dietScreen";
import sleepScreen from "./sleepScreen";


const SearchScreen = ({navigation }) => {
  const [value, onChangeText] = React.useState(0);
 
    return (
      
      <View style={style.back}>
        <ScrollView style={{paddingTop: 20}}>
   
        <View style={style.search}> 
        <SearchBar
  lightTheme
 onChangeText={text => onChangeText(value)}

  icon={{ type: 'font-awesome', name: 'search' }}
  placeholder='Type Here...'
  value={value}
  />



         </View>
         <TouchableOpacity 
            onPress={() => navigation.navigate('heart', heartScreen)}
          >
         <View style={style.picback1}>
            <Image
                        style={style.pic1}
                        source={{uri:albumData.bookList[0].image}}/>
                <Text style={style.word1}>心跳</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => navigation.navigate('Detail', DetailScreen)}
          >
            <View style={style.picback2}>
            <Image
                        style={style.pic1}
                        source={{uri:albumData.bookList[1].image}}/>
                <Text style={style.word1}>步行</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => navigation.navigate('sleep', sleepScreen)}
          >
            <View style={style.picback3}>
            <Image
                        style={style.pic1}
                        source={{uri:albumData.bookList[3].image}}/>
                <Text style={style.word1}>睡眠</Text>
                
            </View>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => navigation.navigate('diet', dietScreen)}
          >
            <View style={style.picback4}>
            <Image
                        style={style.pic1}
                        source={{uri:albumData.bookList[2].image}}/>
                <Text style={style.word1}>飲食</Text>
            </View>
            </TouchableOpacity>
      <Text style={style.bottom}>Contact us :（02）1234-5678</Text>
      </ScrollView>
        </View>
  
    );
  
  
}

const style = StyleSheet.create({
  back:{
    backgroundColor:'#2B475D',
    height:800,
   
  },
  search:{
    height:50,
    width:360,
    marginLeft:5,
    marginTop:0,
       
       
  },
  bottom:{
    marginTop:18,
    marginLeft:90,
    color:'#2B475D',
  },
  picback1:{
    backgroundColor:'#8E5757',
    width:305,
    height:95,
    marginTop:50,
    marginLeft:35,
    borderRadius:20,
  },
  pic1:{
    width:65,
    height:65,
    marginLeft:20,
    marginTop:16
  },

  picback2:{
    backgroundColor:'#E1A61B',
    width:305,
    height:95,
    marginTop:20,
    marginLeft:35,
    borderRadius:20,
  },
  
  picback3:{
    backgroundColor:'#145126',
    width:305,
    height:95,
    marginTop:20,
    marginLeft:35,
    borderRadius:20,
  },
  
  picback4:{
    backgroundColor:'#216861',
    width:305,
    height:95,
    marginTop:20,
    marginLeft:35,
    borderRadius:20,
  },
  word1:{
    color:'#fff',
    fontSize:18,
    marginTop:-40,
    marginLeft:100
  }

}
);

export default SearchScreen;
