import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import DataScreen from "./screens/DataScreen";
import ConfigurationsScreen from "./screens/ConfigurationsScreen";

export type RootStackParamList = {
  Drawer: undefined;
  Login: undefined;
};

const Drawer = createDrawerNavigator<RootStackParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

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
  const isLoggedIn = true;
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Drawer" component={DrawerNavigator} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}
