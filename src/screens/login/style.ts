import { COLORS } from "../../themes/colors";
import { FONTS } from "../../themes/fonts";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create(
  {
    Container: {
      flex: 1,
    },
    ContainerLogin: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    ContainerForm: {
      width: '90%',
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
  }
)

export default styles;