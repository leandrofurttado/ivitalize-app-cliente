import { ImageBackground, Image, View, Text } from "react-native";
import { FUNDO_LOGIN, LOGO_IVITALIZE } from "../../themes/images";
import { Input } from "@rneui/themed";
import styles from "./style";
import Icon from 'react-native-vector-icons/Ionicons';


const Login = () => {

    return (
        <ImageBackground style={styles.Container} source={FUNDO_LOGIN} blurRadius={4}>
            <View style={styles.ContainerLogin}>
                <Image style={{ width: '70%' }} source={LOGO_IVITALIZE} resizeMode="contain" />
                <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    <Input placeholder="Usuário" />
                    <Input placeholder="Senha" leftIcon={
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