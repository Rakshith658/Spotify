import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
// import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { Album } from '../../types'

// import Album from '../../types'

export type AlbumProps={
    album:Album
}

const AlbumComponents = (props:AlbumProps) => {
    const navigation = useNavigation();
    const onpress=()=>{
        navigation.navigate('AlbumScreen',{id:props.album.id})
    }
    return (
        <TouchableWithoutFeedback onPress={onpress}>
            <View style={styles.container}>
                <Image source={{uri:props.album.imageUri}} style={styles.image}/>
                <Text style={styles.text}>{props.album.artistsHeadline}</Text>    
            </View>
        </TouchableWithoutFeedback>
    )
}

export default AlbumComponents

const styles = StyleSheet.create({
    container:{
        // flex:1,
        width:140,
        margin:10,
        // backgroundColor:'red',   
    },
    image:{
        width:'100%',
        height:140,
        marginTop:5,
        // // flex:4,
        // flexDirection:"column",
        // // marginLeft:,
    },
    text:{
        color:'grey',
        marginTop:10,
        marginBottom:5,
    },
})
