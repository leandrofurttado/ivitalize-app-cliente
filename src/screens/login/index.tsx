import { ImageBackground, Image, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { FUNDO_LOGIN, LOGO_IVITALIZE } from "../../themes/images";
import { Input, Button, ButtonGroup, withTheme } from "@rneui/themed";
import styles from "./style";
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from "../../themes/colors";
import { FONTS } from "../../themes/fonts";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import PasswordRecovery from "../password_recovery";
import { useEffect, useState } from "react";
import { formatCPF } from "../../assets/functions/functions";


const Login = () => {
    const { reset, navigate } = useNavigation<NavigationProp<ParamListBase>>();

    const [user, setUser] = useState<string>('');
    const [password, setPassword] = useState<string>('')
    const [errorMessage, setErrrorMessage] = useState<string>('')

    async function login() {

        const formData = {
            cpf: user,
            password: password
        };

        const response = await fetch('https://ivitalize-api.onrender.com/api/v1/students/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        try {
            if (response.ok) {
                const data = await response.json(); //RETORNO DA API

                if (response && response.status === 200) {
                    reset({
                        index: 0,
                        routes: [{ name: 'Home' }]
                    });
                }
                
            } 
            if (response && response.status === 401) {
                setErrrorMessage('Usuário ou senha inválidos! Tente novamente.')
            }
            else {
                setErrrorMessage(`Ocorreu um erro, tente novamente mais tarde!`);
            }
        } catch (error) {
            console.error('Erro ao processar a resposta:', error.message);
        }


    }

    function forgot_password() {

        navigate('PasswordRecovery');
    }

    return (
        <ImageBackground style={styles.Container} source={FUNDO_LOGIN} blurRadius={4}>
            <ScrollView style={{ flexGrow: 1 }}>
                <View style={styles.ContainerLogin}>
                    <Image style={styles.LogoiVitalize} source={LOGO_IVITALIZE} resizeMode="contain" />
                    <View style={styles.ContainerForm}>
                        <Input placeholder="Usuário (CPF)"
                            onChangeText={(text) => { setUser(text) }}
                            keyboardType="numeric"
                            value={formatCPF(user)}
                            inputStyle={{ color: COLORS.secundary }}
                            containerStyle={{ paddingTop: 20 }}
                            placeholderTextColor={COLORS.grayLight}
                            inputContainerStyle={styles.inputLogin}
                            leftIconContainerStyle={{ paddingHorizontal: 10 }}
                            errorMessage={user.length > 11 ? 'CPF inválido!' : ''}
                            leftIcon={
                                <Icon
                                    name='person-circle-sharp'
                                    size={30}
                                    color={COLORS.secundary}
                                />
                            } />
                        <Input placeholder="Senha"
                            onChangeText={(text) => { setPassword(text) }}
                            secureTextEntry={true}
                            inputContainerStyle={styles.inputLogin}
                            inputStyle={{ color: COLORS.secundary }}
                            placeholderTextColor={COLORS.grayLight}
                            leftIconContainerStyle={{ paddingHorizontal: 10 }}
                            errorMessage={errorMessage}
                            leftIcon={
                                <Icon
                                    name='key-outline'
                                    size={30}
                                    color={COLORS.secundary}
                                />
                            } />
                        <Button
                            title="LOGIN"
                            buttonStyle={styles.buttonLogin}
                            containerStyle={{
                                width: '100%',
                                marginVertical: 10,
                                paddingTop: 15,
                            }}
                            titleStyle={{ color: COLORS.secundary, fontSize: 20, fontFamily: FONTS.bold }}
                            onPress={login}
                            iconPosition="right"
                            icon={<Icon
                                name='ios-enter'
                                size={30}
                                color={COLORS.secundary}
                            />}
                        />
                        <TouchableOpacity style={styles.esqueciMinhasenha} onPress={forgot_password}>
                            <Text style={styles.EsqueciMinhaSenhaText}>Esqueci minha senha</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingTop: 100 }}>
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