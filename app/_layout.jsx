import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import {GlobalProvider} from '../context/GlobalProvider';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
SplashScreen.preventAutoHideAsync();
const RootLayout = () => {
    const [fontsLoaded, error] = useFonts({
        "Popping-Black": require("../assets/fonts/Poppins-Black.ttf"),
        "Popping-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
        "Popping-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
        "Popping-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
        "Popping-Light": require("../assets/fonts/Poppins-Light.ttf"),
        "Popping-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
        "Popping-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
        "Popping-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
        "Popping-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
    });

    useEffect(() => {
        if(error) throw error;
        if (fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error]);

    if (!fontsLoaded && !error) return null;

    return(
        <GestureHandlerRootView style={{ flex: 1 }}>
    <GlobalProvider>
    <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* <Stack.Screen name="/search/[query]" options={{ headerShown: false }} /> */}
    
    </Stack>
    </GlobalProvider>
    </GestureHandlerRootView>
    )
};
export default RootLayout

