import { ImageBackground, Animated, Image, View } from "react-native";
import { LOGO_IVITALIZE, IMAGE_SPLASH_SCREEN } from "../../themes/images";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { ContainerLoading, ContainerLogo, ContainerSplash, Logo, Logo2 } from "./style";
import { useEffect, useState } from "react";
import LoadingSplash from "../../components/loading/loadingSplash/loadingSplash";
import { api_get } from "../../assets/functions/requisicoes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { KEY_LOGIN_ASYNCSTORAGE } from "../../assets/functions/keys";


const SplashScreen = () => {
    const { reset, navigate } = useNavigation<NavigationProp<ParamListBase>>();

    const [serviceOn, setServiceOn] = useState<boolean>(false);
    const [logged, setLogged] = useState({});


    const translateXValue = new Animated.Value(500);

    const startAnimation = () => {
        Animated.timing(translateXValue, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };

    async function verificaLogin() {
        const logado = await AsyncStorage.getItem(KEY_LOGIN_ASYNCSTORAGE);

        setLogged(logado);
    }

    async function verificaDisponibilidadeServico() {
        try {
            const response = await api_get('https://ivitalize-api.onrender.com/api/v1/students/');

            if (response.status == true) {
                setServiceOn(true);
            }
            else {
                console.log('ERRO:: NÃO FOI POSSÍVEL CONECTAR À API.')
            }

        } catch (error) {
            console.error('Erro durante a splash:', error);
        }
    }

    useEffect(() => {
        verificaLogin();
        startAnimation();
        verificaDisponibilidadeServico(); // ao carregar a pagina ele verifica se a API ta on, se não ele não exibe o login
    }, []);

    if (serviceOn == true) { // aqui faz a verificação se o serviço está disponível, se estiver ele encaminha para o login.
        setServiceOn(false);

        setTimeout(() => {

            if (logged) {
                reset({
                    index: 0,
                    routes: [{ name: 'Home' }]
                });
            } else {
                navigate('Login');
            }
        }, 2500);
    }


    return (
        <ImageBackground source={IMAGE_SPLASH_SCREEN} blurRadius={5}>
            <ContainerSplash>
                <ContainerLogo>
                    <Animated.View
                        style={{
                            transform: [{ translateX: translateXValue }],
                        }}
                    >
                        <Image source={LOGO_IVITALIZE} resizeMode="contain" style={{ width: 300, height: 200 }} />
                    </Animated.View>
                </ContainerLogo>
                <ContainerLoading >
                    {!serviceOn &&
                        <LoadingSplash size={50} />
                    }
                </ContainerLoading>
            </ContainerSplash>
        </ImageBackground>
    )
}

export default SplashScreen;