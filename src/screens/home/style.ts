import { sizeParse } from "../../assets/functions/functions";
import { COLORS } from "../../themes/colors";
import { FONTS } from "../../themes/fonts";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
    },
    containerView: {
      flex: 1,
      width: '100%',
      height: '100%',
      backgroundColor: COLORS.gray_vitalize,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: sizeParse(20)
    },
    contentContainer1: {
      flex: 1,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: sizeParse(10),
    },
    contentContainer2: {
      flex: 1,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: sizeParse(15)
    },
    contentContainer3: {
      flex: 1,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: sizeParse(15)
    },
    contentContainer4: {
      flex: 1,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: sizeParse(15)
    },
    contentContainer5: {
      flex: 1,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: sizeParse(15)
    },
    text: {
      fontFamily: FONTS.bold,
      color: COLORS.white
    },
    textRegular: {
      fontFamily: FONTS.regular,
      color: COLORS.white
    },
    textMotivation: {
      fontFamily: FONTS.bold,
      color: COLORS.primary,
      fontSize: sizeParse(20)
    },
    imgPerfil: {
      flex: 1,
      width: sizeParse(100),
      height: sizeParse(100),
      borderRadius: sizeParse(100) 
    }
  }
)

export default styles;