import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import AvatarImg from "../../components/personal-details/AvatarImg.component";
import DetailPicker from "../../components/personal-details/DetailPicker.component";
import avatarIcon from "../../icons/icon_signup_name.png";
import PersonalDetailsScreenLayout from "./PersonalDetailsScreenLayout.screen";

export default function PersonalDetailsScreen({ navigation, route }) {
    const userState = useSelector((state) => state.user);

    return (
        <PersonalDetailsScreenLayout>
            <AvatarImg />
            <View style={styles.detailPickersContainer}>
                <DetailPicker
                    imgSrc={avatarIcon}
                    detail={
                        !!userState.firstName || !!userState.lastName
                            ? userState.firstName + " " + userState.lastName
                            : "אורח/ת"
                    }
                    navigation={navigation}
                    screenName={"nameAndAvatar"}
                />

                <DetailPicker
                    imgSrc={require("../../icons/icon_signup_city.png")}
                    detail={userState.cityOfResidence ?? ""}
                    navigation={navigation}
                    screenName={"cityOfResidence"}
                />

                <DetailPicker
                    imgSrc={require("../../icons/icon_signup_year.png")}
                    detail={userState.yearOfBirth ?? ""}
                    navigation={navigation}
                    screenName={"yearOfBirth"}
                />

                <DetailPicker
                    imgSrc={require("../../icons/icon_signup_email.png")}
                    detail={userState.email ?? ""}
                    navigation={navigation}
                    screenName={"email"}
                />
            </View>
        </PersonalDetailsScreenLayout>
    );
}

const styles = StyleSheet.create({ detailPickersContainer: { width: "100%" } });
