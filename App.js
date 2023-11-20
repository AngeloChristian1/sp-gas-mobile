import { NavigationContainer } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import ScreenNavigator from "./src/Navigation/ScreenNavigation"
import { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [showRealApp, setShowRealApp] = useState(false);
  const [fontsLoaded] = useFonts({
    "poppins":require("./assets/fonts/poppins/Poppins-Regular.ttf"),
    "poppins_medium":require("./assets/fonts/poppins/Poppins-Medium.ttf"),
    "poppins_semibold":require("./assets/fonts/poppins/Poppins-SemiBold.ttf"),
    "poppins_bold":require("./assets/fonts/poppins/Poppins-ExtraBold.ttf"),
    "sans":require("./assets/fonts/dm_sans/DMSans-Regular.ttf"),
    "sans_bold":require("./assets/fonts/dm_sans/DMSans-Bold.ttf"),
    "sans_semibold":require("./assets/fonts/dm_sans/DMSans-SemiBold.ttf"),
  });
  
  useEffect(()=>{
    async function prepare(){
      await SplashScreen.preventAutoHideAsync();
    };
    if (!fontsLoaded) {
    prepare();
    }else{
      SplashScreen.hideAsync();
    }
  },[fontsLoaded])
 

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
     <ScreenNavigator/>
    </NavigationContainer>
  
  );
}

