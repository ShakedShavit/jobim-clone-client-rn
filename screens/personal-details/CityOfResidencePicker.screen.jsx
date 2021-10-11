import React, { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import PersonalDetailsScreenLayout from "./PersonalDetailsScreenLayout.screen";
import citiesArray from "../../data/citiesArray.json";
import Dropdown from "../../components/shared/Dropdown.component";

export default function CityOfResidencePicker() {
    const [chosenCity, setChosenCity] = useState("");
    const [cityInputText, setCityInputText] = useState("");

    const onCityInputChange = (text) => {
        setChosenCity("");

        text = text.replace(/\s+/g, " ");
        setCityInputText(text);
    };

    const cancelInput = () => {
        setCityInputText("");
        setChosenCity("");
    };

    return (
        <PersonalDetailsScreenLayout>
            <Text style={styles.topText}>עיר המגורים שלך</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.cityInput}
                    placeholder="עיר מגורים"
                    onChangeText={onCityInputChange}
                    value={!!chosenCity ? chosenCity : cityInputText}
                ></TextInput>
                {cityInputText.trim() !== "" && (
                    <TouchableOpacity
                        activeOpacity={1}
                        style={styles.deleteBtn}
                        onPress={cancelInput}
                    >
                        <Text style={styles.deleteBtnText}>X</Text>
                    </TouchableOpacity>
                )}

                <Dropdown
                    optionsArr={citiesArray}
                    setChosenOption={setChosenCity}
                    inputVal={cityInputText}
                />
            </View>
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
    inputContainer: {
        width: "100%",
        position: "relative",
    },
    cityInput: {
        backgroundColor: colors.lightGray,
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 5,
        color: colors.orange,
        fontSize: 17,
        textAlign: "center",
        marginTop: 20,
    },
    deleteBtn: {
        position: "absolute",
        right: 10,
        top: "50%",
        backgroundColor: colors.orange,
        borderRadius: 50,
        color: "white",
    },
    deleteBtnText: {
        marginHorizontal: 5,
        marginVertical: 0.7,
        color: "white",
        fontWeight: "bold",
        fontSize: 12,
    },
});
