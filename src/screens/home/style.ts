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
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
      gap: sizeParse(10),
      paddingBottom: sizeParse(15),
    },
    contentContainer2: {
      width: '100%',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      gap: sizeParse(10)
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
      color: COLORS.primary
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
    },
    view: {
      width: '100%',
      paddingBottom: sizeParse(15)
    },
    cardContainer: {
      width: sizeParse(220),
      height: sizeParse(220),
      marginHorizontal: 10,
      alignItems: 'center',
      backgroundColor: COLORS.grayLight,
      borderRadius: sizeParse(15),
      borderBottomLeftRadius: sizeParse(15),
      borderBottomRightRadius: sizeParse(15),
      overflow: 'hidden',
    },
    cardTitle: {
      fontSize: 15,
      fontFamily: FONTS.bold,
      color: COLORS.gray_vitalize
    },
    cardDescription: {
      fontSize: 13,
      fontFamily: FONTS.regular,
      color: COLORS.white,
    },
    cardBackground: {
      width: '100%',
      height: '100%',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      borderBottomLeftRadius: sizeParse(15),
      borderBottomRightRadius: sizeParse(15),
    },
  }
)

export default styles;