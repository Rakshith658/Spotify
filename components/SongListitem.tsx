import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Song}from '../types'

export type SongListitemprops={
    song:Song
}

const SongListitem = (props:SongListitemprops) => {
    return (
        <View style={styles.container}>
            <Image source={{uri:props.song.imageUri}} style={styles.image} />
            <View style={styles.rightContainer}>
                <Text style={styles.title}>{props.song.title}</Text>
                <Text style={styles.artist}>{props.song.artist}</Text> 
            </View>
        </View>
    )
}

export default SongListitem

const styles = StyleSheet.create({
    container: {
    flexDirection: 'row',
    margin: 15,
    },
    image: {
        width: 75,
        height: 75,
    },
    rightContainer: {
        justifyContent: 'space-around',
        marginLeft: 15,
    },
    title: {
        color: 'white',
        fontSize: 24,
    },
    artist: {
        color: 'lightgray',
        fontSize: 20,
    }
})
