import React, { useState } from "react";
import {
  Text,
  LayoutAnimation,
  TouchableWithoutFeedback,
  UIManager,
  StyleSheet,
  Platform,
  View
} from "react-native";

import { Card } from "react-native-elements";

if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(0);
  }
  

const Panel = ({ content, title, expanded }) => {
  const [height, setHeight] = useState(expanded ? 0 : null);
  const onToggle = () => {
    LayoutAnimation.spring();
    setHeight(height === null ? 0 : null);
  };

  return (
    <TouchableWithoutFeedback onPress={() => onToggle()}>
      <View style={styles.main}>
        <Text style={styles.title}>{title}</Text>
        <Text style={[styles.content, { height }]}>{content}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
    overflow: "hidden",
    marginTop:25,
marginLeft:25,
width:330,
backgroundColor:'#FFFFFF',
borderRadius:22,
shadowColor: "#000",
shadowOffset:{width:5,height:5},
shadowOpacity:0.2,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    padding: 15,
    textAlign: "left",
    marginLeft:8,
    marginTop:4
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
  },
});

export default Panel;
