import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import AvatarImg from "../../components/personal-details/AvatarImg.component";
import colors from "../../constants/Colors";
import PersonalDetailsScreenLayout from "./PersonalDetailsScreenLayout.screen";

export default function NameAndAvatar() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [firstNameInputFocusStyle, setFirstNameInputFocusStyle] =
        useState("");
    const [lastNameInputFocusStyle, setLastNameInputFocusStyle] = useState("");

    const inputFocusStyle = { borderWidth: 1, borderColor: colors.orange };

    return (
        <PersonalDetailsScreenLayout>
            <Text style={styles.topText}>
                אנא מלאו את הפרטים הבאים כדי ליצור קשר עם המעסיק
            </Text>
            <AvatarImg />
            <Text style={styles.topText}>הסלפי שלי</Text>

            <View style={styles.nameInputsContainer}>
                <TextInput
                    style={{
                        ...styles.nameInput,
                        ...firstNameInputFocusStyle,
                    }}
                    placeholder="שם פרטי"
                    onChangeText={(text) => {
                        setFirstName(text);
                    }}
                    value={firstName}
                    onFocus={() => {
                        setFirstNameInputFocusStyle(inputFocusStyle);
                    }}
                    onBlur={() => {
                        setFirstNameInputFocusStyle("");
                    }}
                ></TextInput>
                <TextInput
                    style={{
                        ...styles.nameInput,
                        ...lastNameInputFocusStyle,
                    }}
                    placeholder="שם משפחה"
                    onChangeText={(text) => {
                        setLastName(text);
                    }}
                    value={lastName}
                    onFocus={() => {
                        setLastNameInputFocusStyle(inputFocusStyle);
                    }}
                    onBlur={() => {
                        setLastNameInputFocusStyle("");
                    }}
                ></TextInput>
            </View>
        </PersonalDetailsScreenLayout>
    );
}

const styles = StyleSheet.create({
    topText: { marginTop: 10 },
    nameInputsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginTop: 25,
    },
    nameInput: {
        backgroundColor: colors.lightGray,
        width: "48%",
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 5,
        color: colors.orange,
        fontSize: 17,
        textAlign: "center",
    },
});
