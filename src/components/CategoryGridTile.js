import { View, Pressable, Text, StyleSheet, Platform } from "react-native";

const CategoryGridTile = ({ title, color, onPress }) => {
    return (
        <View style={styles.gridItem}>
            <Pressable
                android_ripple={{ color: "#08080880" }}
                style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
                onPress={onPress}
                >
                <View style={[styles.innerContainer, { backgroundColor: color }]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        marginHorizontal: 8,
        marginVertical: 10,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: "white", // required for ios shadow
        shadowColor: "#00000060",  //shadow on ios
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        // shadowOpacity: 0.25,
        overflow: Platform.OS === "android" ? "hidden" : "visible"
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },
    title: {
        color: "#fff",
        fontWeight: "bold"
    }
})