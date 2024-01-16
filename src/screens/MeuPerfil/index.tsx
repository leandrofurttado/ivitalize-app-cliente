import { ImageBackground, Image, View, Text, ScrollView, StyleSheet, TouchableOpacity, Platform, FlatList } from "react-native";
import { FUNDO_LOGIN, ICON_PADRAO, IMAGE_CARD1, IMAGE_CARD2, IMAGE_CARD3, IMAGE_CARD4, IMAGE_CARD5, LOGO_IVITALIZE } from "../../themes/images";
import styles from "./style";
import { sizeParse } from "../../assets/functions/functions";
import { FontAwesome } from '@expo/vector-icons';
import { COLORS } from "../../themes/colors";
import { useState } from "react";


const MeuPerfil = () => {

    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
        setSearch(search);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.containerView}>


            </View>
        </ScrollView>
    );
};

export default MeuPerfil;
