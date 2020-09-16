import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView,View,Dimensions } from 'react-native';

export default class Horizontal extends Component {
    render(){
  return (
    <ScrollView horizontal={true}
     pagingEnabled={true} 
     style={styles.container}
     >
    <View style={styles.outer}>
        <Text style={styles.innerText}>MEDICLOQ SERVICES PVT LTD </Text>  
    </View>
    <View style={[styles.outer,styles.outerone]}>
        <Text style={styles.innerText}>JP NAGAR</Text>  
    </View>
    <View style={[styles.outer,styles.outertwo]}>
        <Text style={styles.innerText}>BANGALORE-560078</Text>  
    </View>
    </ScrollView>
  );
}
}

const styles = StyleSheet.create({
  container: {
  },
  outer:{
    backgroundColor:"#2742B0",
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  innerText:{
      fontSize:21,
      color:"#fff",
      fontWeight:"bold",
  },
  outerone:{
      backgroundColor:"#CA2C8E",
  },
  outertwo:{
    backgroundColor:"#6CD72F",
  },
});