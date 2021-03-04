import { useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import AlbumHearder from '../components/AlbumHearder'
import SongListitem from '../components/SongListitem'
import albumDetails from '../data/albumDetails'

const AlbumScreen = () => {
    const route=useRoute();
    useEffect(() => {
        
    }, [])
    return (
        <View >
            <FlatList
                data={albumDetails.songs}
                renderItem={({item})=><SongListitem song={item}/>}
                keyExtractor={(item)=>item.id}
                ListHeaderComponent={()=><AlbumHearder album={albumDetails}/>}
            />
            {/* <SongListitem song={albumDetails.songs[0]}/> */}
        </View>
    )
}

export default AlbumScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})
