import { StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors";

function Card({children}) {
    return <View style={styles.card}>{children}</View>

}

export default Card;

const styles = StyleSheet.create({
    card: {
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4,
        marginTop: 36,
        backgroundColor: Colors.primary800,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
      },
});