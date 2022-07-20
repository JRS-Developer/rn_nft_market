import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { registerRootComponent } from "expo";
import { useFonts } from "expo-font";
import { View, Text } from "react-native";
import Details from "./screens/Details";
import Home from "./screens/Home";
import type { StackParamList } from "./types";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const Stack = createStackNavigator<StackParamList>();

const App = () => {
  const [fontsLoaded, error] = useFonts({
    InterBold: require("../assets/fonts/Inter-Bold.ttf"),
    InterLight: require("../assets/fonts/Inter-Light.ttf"),
    InterMedium: require("../assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("../assets/fonts/Inter-Regular.ttf"),
    InterSemiBold: require("../assets/fonts/Inter-SemiBold.ttf"),
  });

  if (!fontsLoaded)
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default registerRootComponent(App);
