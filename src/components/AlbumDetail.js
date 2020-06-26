import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking} from "react-native";

const AlbumDetail = ({ album, navigation }) => {
   return (
      <View style={styles.cardContainerStyle}>
        
      
        <View style={styles.cardSectionStyle}>
          <TouchableOpacity 
            onPress={() => navigation.navigate('Detail', album)}
          >
            <Image
              style={styles.imageStyle}
              source={{
                uri: album.image
              }}
            />
            <View>
       <Text style={styles.title}>{album.title}</Text>
       </View>
          </TouchableOpacity>
         
        </View>   
      </View>
  )};

const styles = StyleSheet.create({
  
  title:{
    width:120,
    height:22,
    marginTop:-20,
    marginLeft:80,
    fontSize:18,
    
    color:'#000',
    fontWeight:'bold'
  },
 
  cardContainerStyle: {
    height:100,                                           
        backgroundColor:'#f8f8f8',
  },
  cardSectionStyle: {
    
    padding: 5,
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderBottomWidth: 1
  },
  imageStyle: {
    height: 80,
    width: 80
  }
});

export default AlbumDetail;
