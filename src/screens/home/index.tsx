import { ImageBackground, Image, View, Text, ScrollView, StyleSheet, TouchableOpacity, Platform } from "react-native";
import { FUNDO_LOGIN, ICON_PADRAO, LOGO_IVITALIZE } from "../../themes/images";
import styles from "./style";
import { sizeParse } from "../../assets/functions/functions";
import { FontAwesome } from '@expo/vector-icons';
import { COLORS } from "../../themes/colors";
import { useState } from "react";
import { SearchBar } from '@rneui/themed';



const Home = () => {

    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
        setSearch(search);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.containerView}>
                <View style={styles.contentContainer1}>
                    <View style={{ width: sizeParse(70), height: sizeParse(70), backgroundColor: 'white', alignItems: 'center', borderRadius: sizeParse(100) }}>
                        <Image
                            source={ICON_PADRAO}
                            resizeMode="contain"
                            style={styles.imgPerfil}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.textRegular}>Boa noite, <Text style={styles.text}>Leandro!</Text></Text>
                        <Text style={styles.textMotivation}>Just Do It! Come On!</Text>
                    </View>
                    <TouchableOpacity style={{ width: sizeParse(60), height: sizeParse(60), alignItems: 'center', borderRadius: sizeParse(100), justifyContent: 'center' }}>
                        <FontAwesome name="bell" size={24} color={COLORS.primary} />
                    </TouchableOpacity>
                </View>

                <View style={styles.view}>
                    <SearchBar
                        placeholder="O que você procura?"
                        onChangeText={updateSearch}
                        value={search}
                        containerStyle={{
                            backgroundColor: 'transparent',
                            borderBottomColor: 'transparent',
                            borderTopColor: 'transparent',
                            borderRadius: 20

                        }}
                        inputContainerStyle={{
                            backgroundColor: '#e1e1e1',
                            borderRadius: 20

                        }}
                        inputStyle={{
                            color: 'black',
                        }}
                        placeholderTextColor="#888"
                        searchIcon={{
                            color: 'black',
                        }}
                    />
                </View>

                <View style={styles.contentContainer2}>
                    <Text style={styles.text}>HELLO WORLD! (HOME)</Text>
                </View>
                <View style={styles.contentContainer3}>
                    <Text style={styles.text}>HELLO WORLD! (HOME)</Text>
                </View>
                <View style={styles.contentContainer4}>
                    <Text style={styles.text}>HELLO WORLD! (HOME)</Text>
                </View>

            </View>
        </ScrollView>
    );
};

export default Home;
