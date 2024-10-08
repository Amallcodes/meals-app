import { View, Text, StyleSheet } from "react-native";

const MealsDetailCard = ({duration, complexity, affordability, style}) => {
    return (
        <View style={[styles.details, style]}>
            <Text style={styles.detailItem}>{duration}m</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
        </View>
    );
}

export default MealsDetailCard;

const styles = StyleSheet.create({
    details: {
        flexDirection: "row",
        alignItems: "center",
        padding: 8,
        justifyContent: 'center'
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
        color: 'beige'
    }
})