import React from "react";
import { StyleSheet,ScrollView,View,Image, TouchableOpacity , Linking} from 'react-native';
import { ListItem,Text } from 'react-native-elements';
import sharedata from "../json/share.json";
// Make a component
const ShareScreen = ({ navigation }) => {
    return (
        <View style={style.back}>      
              <ScrollView style={{paddingTop: 0}}>
            
              <View>
              
            <Image
                        style={style.pic5}
                        source={{uri:sharedata.bookList[4].image}}/>
                        </View>
                        <TouchableOpacity 
          >
                        <View>
                        <Image
                        style={style.pic1}
                        source={{uri:sharedata.bookList[0].image}}/>
                        </View>
                        </TouchableOpacity> 
                        <TouchableOpacity> 
                        <View>
                        <Image
                        style={style.pic2}
                        source={{uri:sharedata.bookList[1].image}}/>
                        </View>
                        </TouchableOpacity> 
                        <TouchableOpacity> 
                        <View>
                        <Image
                        style={style.pic3}
                        source={{uri:sharedata.bookList[2].image}}/>
                        </View>
                        </TouchableOpacity> 
                        <TouchableOpacity> 
                        <View>
                        <Image
                        style={style.pic4}
                        source={{uri:sharedata.bookList[3].image}}/>
                        </View>
                        </TouchableOpacity> 
                        
                        <View></View>
        </ScrollView>
        </View>

    );
}

const style = StyleSheet.create({
  
    back:{
        backgroundColor:'#fff',
        height:800
    },
 pic1:{
        height:50,
        width:50,
        marginTop:-320,
        marginLeft:20
 },
 pic2:{
    height:50,
    width:50,
    marginTop:-300,
    marginLeft:120
},
pic3:{
    height:50,
    width:50,
    marginTop:-350,
    marginLeft:200
},
pic4:{
    height:50,
    width:50,
    marginTop:-220,
    marginLeft:300
},
pic5:{
    height:400,
    width:400,
    marginTop:100,
    marginLeft:-10
    
},
});
export default ShareScreen;
