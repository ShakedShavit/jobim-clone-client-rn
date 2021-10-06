import React from "react";
import { Image, StyleSheet, View } from "react-native";

export default MenuIcon = ({ color, img }) => {
    return (
        <View style={styles.icon}>
            <Image
                style={{ width: 35, height: 35, tintColor: color }}
                source={img}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    icon: {},
});
