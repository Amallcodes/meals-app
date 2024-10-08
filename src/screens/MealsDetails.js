import { View, Text, StyleSheet, Image, ScrollView, Button } from "react-native";
import { MEALS } from '../data/dummy-data';
import MealsDetailsCard from '../components/MealsDetailCard'
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/Button";
import { FavouritesContext } from "../store/context/favourites-context";
import { useSelector, useDispatch } from "react-redux";
import { favouriteAction } from "../store/redux/favourites";

const MealsDetails = ({ route, navigation }) => {
    // const favouriteMealsCtx = useContext(FavouritesContext);
    const favouriteMealIds = useSelector((state) => state.favouriteMeals.ids);
    const dispatch = useDispatch();
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    const mealIsFavourite = favouriteMealIds.includes(mealId);
    // console.log(mealIsFavourite);

    function favButtonHandler() {
        if (mealIsFavourite) {
            // favouriteMealsCtx.removeFavourite(mealId)
            dispatch(favouriteAction.removeFavourite({id: mealId}))
        } else {
            // favouriteMealsCtx.addFavourite(mealId)
            dispatch(favouriteAction.addFavourite({id: mealId}))
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <IconButton
                icon={mealIsFavourite ? 'star' : 'star-outline'}
                color="white"
                onPress={favButtonHandler}
            />,
            title: "How To Cook",
        })
    }, [navigation, favButtonHandler])


    return (
        <ScrollView style={styles.container}>
            <View style={styles.imageView}>
                <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            </View>

            <Text style={styles.title1}>{selectedMeal.title}</Text>
            <MealsDetailsCard duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability} style={styles.details} />

            <View style={styles.listView}>
                <View style={styles.textStyle}>
                    <Text style={styles.title}>Ingredients</Text>
                </View>

                {selectedMeal.ingredients.map((ingredient) => <View style={styles.textView}><Text style={styles.smallText} key={ingredient}>{ingredient}</Text></View>)}
            </View>


            <View style={styles.listView}>
                <View style={styles.textStyle}>
                    <Text style={styles.title}>Steps</Text>
                </View>
                {selectedMeal.steps.map((step) => <View style={styles.textView}><Text style={styles.smallText} key={step}>{step}</Text></View>)}
            </View>

        </ScrollView>
    );
}

export default MealsDetails;

const styles = StyleSheet.create({
    imageView: {
        borderRadius: 30,
        overflow: 'hidden',
        height: 300
    },
    image: {
        width: '100%',
        height: 300
    },
    container: {
        padding: 20,
    },
    title: {
        color: 'beige',
        fontSize: 18,
        marginBottom: 5,
        textAlign: 'center'
    },
    title1: {
        color: 'beige',
        fontSize: 20,
        marginTop: 20,
        marginBottom: 5,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    smallText: {
        color: 'beige',
        textAlign: 'center'
    },
    listView: {
        marginBottom: 20
    },
    textStyle: {
        borderBottomColor: '#f5f5dc67',
        borderBottomWidth: 1,
        marginBottom: 10
    },
    details: {
        marginBottom: 30
    },
    textView: {
        marginVertical: 5,
        backgroundColor: '#00363a8f',
        paddingVertical: 8,
        borderRadius: 5
    }
});