import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import NotificationsScreen from "../../screens/Notifications.screen";
import MyJobsScreen from "../../screens/MyJobs.screen";
import FindJobsScreen from "../../screens/FindJobs.screen";
import NewJobPostScreen from "../../screens/NewJobPost.screen";
import colors from "../../constants/Colors";
import DrawerContent from "../../components/DrawerContent.component";
import { useDispatch } from "react-redux";
import { _retrieveUserData } from "../../asyncStorage";
import { signInAction } from "../../redux/store/actions/user.action";
import { Button, Text } from "react-native";
import PersonalDetailsNavigatorStack, {
    personalDetailsScreenOptions,
} from "../stack/PersonalDetails.navigator.stack";

const Drawer = createDrawerNavigator();

const defaultScreenOptions = () => ({
    headerStyle: {
        backgroundColor: colors.orange,
    },
    headerTintColor: "white",
    title: "Centered",
    headerTitleAlign: "center",
    drawerStyle: {
        backgroundColor: "#eee",
        width: "85%",
    },
    drawerPosition: "right",
    drawerInactiveBackgroundColor: "transparent",
});

export default MainNavigator = ({ navigation }) => {
    const dispatch = useDispatch();

    // Get user details from async storage and sign in
    useEffect(() => {
        const getUserData = async () => {
            const user = await _retrieveUserData();
            if (!user) return;
            dispatch(signInAction({ ...user }));
        };

        getUserData();
        return () => {};
    }, []);

    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={(props) => <DrawerContent {...props} />}
                initialRouteName="FindJobs"
                screenOptions={defaultScreenOptions}
            >
                <Drawer.Screen
                    name="PersonalDetails"
                    component={PersonalDetailsNavigatorStack}
                    options={({ navigation, route }) => ({
                        title: "הפרטים שלי",
                        ...personalDetailsScreenOptions(navigation, route),
                    })}
                />
                <Drawer.Screen
                    name="Notifications"
                    component={NotificationsScreen}
                    options={({ navigation }) => ({
                        title: "התראות",
                    })}
                />
                <Drawer.Screen
                    name="MyJobs"
                    component={MyJobsScreen}
                    options={({ navigation }) => ({
                        title: "הג'ובים שלי",
                    })}
                />
                <Drawer.Screen
                    name="FindJobs"
                    component={FindJobsScreen}
                    options={({ navigation }) => ({
                        title: "JOBIM",
                    })}
                />
                <Drawer.Screen
                    name="NewJobPost"
                    component={NewJobPostScreen}
                    options={({ navigation, route }) => ({
                        title: "פרסם ג'וב חדש",
                    })}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};
