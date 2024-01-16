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
      justifyContent: 'space-between',
      paddingHorizontal: sizeParse(20)
    },
  }
)

export default styles;