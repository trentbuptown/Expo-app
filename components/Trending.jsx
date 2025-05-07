import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'

const Trending = () => {
  return (
    <FlatList 
        data={post}
        keyExtractor={(item) =>item.$id}
        renderItem={({ item }) => (
            <Text className="text-3xl text-white">{item.id}</Text>
        )}
        horizontal 
    />
  )
}

export default Trending

