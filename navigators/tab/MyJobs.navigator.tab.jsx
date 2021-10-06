import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

export default MyJobsNavigator = createMaterialTopTabNavigator({
    Favorites: {
        screen: FavoritesScreen,
    },
    Contacted: {
        screen: ContactedScreen,
    },
});
