import React ,{useRef,useState}from "react";
import { StyleSheet,ScrollView, Linking,View,Image, TouchableOpacity,AsyncStorage} from 'react-native';
import { Button, Card, Text, PricingCard, Tile, withTheme,CheckBox } from 'react-native-elements';
import { BorderlessButton } from "react-native-gesture-handler";
import Ionicons from 'react-native-vector-icons/Ionicons';
import finishScreen from "./finishScreen";
const COUNTER_KEY = "COUNTER_KEY";
const helpScreen = ({ navigation }) => {
 
  const [isSelected, setSelection] = useState(false);
  const [isSelected1, setSelection1]=useState(false);
  const [isSelected2, setSelection2]=useState(false);
  const [isSelected3, setSelection3]=useState(false);
  const [isSelected4, setSelection4]=useState(false);
  const [isSelected5, setSelection5]=useState(false);
  const [isSelected6, setSelection6]=useState(false);
  const [isSelected7, setSelection7]=useState(false);
  const [isSelected8, setSelection8]=useState(false);
  const saveToAsyncStorage = () => {
    try {
      AsyncStorage.setItem(COUNTER_KEY, JSON.stringify(isSelected));
    } catch (error) {
      // Error saving data
    }
  };
  const restoreState = async () => {
    try {
      const savedStateString = await AsyncStorage.getItem(COUNTER_KEY);
      const state = JSON.parse(savedStateString);
      setCount(state);
    } catch (e) {}
  };

  React.useEffect(() => {
    restoreState();
  }, []);

  React.useEffect(() => {
    saveToAsyncStorage();
  }, [isSelected]);

   return (
    
    <View style={style.allback}>
    <ScrollView >
    
    <Text style={style.word1}>腹部痙攣</Text>
    <View style={style.container}>
      <View style={style.checkboxContainer}>
        <CheckBox
        
          onPress={() => setSelection(!isSelected)}
          style={style.checkbox}
          center
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={isSelected}
        />
       
      </View>
      
    </View>
    <Text style={style.word}>食慾異常</Text>
    <View style={style.checkboxContainer}>
    <CheckBox
          value={isSelected1}
          onPress={() => setSelection1(!isSelected1)}
          style={style.checkbox}
          center
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={isSelected1}
        />
        
      </View>
    <Text style={style.word}>便祕</Text>
    <View style={style.checkboxContainer}>
    <CheckBox
          value={isSelected2}
          onPress={() => setSelection2(!isSelected2)}
          style={style.checkbox}
          center
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={isSelected2}
        />
        
      </View>
    <Text style={style.word}>乳房脹痛</Text>
    <View style={style.checkboxContainer}>
    <CheckBox
          value={isSelected3}
          onPress={() => setSelection3(!isSelected3)}
          style={style.checkbox}
          center
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={isSelected3}
        />
        
      </View>
    <Text style={style.word}>頭頸背痛</Text>
    <View style={style.checkboxContainer}>
    <CheckBox
          value={isSelected4}
          onPress={() => setSelection4(!isSelected4)}
          style={style.checkbox}
          center
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={isSelected4}
        />
        
      </View>
    <Text style={style.word}>脹氣</Text>
    <View style={style.checkboxContainer}>
    <CheckBox
          value={isSelected5}
          onPress={() => setSelection5(!isSelected5)}
          style={style.checkbox}
          center
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={isSelected5}
        />
        
      </View>
    <Text style={style.word}>疲倦</Text>
    <View style={style.checkboxContainer}>
    <CheckBox
          value={isSelected6}
          onPress={() => setSelection6(!isSelected6)}
          style={style.checkbox}
          center
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={isSelected6}
        />
        
      </View>
    <Text style={style.word}>腹瀉</Text>
    <View style={style.checkboxContainer}>
    <CheckBox
          value={isSelected7}
          onPress={() => setSelection7(!isSelected7)}
          style={style.checkbox}
          center
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={isSelected7}
        />
        
      </View>
    <Text style={style.word}>排卵痛</Text>
    <View style={style.checkboxContainer}>
    <CheckBox
          value={isSelected8}
          onPress={() => setSelection8(!isSelected8)}
          style={style.checkbox}
          center
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={isSelected8}
        />
        
      </View>
      
    <Text style={style.word}>其他</Text>
    <TouchableOpacity   onPress={() => alert('感情問題一律建議分手')}>
    <Image
                        style={style.pic}
                        source={{uri:'https://github.com/lg30assqwedrf/11111111111111111/blob/master/191997.png?raw=true'}}/>
                         </TouchableOpacity>
     <TouchableOpacity   onPress={() => navigation.navigate('finish', finishScreen)}>
    <View style={style.finish}></View>
    <Text style={style.word2}>完成</Text>
    </TouchableOpacity>
  </ScrollView>
  </View>
  );
}
const style = StyleSheet.create({
  allback:{
 height:580,
backgroundColor:'#DAD7D7'
  },
 
 word:{
  marginLeft:130,
  marginTop:3,
  fontSize:20
 },
 word1:{
      marginLeft:130,
      marginTop:35,
      fontSize:20,
      
    },
    checkboxContainer: {
      flexDirection: "row",
      marginTop: -36,
      marginLeft:50
    },
    checkbox: {
      alignSelf: "center",
      marginLeft:-20
    },
    finish:{
      backgroundColor:'#2B475D',
      height:35,
      width:100,
      shadowColor: "#000",
      shadowOffset:{width:5,height:5},
      shadowOpacity:0.1,
      borderWidth:1,
      borderColor:'#d1d1d1',
      borderRadius:20,
      marginLeft:138,
      marginTop:50
    },
    word2:{
      fontSize:20,
      color:'white',
      marginTop:-27,
      marginLeft:168
    },
    pic:{
height:20,
width:20,
marginTop:-19,
marginLeft:71
    },
  
});

export default helpScreen;
