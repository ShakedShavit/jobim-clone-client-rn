import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function AvatarImg() {
    return (
        <View style={styles.avatarImgContainer}>
            <Image
                style={styles.avatarImg}
                source={require("../../icons/icon_signup_name.png")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    avatarImgContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        borderRadius: 50,
        borderColor: "black",
        borderWidth: 2,
        borderStyle: "dotted",
        width: 100,
        height: 100,
        alignSelf: "center",
    },
    avatarImg: {
        tintColor: "black",
    },
});
