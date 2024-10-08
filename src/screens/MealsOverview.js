import { View, FlatList, StyleSheet } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useRoute } from "@react-navigation/native";
import MealItem from "../components/MealsList/MealItem";
import { useEffect, useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

const MealsOverview = ({ route, navigation }) => { //just like we can get navigate, we can get route. see docs
    // const route = useRoute(); // if needed in a nested component
    const catId = route.params.categoryId;
    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0 // this line basically translates to return true (and displays the ones with and idex >= 0) if index of catid >= 0. because if there was no catid, the index would have been -1
    })

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title

        navigation.setOptions({
            title: categoryTitle
        });
    }, [catId, navigation])

    // function pressHandler() {
    //     navigation.navigate('MealsDetails', { 
    //         categoryId: catId
    //     })
    // }

    return <MealsList items={displayedMeals}></MealsList>
}

export default MealsOverview;
