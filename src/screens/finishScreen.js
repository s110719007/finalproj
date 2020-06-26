import React, { useRef, useEffect } from "react";
import { Animated, Text, View,Button,StyleSheet } from "react-native";
import SpinnerBtn from './SpinnerBtn';
import * as Animatable from 'react-native-animatable';
import helpScreen from "./helpScreen";



const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; 

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
    }).start();
  }, []);
 

  return (
    
    <Animated.View
    
      style={{
        
        ...props.style,
        opacity: fadeAnim,
        
      }}
    >
     
 
      {props.children}
      
    </Animated.View>
    
  );
};

// You can then use your `FadeInView` in place of a `View` in your components:
export default () => {
  const fadeAnim = useRef(new Animated.Value(0)).current; 
  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000
    }).start();
  };
  
  const fadeOut = () => {
      
    
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 2000
      
    }).start();
    
  };

  return (
    
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center",backgroundColor:'#DAD7D7' }}>
      <FadeInView
        style={{ width: 250, height: 50, backgroundColor: "powderblue",marginTop:200 }}
      >
        <Text style={{ fontSize: 28, textAlign: "center", margin: 10 }}>
          線上小幫手
        </Text>
      </FadeInView>
     
      
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: fadeAnim // Bind opacity to animated value
          }
        ]}
      >
        <Text style={styles.fadingText}>Fading View!</Text>
      </Animated.View>
      <View style={styles.buttonRow}>
        <Button title="Fade In" onPress={fadeIn} />
        <Button title="Fade Out" onPress={fadeOut} />
      </View>
      <FadeInView>
      <Animatable.View
    style={{flex: 1,marginTop:50}}
    animation="pulse" easing="ease-out" iterationCount="infinite"
  >
    <SpinnerBtn 
      title='開始諮詢'
      backgroundColor='#4AAF4C'
      onPress={()=>console.log('Pressed!!')}

      />  
    
  </Animatable.View>
  </FadeInView>
    </View>
  );
};
const styles = StyleSheet.create({
  
  fadingContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "powderblue"
  },
  fadingText: {
    fontSize: 28,
    textAlign: "center",
    margin: 10
  },
  
});
