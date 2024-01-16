import { ImageBackground, Image, View, Text, ScrollView, StyleSheet, TouchableOpacity, Platform, FlatList } from "react-native";
import { FUNDO_LOGIN, ICON_PADRAO, IMAGE_CARD1, IMAGE_CARD2, IMAGE_CARD3, IMAGE_CARD4, IMAGE_CARD5, LOGO_IVITALIZE, PERFIL_PADRAO } from "../../themes/images";
import styles from "./style";
import { sizeParse } from "../../assets/functions/functions";
import { FontAwesome } from '@expo/vector-icons';
import { COLORS } from "../../themes/colors";
import { useState } from "react";
import { FONTS } from "../../themes/fonts";
import { Button } from "@rneui/themed";
import Icon from 'react-native-vector-icons/Ionicons';

const MeuPerfil = () => {

    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
        setSearch(search);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.containerView}>
                <View style={{ backgroundColor: COLORS.gray_vitalize, width: '100%', height: '45%', borderBottomRightRadius: sizeParse(70), borderBottomLeftRadius: sizeParse(70), alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={PERFIL_PADRAO} style={{ width: '100%', height: '100%', borderBottomRightRadius: sizeParse(70), borderBottomLeftRadius: sizeParse(70), alignItems: 'center', justifyContent: 'center' }} resizeMode="stretch" />
                </View>

                <View style={{ width: '100%', alignItems: 'center', padding: sizeParse(10) }}>
                    <Text style={{ color: COLORS.primary, fontFamily: FONTS.black, fontSize: 30 }}>
                        Leandro Furtado
                    </Text>
                </View>
                <View style={{ width: '100%', alignItems: 'flex-start', paddingHorizontal: sizeParse(20), gap: sizeParse(25) }}>
                    <Text style={{ color: COLORS.primary, fontFamily: FONTS.regular, fontSize: 20 }}>
                        Plano: <Text style={{ color: COLORS.white, fontFamily: FONTS.regular, fontSize: 18 }}>Diamond</Text>
                    </Text>
                    <Text style={{ color: COLORS.primary, fontFamily: FONTS.regular, fontSize: 20 }}>
                        Personal Alocado: <Text style={{ color: COLORS.white, fontFamily: FONTS.regular, fontSize: 18 }}>Ricardo Boca de Sapo</Text>
                    </Text>
                    <Text style={{ color: COLORS.primary, fontFamily: FONTS.regular, fontSize: 20 }}>
                        CPF: <Text style={{ color: COLORS.white, fontFamily: FONTS.regular, fontSize: 18 }}>019.655.676-73</Text>
                    </Text>

                    <Button
                        title="ALTERAR DADOS"
                        buttonStyle={styles.buttonLogin}
                        containerStyle={{
                            width: '100%',
                            marginVertical: 10,
                            paddingTop: 15,
                        }}
                        titleStyle={{ color: COLORS.secundary, fontSize: 20, fontFamily: FONTS.bold }}
                        iconPosition="right"
                    />
                </View>

            </View>
        </ScrollView>
    );
};

export default MeuPerfil;
