import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../../constants/Colors";

export default function DetailPicker({
    imgSrc,
    detail,
    navigation,
    screenName,
}) {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => {
                console.log("object");
                navigation.navigate(screenName);
            }}
        >
            <View style={styles.imgContainer}>
                <Image source={imgSrc} style={styles.img} />
            </View>
            <Text style={styles.detailText}>{detail}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightGray,
        marginTop: 10,
        marginBottom: 0,
        padding: 8,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row",
    },
    detailText: { fontSize: 17, color: colors.orange },
    imgContainer: { transform: [{ scale: 0.38 }] },
    img: { tintColor: "black" },
});
