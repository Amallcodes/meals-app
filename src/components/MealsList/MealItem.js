import { View, Text, Pressable, StyleSheet, Image, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealsDetailCard from "../MealsDetailCard";

const MealItem = ({ id, title, imageUrl, duration, complexity, affordability, pressHandler }) => {
    const navigation = useNavigation();

    function pressHandler() {
        navigation.navigate('MealsDetails', {
            mealId: id
        })
    }

    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{ color: "#08080880" }}
                style={({ pressed }) => pressed && { opacity: 0.5 }}
                // style={({ pressed }) => (pressed && Platform.OS === "ios") && {opacity:0.5}}
                onPress={pressHandler}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image style={styles.image} source={{ uri: imageUrl }} />
                        <Text style={styles.title}>{title}</Text>
                    </View>

                    <MealsDetailCard duration={duration} complexity={complexity} affordability={affordability}/>
                </View>
            </Pressable>
        </View>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    innerContainer: {
        borderRadius: 8,
        overflow: "hidden"
    },
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: "hidden",
        backgroundColor: "#c0c0c083",
        elevation: 4,
        shadowColor: "#00000060",  //shadow on ios
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        // shadowOpacity: 0.25,
        overflow: Platform.OS === "android" ? "hidden" : "visible"
    },
    image: {
        width: "100%",
        height: 200
    },
    title: {
        textAlign: "center",
        margin: 8,
        color: 'beige'
    }
})