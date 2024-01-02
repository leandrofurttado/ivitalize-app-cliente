import { ImageBackground, Image, View, Text, ScrollView } from "react-native";
import { FUNDO_LOGIN, LOGO_IVITALIZE } from "../../themes/images";
import styles from "./style";


const Home = () => {

    return (
        <ImageBackground style={styles.Container} source={FUNDO_LOGIN} blurRadius={4}>
            <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
                <Text style={{color: 'white', fontSize: 60}}>HELLO WORLD! (HOME)</Text>
            </View>
        </ImageBackground>
    )
}

export default Home;