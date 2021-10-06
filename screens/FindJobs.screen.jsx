import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function FindJobScreen() {
    useEffect(() => {
        return () => {};
    }, []);

    return (
        <View style={styles.container}>
            <Text>FindJobs</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
