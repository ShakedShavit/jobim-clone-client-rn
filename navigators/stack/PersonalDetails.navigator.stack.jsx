import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/core";
import {
    CardStyleInterpolators,
    createStackNavigator,
} from "@react-navigation/stack";
import PersonalDetailsScreen from "../../screens/personal-details/PersonalDetails.screen";
import NameAndAvatarScreen from "../../screens/personal-details/NameAndAvatar.screen";
import CityOfResidencePickerScreen from "../../screens/personal-details/CityOfResidencePicker.screen";
import YearOfBirthPickerScreen from "../../screens/personal-details/YearOfBirthPicker.screen";
import EmailPickerScreen from "../../screens/personal-details/EmailPicker.screen";
import HeaderRightBtn from "../../components/shared/HeaderRightBtn.component";
import MenuBtn from "../../components/shared/MenuBtn.component";

export const personalDetailsScreenOptions = (navigation, route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "main";

    return {
        headerRight: () => {
            if (routeName === "main")
                return <HeaderRightBtn btnText={"הגדרות"} />;
            return <HeaderRightBtn btnText={"שמור"} />;
        },
        headerLeft: () => {
            if (routeName === "main")
                return <MenuBtn navigation={navigation} />;
            return (
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => navigation.goBack()}
                    style={{ width: 13, height: 18, margin: 15 }}
                >
                    <Image
                        source={require("../../icons/btn_arrow_normal.png")}
                        style={styles.btnImg}
                    />
                </TouchableOpacity>
            );
        },
        title: getHeaderTitle(routeName),
        cardStyleInterpolator:
            CardStyleInterpolators.forRevealFromBottomAndroid,
    };
};

const getHeaderTitle = (routeName) => {
    switch (routeName) {
        case "nameAndAvatar":
            return "עריכת שם ותמונה";
        case "cityOfResidence":
            return "עריכת עיר מגורים";
        case "yearOfBirth":
            return "עריכת שנת לידה";
        case "email":
            return "עריכת כתובת מייל";
        default:
            return "הפרטים שלי";
    }
};

const Stack = createStackNavigator();

export default PersonalDetailsNavigator = ({ route }) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyleInterpolator:
                    CardStyleInterpolators.forRevealFromBottomAndroid,
            }}
        >
            <Stack.Screen
                name="main"
                component={PersonalDetailsScreen}
            ></Stack.Screen>
            <Stack.Screen
                name="nameAndAvatar"
                component={NameAndAvatarScreen}
            ></Stack.Screen>
            <Stack.Screen
                name="cityOfResidence"
                component={CityOfResidencePickerScreen}
            ></Stack.Screen>
            <Stack.Screen
                name="yearOfBirth"
                component={YearOfBirthPickerScreen}
            ></Stack.Screen>
            <Stack.Screen
                name="email"
                component={EmailPickerScreen}
            ></Stack.Screen>
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    btnImg: {
        width: "100%",
        height: "100%",
        resizeMode: "stretch",
    },
});
