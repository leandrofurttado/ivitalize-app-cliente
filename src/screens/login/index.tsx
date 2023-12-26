import { ImageBackground, Image, View, Text } from "react-native";
import { FUNDO_LOGIN, LOGO_IVITALIZE } from "../../themes/images";
import { Input, Button, ButtonGroup, withTheme } from "@rneui/themed";
import styles from "./style";
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from "../../themes/colors";
import { FONTS } from "../../themes/fonts";


const Login = () => {

    return (
        <ImageBackground style={styles.Container} source={FUNDO_LOGIN} blurRadius={4}>
            <View style={styles.ContainerLogin}>
                <Image style={{ width: '80%', alignItems: 'center', justifyContent: 'center' }} source={LOGO_IVITALIZE} resizeMode="contain" />
                <View style={styles.ContainerForm}>
                    <Input placeholder="Usuário (CPF)" 
                    inputStyle={{color: COLORS.secundary}}
                    inputContainerStyle={{borderColor: COLORS.secundary, borderWidth: 2, borderRadius: 10}}
                    leftIconContainerStyle={{paddingHorizontal: 10}}
                    leftIcon={
                        <Icon
                            name='person-circle-sharp'
                            size={30}
                            color={COLORS.secundary}
                        />
                    } />
                    <Input placeholder="Senha"
                        secureTextEntry={true}
                        inputContainerStyle={{borderColor: COLORS.secundary, borderWidth: 2, borderRadius: 10}}
                        inputStyle={{color: COLORS.secundary}}
                        leftIconContainerStyle={{paddingHorizontal: 10}}
                        leftIcon={
                            <Icon
                                name='key-outline'
                                size={30}
                                color={COLORS.secundary}
                            />
                        } />
                    <Button
                        title="LOG IN"
                        buttonStyle={{
                            backgroundColor: 'black',
                            borderWidth: 2,
                            borderColor: COLORS.primary,
                            borderRadius: 30,
                            padding: 10
                        }}
                        containerStyle={{
                            width: '100%',
                            marginVertical: 30,
                        }}
                        titleStyle={{ color: COLORS.secundary, fontSize: 20, fontFamily: FONTS.bold }}

                    />
                </View>
            </View>
        </ImageBackground>
    )
}

export default Login;