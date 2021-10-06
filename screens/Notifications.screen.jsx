import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Separator from "../components/shared/Separator.component";

export default function NotificationsScreen() {
    return (
        <View>
            <View style={styles.notificationContainer}>
                <Text style={styles.notificationText}>
                    היי אנחנו מזמינים אותך להירשם ך drushim.il ולגלות אלפי משרות
                    ממגוון עצום של תפקידים המתאימים בדיוק לך
                </Text>
            </View>
            <Separator style={{ width: "100%", padding: 1 }} />
        </View>
    );
}

const styles = StyleSheet.create({
    notificationContainer: {
        width: "85%",
        alignSelf: "flex-end",
        paddingRight: 15,
    },
    notificationText: { textAlign: "right", fontSize: 16 },
});
