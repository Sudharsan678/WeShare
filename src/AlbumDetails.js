import React, {useState, useEffect} from "react";
import axios from "axios";
import { View, Text,
        FlatList, Image, StyleSheet
     } from "react-native";

const AlbumDetails = ({route}) => {
    const ID = route.params.UserID;
    const [photoStore, setPhoto] = useState ([]);

    useEffect (() => {
        axios
      .get(`https://jsonplaceholder.typicode.com/albums/${ID}/photos`)
      .then(responce => setPhoto(responce.data));

    },[])
    const renderItem = ({item}) => {
        const URL=item.url;
        // console.log(URL);
        return (
          <View style = {styles.container} >
            <Text>
            <Image
            source={{uri : URL}}
            
            style={styles.Image}
            />
             </Text>
          </View>
        );
      };
    return (
        <View>
            <FlatList data={photoStore} renderItem={renderItem} numColumns = {2} />
        </View>
    );
}

const styles = StyleSheet.create({
    Image:{
        width:150,
        height:150,
        alignSelf:'center',
        alignContent : 'space-around',
        borderRadius:5
      },
      container : {
        // backgroundColor:'white',
    margin:10,
    padding:10,
    borderRadius:10,
    flex : 1,
    elevation:10,
    // flexDirection :'row'
      }
})

export default AlbumDetails