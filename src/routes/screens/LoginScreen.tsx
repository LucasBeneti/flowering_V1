import { View, Text, Button } from "react-native";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Router";

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, "Login">;

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  return (
    <View>
      <Text>Login page</Text>
      <Button
        onPress={() => {
          navigation.navigate("Home");
        }}
        title="Go to login screen"
      />
    </View>
  );
};

export default LoginScreen;
