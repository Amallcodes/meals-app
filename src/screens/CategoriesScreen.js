// import { useNavigation } from "@react-navigation/native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data"
import { FlatList } from "react-native";

const CategoriesScreen = ({ navigation }) => {
//  const navigate = useNavigation() // has got you covered if you want to navigate from a component that is not the main screen. or you could just pass it as a prop

    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate('MealsOverview', { // secode object arguement sends values to other screen
                categoryId: itemData.item.id
            })
        }
    
        return <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onPress={ pressHandler } 
        />
    }

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        ></FlatList>
    );
}

export default CategoriesScreen;