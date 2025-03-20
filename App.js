import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Platform, SafeAreaView, View } from 'react-native';
import { useState } from 'react';
//Platform: se usa solo para aplicar a una plataforma 

const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"]


export default function App() {

  const [isWorking, setIsWorking] = useState(false); 
  const [time, setTime] = useState(25 * 60); 
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "LONG"); 

  return (
    <SafeAreaView style={styles.container}> 
        <View style={styles.ViewContainer}>
        <Text style={styles.text} >Pomodoro</Text>
        <StatusBar style='auto'/>
        </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 32, 
    fontWeight: 'bold'
  },
  ViewContainer :{
    paddingTop: Platform.OS ==="android" && 30,
    paddingTop: 30,
    paddingHorizontal: 10, 
  },
});
