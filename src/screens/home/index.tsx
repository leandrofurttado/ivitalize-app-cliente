import { ImageBackground, Image, View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { FUNDO_LOGIN, ICON_PADRAO, LOGO_IVITALIZE } from "../../themes/images";
import styles from "./style";
import { sizeParse } from "../../assets/functions/functions";
import { FontAwesome } from '@expo/vector-icons'; 
import { COLORS } from "../../themes/colors";



const Home = () => {
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
