import { COLORS } from "../../themes/colors";
import { FONTS } from "../../themes/fonts";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create(
  {
    Container: {
      flex: 1,
      height: '100%'
    },
    ContainerLogin: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    ContainerForm: {
      width: '90%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    LogoiVitalize: {
      width: '80%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      marginVertical: 20,
    },
    textCopyright: {
      color: COLORS.secundary,
      fontSize: 14,
      fontFamily: FONTS.regular
    },
    EsqueciMinhaSenhaText: {
      fontFamily: FONTS.regular,
      fontSize: 18,
      color: COLORS.secundary
    },
    esqueciMinhasenha: {
      width: '97%',
      alignItems: 'flex-start',
      paddingTop: 10
    },
    buttonLogin: {
      backgroundColor: 'black',
      borderWidth: 2,
      borderColor: COLORS.primary,
      borderRadius: 15,
      padding: 10,
      gap: 5
    },
    inputLogin: {
      backgroundColor: 'rgba(255, 255, 255, 0.2)', borderColor: COLORS.secundary, borderTopLeftRadius: 15,
      borderTopRightRadius: 15
    }
  }
)

export default styles;