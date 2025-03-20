import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Platform, SafeAreaView, View } from 'react-native';
import { useState } from 'react';
import Header from './.expo/src/components/Header';
import Timer from './.expo/src/components/Timer';
//Platform: se usa solo para aplicar a una plataforma 

//const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"]
const colors = ["#F4A261", "#2A9D8F", "#8ECAE6"]


export default function App() {

  const [isWorking, setIsWorking] = useState(false); 
  const [time, setTime] = useState(25 * 60); 
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "LONG"); 

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colors[currentTime]}]}> 
        <View style={styles.ViewContainer}>
        <Text style={styles.text} >Pomodoro</Text>
        <Header currentTime={currentTime} setCurrentTime={setCurrentTime} setTime={setTime}/>
        <Timer time={time}/>
        <StatusBar style='auto'/>
        </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15, 
    
  },
  text: {
    fontSize: 32, 
    fontWeight: 'bold'
  },
  ViewContainer :{
    paddingTop: Platform.OS ==="android" && 30,
    paddingTop: 30,
    flex: 0.3, 
  },
});
