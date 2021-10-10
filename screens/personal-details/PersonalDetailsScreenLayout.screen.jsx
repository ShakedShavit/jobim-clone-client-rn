import React from "react";
import {
    Image,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import windowDimensions from "../../components/utils/getWindowDimensions.utils";

export default function PersonalDetailsScreenLayout(props) {
    return (
        <View style={styles.screen}>
            <View style={styles.screenContent}>{props.children}</View>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <Image
                    source={require("../../icons/bkg_newjob_1.png")}
                    style={styles.img}
                    resizeMode="contain"
                />
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "space-between",
    },
    screenContent: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    img: {
        width: windowDimensions.width - 50,
        height: 200,
        resizeMode: "contain",
    },
});
