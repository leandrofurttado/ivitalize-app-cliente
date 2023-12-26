import { ImageBackground, Image, View, Text } from "react-native";
import { FUNDO_LOGIN, LOGO_IVITALIZE } from "../../themes/images";
import { Input } from "@rneui/themed";
import styles from "./style";
import Icon from 'react-native-vector-icons/Ionicons';


const Login = () => {

    return (
        <ImageBackground style={styles.Container} source={FUNDO_LOGIN} blurRadius={4}>
            <View style={styles.ContainerLogin}>
                <Image style={{ width: '80%', alignItems: 'center', justifyContent: 'center' }} source={LOGO_IVITALIZE} resizeMode="contain" />
                <View style={styles.ContainerForm}>
                    <Input placeholder="Usuário" leftIcon={
                        <Icon
                            name='person-circle-sharp'
                            size={30}
                            color='white'
                        />
                    } />
                    <Input placeholder="Senha" 
                    secureTextEntry={true}
                    leftIcon={
                        <Icon
                            name='key-outline'
                            size={30}
                            color='white'
                        />
                    } />
                </View>
            </View>
        </ImageBackground>
    )
}

export default Login;