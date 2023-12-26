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
    }
  }
)

export default styles;