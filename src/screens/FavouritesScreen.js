
import { Text } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { useContext } from "react";
import { FavouritesContext } from "../store/context/favourites-context";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

const FavouritesScreen = () => {
    // const favouriteMealsCtx = useContext(FavouritesContext);
    // const favouriteMeals = MEALS.filter((meal) => favouriteMealsCtx.ids.includes(meal.id));

    const favouriteMealsIds = useSelector((state) => state.favouriteMeals.ids);
    const favouriteMeals = MEALS.filter((meal) => favouriteMealsIds.includes(meal.id));
    // console.log(MEALS.filter((meal) => favouriteMealsCtx.ids.includes(meal.id)));

    if (favouriteMeals.length === 0) {
        return (
            <Text style={{ color: "#f0e1ff", fontSize: 18, textAlign: "center" }}>You Don't Have any favourites yet!</Text>
        )
    } else {
        return (
            <MealsList items={favouriteMeals}></MealsList>
        );
    }
}

export default FavouritesScreen;