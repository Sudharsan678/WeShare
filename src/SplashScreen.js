import React,{useState} from "react";
import { View,Image,StyleSheet } from "react-native";

 
 const SplashScreen=({navigation})=>{
  const [timePassed, setTimePassed] = useState(false);

  setTimeout(() => {
    setTimePassed(true);
  }, 5000);
 
    
    

  if (timePassed==true) { 
    console.log(!timePassed);
  return(
    <View>
        <Text>Hiii</Text>
    </View>
  )
  }
  
  navigation.navigate("Landing");
 }


 const styles=StyleSheet.create({
  Image:{
     width:60,
     height:60,
   
  },
  ImageCover:{
        alignItems:'center',
        marginTop:350
  }
 })
export default SplashScreen;