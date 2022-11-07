import React,{useState} from "react";
import { View,Image,StyleSheet,} from "react-native";
import Pinchable from 'react-native-pinchable';

 
 const SplashScreen=({navigation})=>{
  const [timePassed, setTimePassed] = useState(false);

  setTimeout(() => {
    setTimePassed(true);
  },2500);

  if (!timePassed) { 
    // console.log(!timePassed);
  return(
    <View style = {styles.image}>
      <Pinchable>
        <Image style = {styles.ImageCover}
        source = {require('/home/divum/ProjectsReactNative/WeShare/assests/wesharesplash.png')}></Image>
        </Pinchable>
    </View>
  )
  }
  
  navigation.navigate("Landing");
  return null;
 }


 const styles = StyleSheet.create({
  image:{
     width:54,
     height:60,
    //  resizeMode: 'cover',
     flex : 1
   
  },
  ImageCover:{
        alignItems:'center',
        paddingBottom : 100,
        marginBottom : 1,
        resizeMode : 'cover',
        alignContent : 'stretch'
        // marginRight : 122
        // marginTop:35
        // flex :1 
  }
 })
export default SplashScreen;