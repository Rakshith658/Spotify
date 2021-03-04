import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
// import { FlatList } from 'react-native-gesture-handler'
import { Album } from '../types'
import AlbumComponents from './Album'

export type AlbumCategoryProps = {
  title: string,
  albums: [Album],
}

const AlbumCategory = (props:AlbumCategoryProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <FlatList
                data={props.albums}
                renderItem={({item})=><AlbumComponents album={item}/>}
                keyExtractor={(item)=>item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default AlbumCategory

const styles = StyleSheet.create({
    container: {
    margin: 10,
    },
    title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10
    }
})
