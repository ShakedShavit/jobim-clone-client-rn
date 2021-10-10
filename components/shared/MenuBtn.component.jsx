import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function MenuBtn({ navigation }) {
    return (
        <TouchableOpacity
            activeOpacity={1}
            style={{ height: 23, width: 30, marginLeft: 10 }}
            onPress={() => navigation.toggleDrawer()}
        >
            <Image
                source={require("../../icons/btn_menu_normal.png")}
                style={styles.img}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    img: {
        width: "100%",
        height: "100%",
        resizeMode: "stretch",
    },
});
