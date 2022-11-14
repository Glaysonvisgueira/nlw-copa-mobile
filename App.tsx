import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NativeBaseProvider, VStack, Center, Text } from "native-base";
//import {
// useFonts,
//Roboto_400Regular,
//Roboto_500Medium,
//Roboto_700Bold,
//} from "@expo-google-fonts/robot";
import { THEME } from "./src/styles/theme";

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <Center
        flex={1}
        bgColor="gray.900"
        alignItems="center"
        justifyContent="center"
      >
        <Text color="white" fontSize={34}>
          Hello world!
        </Text>
        <StatusBar style="auto" />
      </Center>
    </NativeBaseProvider>
  );
}

//Aula parada em 02:07:12

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: 42,
  },
});
