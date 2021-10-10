import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HeaderRightBtn({ btnText }) {
    return (
        <View>
            <Text style={styles.btnText}>{btnText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    btnText: { color: "white", fontWeight: "bold", marginRight: 10 },
});
