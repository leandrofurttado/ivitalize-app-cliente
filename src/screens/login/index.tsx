import { ImageBackground, Animated, Image, View, Text } from "react-native";
import { LOGO_IVITALIZE, IMAGE_SPLASH_SCREEN } from "../../themes/images";


const Login = () => {

    return (
        <ImageBackground source={IMAGE_SPLASH_SCREEN} blurRadius={5}>
            <View>
                <Text>Bem vindo!</Text>
            </View>
        </ImageBackground>
    )
}

export default Login;