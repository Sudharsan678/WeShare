import React,{useEffect,useState} from "react";
import { View, Text, FlatList, StyleSheet,
          } from 'react-native';
import axios from "axios";

const PostDetails = ({route}) => {
    // console.log(route.params.ID);
    const [store, setStore] = useState([]);
    const ID=route.params.ID;

    useEffect(()=>{
         axios.get(`https://jsonplaceholder.typicode.com/posts/${ID}/comments`)
         .then((response)=>setStore(response.data));
    },[])
    const renderItem=({item})=>{
        return(
            
            <View style = {styles.v}>
               
                <Text style = {styles.n} >{item.name}</Text>
                <Text>Comments </Text>
                <Text style = {styles.c}>{item.body}</Text>
            </View>
            
        );}

    return(
        <View style = {styles.fl}>
            <FlatList data = {store} renderItem={renderItem}/>
        </View>
    )
}
const styles = StyleSheet.create({
    v: {
        backgroundColor: 'skyblue',
        flex: 1,
        paddingBottom: 10,
        borderWidth: 1,
        alignContent : 'space-around'
    },
    fl : {
        alignSelf: 'center'
    }
})

export default PostDetails;