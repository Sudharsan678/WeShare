import React,{useEffect,useState} from "react";
import { View, Text,FlatList, StyleSheet, TouchableOpacity} from "react-native";
import axios from "axios";

const Post = ({navigation}) => {
    const [store, setStore] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>setStore(response.data));
    },[])

const renderItem=({item})=>{
        return(
            <TouchableOpacity onPress={() => navigation.navigate('PostDetails',{ID:item.id})} >
            <View style = {styles.bg}>
                <Text style = {styles.title} >{item.title}</Text>
                <Text style = {styles.body} >{item.body}</Text>
            </View>
            </TouchableOpacity>

        )
}
    return (
        <View>
            <FlatList data={store} renderItem={renderItem} />
        </View>

    );
}

const styles = StyleSheet.create({
    title : {
        color : 'red',
        fontWeight : '900'
    },
    body : {
        color : 'blue',
        alignContent : 'space-around'
    },
    bg : {
        borderColor : 'yellow',
        // borderRadius: 17,
        borderWidth : 2,
        backgroundColor : 'lightgrey',
    }

})
export default Post;