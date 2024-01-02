import Login from "./src/screens/login";
import { useFonts, Inter_100Thin, Inter_400Regular, Inter_700Bold, Inter_900Black, Inter_200ExtraLight, Inter_300Light } from "@expo-google-fonts/inter";
import LoadingComponent from "./src/components/loading/Loading";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./src/screens/splash";
import { useState } from "react";
import Home from "./src/screens/home";
import PasswordRecovery from "./src/screens/password_recovery";

/* App.tsx também ficará responsável pelas routers */


const App = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [fontsLoaded] = useFonts({ Inter_100Thin, Inter_400Regular, Inter_700Bold, Inter_900Black, Inter_200ExtraLight, Inter_300Light });

    const Stack = createNativeStackNavigator();

    if (!fontsLoaded) {
        return <LoadingComponent size={20} />;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="SplashScreen"
                    component={SplashScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />
                
                <Stack.Screen
                    name="PasswordRecovery"
                    component={PasswordRecovery}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;