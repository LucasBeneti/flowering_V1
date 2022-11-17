import React from "react";
import { View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import DataScreen from "./screens/DataScreen";
import ConfigurationsScreen from "./screens/ConfigurationsScreen";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Data" component={DataScreen} />
      <Drawer.Screen name="Configurations" component={ConfigurationsScreen} />
    </Drawer.Navigator>
  );
};
export function Router() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Drawer" component={DrawerNavigator} />
    </Stack.Navigator>
  );
}

const LoginScreen = () => {
  return (
    <View>
      <Text>Login page</Text>
    </View>
  );
};
