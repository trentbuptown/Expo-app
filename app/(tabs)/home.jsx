import { StyleSheet, Image, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList } from 'react-native-gesture-handler'
import { images } from "../../constants/";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";

const Home = () => {
  return (
    <SafeAreaView className="bg-primary">
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 },]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => {
          <Text className="text-3xl text-white">{item.id}</Text>
        }}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm-text-gray-100">
                  Welcome Back
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  JSMastery
                </Text>
              </View>

              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMode='contain'
                />
              </View>
            </View>
          
          <SearchInput>

          </SearchInput>
          <View className="w-full flex-1 pt-5 pb-8">
            <Text className="text-gray-100 text-lg font-pregular mb-3">
              Lastest Videos
            </Text>

            <Trending posts={[{ id: 1 }, { id: 2 }, { id: 3 }] ?? []}/>
          </View>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

export default Home;