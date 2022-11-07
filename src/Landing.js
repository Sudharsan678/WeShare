import React from "react";
import { View, Text,
Button, TouchableOpacity, 
StyleSheet, Image, Pressable,
ImageBackground } from "react-native";
import Wave from 'react-wavify'

const Landing = ({navigation}) => {
    return(
        <ImageBackground source={require('/home/divum/ProjectsReactNative/WeShare/assests/radialgradientback.png')} style = {{flex : 1}}>
        <View style = {styles.view}>
   
            
            <Pressable onPress ={() => navigation.navigate('Post')} style ={styles.postBtn}>
                <Text style ={styles.post}>
                    Post
                </Text>
            </Pressable>
            
          
            <Pressable onPress={() => navigation.navigate('Album')} style = {styles.albumBtn} >
                <Text style = {styles.album}>
                    Album
                </Text>
            </Pressable>
           
        </View>
        </ImageBackground>

    );
}
const styles = StyleSheet.create({
    view : {
        alignSelf: 'center',
        // paddingVertical : 10,
        borderWidth: 7,
        marginVertical: 183,
        alignContent: 'space-around',
        paddingHorizontal : 100,
        paddingVertical: 90,
        borderRadius : 12,
        // borderColor : 'red'        // color :'red'
    },
    postBtn: {
        borderWidth: 5,
        // fontSize: 32,
        elevation : 15,
        color :'white',
        backgroundColor : '#5693f5',
        borderRadius : 200,
        marginVertical :21,
        // padding : 21,
        // paddingHorizontal : 1

    },
    post : {
        fontSize : 32,
        color :'white', 
        paddingHorizontal : 29,
        alignContent : 'space-around'

    },
    albumBtn: {
        backgroundColor : '#5693f5',
        borderWidth :5,
        borderRadius : 200,
        elvation : 15

    },
    album :{
        fontSize : 32,
        color :'white', 
        alignContent : 'space-around',
        paddingHorizontal: 29,

    }
    

})
export default Landing;