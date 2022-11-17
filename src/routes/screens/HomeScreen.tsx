import React from "react";
import { View, Text, Button } from "react-native";

//TODO na tela de home poderão ter as "salas" em que o dispositivo vai estar
// assim o usuário pode separar elas por utilização, estágio das plantas, etc...
const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Home screen</Text>
      <Button
        onPress={() => {
          navigation.navigate("Login");
        }}
        title="Go to login screen"
      />
    </View>
  );
};

export default HomeScreen;
