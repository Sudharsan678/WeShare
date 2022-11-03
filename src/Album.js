import React, {useState, useEffect}from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet,
        Pressable} from "react-native";
import axios from "axios";

const Album = ({navigation}) => {
    const [store, setStore] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/albums')
        .then((response)=>setStore(response.data));
    },[])
    const renderItem=({item})=>{
        return(
            <Pressable onPress={() => navigation.navigate('AlbumDetails', {UserID : item.id})}>
            <View style = {styles.t} >
                <Text style = {styles.text}>{'\n'}{item.id}</Text>
            </View>
            </Pressable>

        )
}
    return (
        <View style = {styles.fl}>
            <FlatList data={store} renderItem={renderItem} numColumns={2}/>

        </View>


    );
}

const styles = StyleSheet.create({
    fl: {
        flexDirection : 'row',
        alignContent : 'space-around',
        backgroundColor : 'skyblue'
        
    },
    t : {
      backgroundColor:"pink",
      flex :1,
      margin:20,
    // alignContent: 'space-around',
    borderWidth: 1,
    padding : 70,
    resizeMode : 'contain',
    elevation : 10,
    },
    text : {
        textAlign : 'center',
        color  : 'black'
    }

})

export default Album;