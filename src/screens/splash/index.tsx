import { ImageBackground, Animated, Image, View } from "react-native";
import { LOGO_IVITALIZE, IMAGE_SPLASH_SCREEN } from "../../themes/images";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { ContainerLoading, ContainerLogo, ContainerSplash, Logo, Logo2 } from "./style";
import { useEffect, useState } from "react";
import LoadingSplash from "../../components/loading/loadingSplash/loadingSplash";


const SplashScreen = () => {
    const { reset, navigate } = useNavigation<NavigationProp<ParamListBase>>();

    const [serviceOn, setServiceOn] = useState<boolean>(true)


    const translateXValue = new Animated.Value(500);

    const startAnimation = () => {
        Animated.timing(translateXValue, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };

    /*     async function verificaDisponibilidadeServico() {
            const response = await fetch('https://futcardsbrasil.000webhostapp.com/usuarios/', {
                method: 'GET',
            }).catch(() => {
            }
            )
    
            //Verificação da requisição SUCESSO OU NAO
            if (!!response) {
                const data: LoginReturnTypes = await response.json();
    
                if (!!data['mensagem']) {
                    setServiceOn(true);
                }
                else {
                    console.log('VERIFICAR HOST /USUARIOS')
                }
    
            }
        } */

    useEffect(() => {
        startAnimation();

        //verificaDisponibilidadeServico(); // ao carregar a pagina ele verifica se a API ta on, se não ele não exibe o login

    }, []);

    if (serviceOn == true) { // aqui faz a verificação se o serviço está disponível, se estiver ele encaminha para o login.
        setServiceOn(false);

        setTimeout(() => {
            reset({
                index: 0,
                routes: [{ name: 'Login' }]
            });
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
                        <LoadingSplash size={30} />
                    }
                </ContainerLoading>
            </ContainerSplash>
        </ImageBackground>
    )
}

export default SplashScreen;