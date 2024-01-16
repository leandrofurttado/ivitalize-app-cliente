import { ImageBackground, Image, View, Text, ScrollView, TouchableOpacity, FlatList } from "react-native";
import { ICON_PADRAO, IMAGE_CARD1, IMAGE_CARD2, IMAGE_CARD3, IMAGE_CARD4, IMAGE_CARD5 } from "../../themes/images";
import styles from "./style";
import { sizeParse } from "../../assets/functions/functions";
import { FontAwesome } from '@expo/vector-icons';
import { COLORS } from "../../themes/colors";
import { useState } from "react";
import { SearchBar } from '@rneui/themed';
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";

const CardsInfos = ({ title, description, backgroundImage }) => {
    return (
        <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>{title}</Text>
            <ImageBackground style={styles.cardBackground} source={backgroundImage}>
                <Text style={styles.cardDescription}>{description}</Text>
            </ImageBackground>
        </View>
    );
};

const Home = () => {

    const { reset, navigate } = useNavigation<NavigationProp<ParamListBase>>();
    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
        setSearch(search);
    };

    const handleMeuPerfil = () => {
        navigate('MeuPerfil');
    };



    const data = [
        { id: '1', title: 'Meus exercícios', description: 'Clique para ver', backgroundCard: IMAGE_CARD1 },
        { id: '2', title: 'Programação Semanal', description: 'Clique para ver', backgroundCard: IMAGE_CARD2 },
        { id: '3', title: 'Dieta Programada', description: 'Clique para ver', backgroundCard: IMAGE_CARD3 },
        { id: '4', title: 'Recursos de Ajuda', description: '', backgroundCard: IMAGE_CARD4 },
        { id: '5', title: 'Meu Perfil', description: '', backgroundCard: IMAGE_CARD5 },
    ];

    const navigateToScreen = (id) => {
        switch (id) {
            case '1':
                navigate('Screen1');
                break;
            case '2':
                navigate('Screen2');
                break;
            case '3':
                navigate('Screen3');
                break;
            case '4':
                navigate('Screen4');
                break;
            case '5':
                navigate('MeuPerfil');
                break;
            default:
                break;
        }
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
                    <TouchableOpacity style={{ width: sizeParse(60), height: sizeParse(60), alignItems: 'center', borderRadius: sizeParse(100), justifyContent: 'center', borderWidth: 1, borderColor: COLORS.primary }}>
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
                            borderRadius: 20,

                        }}
                        inputContainerStyle={{
                            backgroundColor: '#e1e1e1',
                            borderRadius: 20,
                            borderWidth: 2,
                            borderColor: COLORS.primary,
                            borderBottomWidth: 2,
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
                    <Text style={styles.text}>Suas atividades:</Text>
                    <FlatList
                        data={data}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => navigateToScreen(item.id)}>
                                <CardsInfos title={item.title} description={item.description} backgroundImage={item.backgroundCard} />
                            </TouchableOpacity>
                        )}
                    />

                </View>
                <View style={styles.contentContainer3}>
                    <Text style={styles.text}></Text>
                </View>
                <View style={styles.contentContainer4}>
                    <Text style={styles.text}></Text>
                </View>

            </View>
        </ScrollView>
    );
};

export default Home;
