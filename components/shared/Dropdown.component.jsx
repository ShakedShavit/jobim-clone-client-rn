import React, { useEffect, useRef, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableHighlight } from "react-native";
import colors from "../../constants/Colors";

export default function Dropdown({ optionsArr, setChosenOption, inputVal }) {
    const [suggestedOptions, setSuggestedOptions] = useState([]);
    const prevInputValRef = useRef("");

    useEffect(() => {
        inputVal.replace(/\s+/g, " ");

        if (inputVal.length < 2) return setSuggestedOptions([]);

        const prevInputVal = prevInputValRef.current;

        if (
            // If a letter was added to the input (rather than removed or modified), than filter the previously filtered array instead of the complete one
            suggestedOptions.length !== 0 &&
            inputVal.substring(0, prevInputVal.length) === prevInputVal
        )
            setSuggestedOptions(
                getSuggestedOptions(suggestedOptions, inputVal)
            );
        else setSuggestedOptions(getSuggestedOptions(optionsArr, inputVal));

        prevInputValRef.current = inputVal;
    }, [inputVal, optionsArr]);

    const getSuggestedOptions = (optionsArr, textInput) =>
        optionsArr.filter(
            (elStr) => elStr.substring(0, textInput.length) === textInput
        );

    const onChoseOption = (option) => {
        setChosenOption(option);
        setSuggestedOptions([]);
    };

    return (
        <ScrollView style={styles.container}>
            {suggestedOptions.map((option) => {
                return (
                    <TouchableHighlight
                        key={option}
                        onPress={() => {
                            onChoseOption(option);
                        }}
                        underlayColor={colors.lightGray}
                    >
                        <Text style={styles.suggestedOptionText}>{option}</Text>
                    </TouchableHighlight>
                );
            })}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        height: 200,
        right: 0,
        top: "100%",
        flexDirection: "column",
        width: "100%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        elevation: 24,
        padding: 10,
    },
    suggestedOptionText: {
        color: colors.orange,
        paddingHorizontal: 5,
        paddingVertical: 15,
        fontSize: 15,
    },
});
