import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Song}from '../types'
import { Audio }from 'expo-av'
import { Sound } from 'expo-av/build/Audio';

// export type PlayerWidgetprops={
//     song:Song
// }

const song={
    uri:'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3',
    imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
    title: 'High on You',
    artist: 'Helen',
}

const PlayerWidget = () => {
    const [isPlaying, setisPlaying] = useState<boolean>(false)
    const [sound, setsound] = useState<Sound|null>(null)
    const [duration, setDuration] = useState<number|null>(null);
    const [position, setPosition] = useState<number|null>(null);

    const onPlaybackStatusupdate=(status)=>{
        // console.log(status) 
        setisPlaying(status.isPlaying)
        setDuration(status.durationMillis);
        setPosition(status.positionMillis); 
    }

    const playCurrentsong=async()=>{
        if (sound) {
            await sound.unloadAsync()
        }
        const {sound: newSound}=await Sound.createAsync(
            {uri:song.uri},
            {shouldPlay:isPlaying},
            onPlaybackStatusupdate
        )
        setsound(newSound);
    }

    useEffect(() => {
        playCurrentsong()
    }, [])

    const onPlayPausePress=async()=>{
        if(!sound){
            return
        }
        if (isPlaying) {
            await sound.stopAsync();
        } else {
            await sound.playAsync();
        }
        // setisPlaying(!isPlaying) 
    }
    const getProgress = () => {
        if (sound === null || duration === null || position === null) {
            return 0;
        }
        return (position / duration) * 100;
    }
    return (
        <View style={styles.container}>
            <View style={[styles.progress, { width: `${getProgress()}%`}]} />
                <View style={styles.row}>
                    <Image source={{ uri: song.imageUri }} style={styles.image} />
                    <View style={styles.rightContainer}>
                        <View style={styles.nameContainer}>
                            <Text style={styles.title}>{song.title}</Text>
                            <Text style={styles.artist}>{song.artist}</Text>
                        </View>
                        <View style={styles.iconsContainer}>
                            <AntDesign name="hearto" size={30} color={"white"}/>
                            <TouchableOpacity onPress={onPlayPausePress}>
                                <FontAwesome name={isPlaying ? 'pause' : 'play'} size={30} color={"white"}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
    )
}

export default PlayerWidget

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: '7%',
        backgroundColor: '#131313',
        width: '100%',
        borderWidth: 2,
        borderColor: 'black',
    },
    progress: {
        height: 3,
        backgroundColor: '#bcbcbc'
    },
    row: {
        flexDirection: 'row',
    },
    image: {
        width: 75,
        height: 75,
        marginRight: 10,
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 100,
        justifyContent: 'space-around'
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 10,
    },
    artist: {
        color: 'lightgray',
        fontSize: 18,
    }
})
