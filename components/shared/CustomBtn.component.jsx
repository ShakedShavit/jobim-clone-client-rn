import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CustomBtn({ style }) {
    return (
        <TouchableOpacity styles={{ ...styles.button, ...style }}>
            <Text></Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({ button: {} });
