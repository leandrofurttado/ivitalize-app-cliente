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
      width: '100%',
      height: '100%',
      backgroundColor: COLORS.gray_vitalize,
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: sizeParse(30)
    },
    buttonLogin: {
      backgroundColor: 'black',
      borderWidth: 2,
      borderColor: COLORS.primary,
      borderRadius: 15,
      padding: 10,
      gap: 5
    },
  }
)

export default styles;