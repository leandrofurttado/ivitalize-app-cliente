import { ImageBackground, Image, View, Text, ScrollView } from "react-native";
import { FUNDO_LOGIN, LOGO_IVITALIZE } from "../../themes/images";
import { Input, Button, ButtonGroup, withTheme } from "@rneui/themed";
import styles from "./style";
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from "../../themes/colors";
import { FONTS } from "../../themes/fonts";


const Login = () => {

    return (
        <ImageBackground style={styles.Container} source={FUNDO_LOGIN} blurRadius={4}>
            <ScrollView style={{flexGrow: 1}}>
                <View style={styles.ContainerLogin}>
                    <Image style={{ width: '80%', alignItems: 'center', justifyContent: 'center' }} source={LOGO_IVITALIZE} resizeMode="contain" />
                    <View style={styles.ContainerForm}>
                        <Input placeholder="Usuário (CPF)"
                            inputStyle={{ color: COLORS.secundary }}
                            containerStyle={{paddingTop: 20}}
                            placeholderTextColor={COLORS.grayLight}
                            inputContainerStyle={{
                                backgroundColor: 'rgba(255, 255, 255, 0.2)', borderColor: COLORS.secundary, borderTopLeftRadius: 15,
                                borderTopRightRadius: 15
                            }}
                            leftIconContainerStyle={{ paddingHorizontal: 10 }}
                            leftIcon={
                                <Icon
                                    name='person-circle-sharp'
                                    size={30}
                                    color={COLORS.secundary}
                                />
                            } />
                        <Input placeholder="Senha"
                            secureTextEntry={true}
                            inputContainerStyle={{
                                backgroundColor: 'rgba(255, 255, 255, 0.2)', borderColor: COLORS.secundary, borderTopLeftRadius: 15,
                                borderTopRightRadius: 15
                            }}
                            inputStyle={{ color: COLORS.secundary }}
                            placeholderTextColor={COLORS.grayLight}
                            leftIconContainerStyle={{ paddingHorizontal: 10 }}
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
                                paddingTop: 15
                            }}
                            titleStyle={{ color: COLORS.secundary, fontSize: 20, fontFamily: FONTS.bold }}
                        />
                    </View>
                    <View style={{paddingTop: 100}}>
                        <Text style={styles.textCopyright}>
                            Copyright iVitalize © 2024 
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}

export default Login;