import React from "react";
import { View, Text,
Button, TouchableOpacity, 
StyleSheet, Image, 
ImageBackground } from "react-native";

const Landing = ({navigation}) => {
    return(
        <View style = {styles.view}>
            <View sytle = {styles.post}>
            <TouchableOpacity onPress ={() => navigation.navigate('Post')}>
                <Text >
                    Post
                </Text>
            </TouchableOpacity>
            </View>
           <View>
            <TouchableOpacity onPress={() => navigation.navigate('Album')} >
                <Text style = {styles.album}>
                    Album
                </Text>
            </TouchableOpacity>
            </View>
            
        </View>
    );
}
const styles = StyleSheet.create({
    view : {
        alignSelf: 'center',
        paddingVertical : 10
    },
    post : {
        borderColor: 'red',
        borderWidth : 1,

    }

})
export default Landing;