import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import PersonalDetailsScreenLayout from "./PersonalDetailsScreenLayout.screen";

export default function CityOfResidencePicker() {
    const [city, setCity] = useState("");
    const [cityInputText, setCityInputText] = useState("");

    const onCityInputChange = (text) => {
        setCityInputText(text);
        if (text.length < 2) return;
    };

    const cancelInput = () => {
        setCityInputText("");
        setCity("");
    };

    return (
        <PersonalDetailsScreenLayout>
            <Text style={styles.topText}>עיר המגורים שלך</Text>
            <TextInput
                style={styles.cityInput}
                placeholder="עיר מגורים"
                onChangeText={onCityInputChange}
                value={cityInputText}
                onFocus={() => {
                    setLastNameInputFocusStyle(inputFocusStyle);
                }}
                onBlur={() => {
                    setLastNameInputFocusStyle("");
                }}
            ></TextInput>
        </PersonalDetailsScreenLayout>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    topText: { marginTop: 10 },
    cityInput: {
        backgroundColor: colors.lightGray,
        width: "100%",
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 5,
        color: colors.orange,
        fontSize: 17,
        textAlign: "center",
        marginTop: 20,
    },
});
