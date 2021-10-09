import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../../constants/Colors";

export default function Separator({ style }) {
    return <View style={{ ...styles.separator, ...style }}></View>;
}

const styles = StyleSheet.create({
    separator: {
        width: "90%",
        borderColor: colors.gray,
        borderBottomWidth: 0.6,
    },
});
