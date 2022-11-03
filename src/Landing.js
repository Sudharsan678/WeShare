import React from "react";
import { View, Text,
Button, TouchableOpacity, 
StyleSheet, Image, 
ImageBackground } from "react-native";

const Landing = ({navigation}) => {
    return(
        <View style = {styles.view}>
            
            <TouchableOpacity onPress ={() => navigation.navigate('Post')}>
                <Text >
                    Post
                </Text>
            </TouchableOpacity>
            
          
            <TouchableOpacity onPress={() => navigation.navigate('Album')} >
                <Text style = {styles.album}>
                    Album
                </Text>
            </TouchableOpacity>
           
            
        </View>
    );
}
const styles = StyleSheet.create({
    view : {
        alignSelf: 'center',
        paddingVertical : 10,
        borderWidth: 10,
        marginVertical: 220,
        alignContent: 'space-around',
        paddingHorizontal : 100,
        paddingVertical: 90
    },
    post : {
        borderColor: 'red',
        borderWidth : 4,
        marginBottom: 110


    }

})
export default Landing;