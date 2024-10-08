import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text } from 'react-native';
import CategoriesScreen from './src/screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from "@react-navigation/drawer"
import MealsOverview from './src/screens/MealsOverview';
import MealsDetails from './src/screens/MealsDetails';
import FavouritesScreen from './src/screens/FavouritesScreen';
import { Ionicons } from '@expo/vector-icons'
import FavouritesContextProvider from './src/store/context/favourites-context';
import { Provider } from 'react-redux';
import { store } from './src/store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
// expo install @react-navigation/native-stack

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={
        {
          headerStyle: { backgroundColor: "#000" },
          headerTintColor: "beige",
          headerTitleStyle: { fontSize: 18 },
          sceneContainerStyle: { backgroundColor: "#020d19" },
          // drawerActiveBackgroundColor: "#020d19",
          // drawerActiveTintColor: "#f0e1ff",   
          drawerStyle: { backgroundColor: "#020d19", },
          drawerLabelStyle: { color: "beige" },
        }
      }>
      <Drawer.Screen name='categories' component={CategoriesScreen} options={{ title: "All Categories", drawerIcon: ({ color, size }) => <Ionicons name='list' color="beige" size={size}></Ionicons> }} />
      <Drawer.Screen name='favourites' component={FavouritesScreen} options={{ title: "Favourites", drawerIcon: ({ color, size }) => <Ionicons name='star' color="beige" size={size}></Ionicons> }} />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style='light'></StatusBar>

      {/* <FavouritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>

          <Stack.Navigator
            initialRouteName='MealsCategories'
            screenOptions={
              {
                headerStyle: { backgroundColor: "#000" },
                headerTintColor: "beige",
                headerTitleStyle: {
                  fontSize: 18
                },
                contentStyle: {
                  backgroundColor: "#020d19"
                }
              }
            }>

            <Stack.Screen
              name='MealsCategories'
              // component={CategoriesScreen}
              component={DrawerNavigator}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name='MealsOverview'
              component={MealsOverview}
            // options={({ navigation, route }) => {
            //   const catId = route.params.categoryId;
            //   return (
            //     {
            //       title: catId
            //     }
            //   )
            // }}
            />
            <Stack.Screen
              name='MealsDetails'
              component={MealsDetails}
            // options={{
            //   // headerRight: () => <Button title='Tap me!' color="red"/> ,
            //   title: "How To Cook",
            // }}
            />

          </Stack.Navigator>

        </NavigationContainer>
      </Provider>
      {/* </FavouritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
});
