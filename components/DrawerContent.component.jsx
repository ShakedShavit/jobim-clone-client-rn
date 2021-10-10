import React, { useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import colors from "../constants/Colors";
import MenuIcon from "./MenuIcon.component";
import { useSelector } from "react-redux";
import Separator from "./shared/Separator.component";
import windowDimensions from "./utils/getWindowDimensions.utils";

export default function DrawerContent(props) {
    const userState = useSelector((state) => state.user);

    // When the route (the screen) changes
    useEffect(() => {
        const state = props.state;
        console.log(state.routeNames[state.index]); // This is he current route name

        return () => {};
    }, [props.state.routeNames[props.state.index]]);

    return (
        <>
            <DrawerContentScrollView {...props} style={{ paddingTop: 25 }}>
                <View style={styles.drawerTopSection}>
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate("PersonalDetails");
                        }}
                    >
                        <Image
                            style={{ width: 30, height: 30 }}
                            source={require("../icons/icon_menu_pic_placeholder.png")}
                        />
                    </TouchableOpacity>

                    <Text style={{ marginTop: 20, marginBottom: 5 }}>
                        {!!userState.firstName || !!userState.lastName
                            ? userState.firstName + " " + userState.lastName
                            : "אורח/ת"}
                    </Text>
                </View>

                <DrawerItem
                    icon={() => (
                        <MenuIcon
                            color="black"
                            img={require("../icons/icon_menu_my_jobs.png")}
                        />
                    )}
                    onPress={() => {
                        props.navigation.navigate("PersonalDetails");
                    }}
                    style={styles.drawerItem}
                    label="הפרטים שלי"
                    labelStyle={styles.drawerItemLabel}
                />

                <DrawerItem
                    icon={() => (
                        <MenuIcon
                            color="black"
                            img={require("../icons/icon_menu_notifications.png")}
                        />
                    )}
                    label="התראות"
                    onPress={() => {
                        props.navigation.navigate("Notifications");
                    }}
                    style={styles.drawerItem}
                    labelStyle={styles.drawerItemLabel}
                />

                <DrawerItem
                    icon={() => (
                        <MenuIcon
                            color="black"
                            img={require("../icons/icon_menu_my_jobs_v2.png")}
                        />
                    )}
                    label="הג'ובים שלי"
                    onPress={() => {
                        props.navigation.navigate("MyJobs");
                    }}
                    style={styles.drawerItem}
                    labelStyle={styles.drawerItemLabel}
                />

                <Separator />

                <DrawerItem
                    icon={() => (
                        <MenuIcon
                            color={colors.orange}
                            img={require("../icons/loading_indicator_jobi.png")}
                        />
                    )}
                    label="מצא ג'ובים"
                    onPress={() => {
                        props.navigation.navigate("FindJobs");
                    }}
                    style={{ ...styles.drawerItem, ...styles.drawerItemBottom }}
                    labelStyle={{
                        ...styles.drawerItemLabel,
                        ...styles.orangeDrawerItemLabel,
                    }}
                />

                <Separator />

                <DrawerItem
                    icon={() => (
                        <MenuIcon
                            img={require("../icons/icon_menu_sochen.png")}
                        />
                    )}
                    label="הסוכן החכם"
                    onPress={() => {}}
                    style={{ ...styles.drawerItem, ...styles.drawerItemBottom }}
                    labelStyle={{
                        ...styles.drawerItemLabel,
                        ...styles.orangeDrawerItemLabel,
                    }}
                />

                <Separator />

                <DrawerItem
                    icon={() => (
                        <MenuIcon
                            color={colors.orange}
                            img={require("../icons/icon_menu_about.png")}
                        />
                    )}
                    label="קצת עלינו"
                    onPress={() => {}}
                    style={{ ...styles.drawerItem, ...styles.drawerItemBottom }}
                    labelStyle={{
                        ...styles.drawerItemLabel,
                        ...styles.orangeDrawerItemLabel,
                    }}
                />

                <Separator />

                <DrawerItem
                    icon={() => (
                        <MenuIcon
                            color="darkgray"
                            img={require("../icons/icon_menu_new.png")}
                        />
                    )}
                    label="פרסם ג'וב חדש"
                    onPress={() => {
                        props.navigation.navigate("NewJobPost");
                    }}
                    style={{ ...styles.drawerItem, ...styles.drawerItemBottom }}
                    labelStyle={{
                        ...styles.drawerItemLabel,
                        ...styles.grayDrawerItemLabel,
                    }}
                />

                <Separator />
            </DrawerContentScrollView>

            <View style={styles.imgContainer}>
                <Image
                    style={styles.img}
                    source={require("../icons/logo.png")}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    drawerItem: {
        paddingLeft: 20,
    },
    drawerItemBottom: {
        padding: 5,
    },
    drawerItemLabel: {
        fontSize: 20,
        textAlign: "left",
    },
    orangeDrawerItemLabel: {
        color: colors.orange,
    },
    grayDrawerItemLabel: {
        textAlign: "left",
        color: "darkgray",
        fontWeight: "bold",
    },
    imgContainer: {
        position: "absolute",
        width: "100%",
        height: windowDimensions.height,
        top: 0,
        alignItems: "center",
    },
    img: {
        width: "70%",
        height: 50,
        resizeMode: "stretch",
        position: "absolute",
        bottom: 40,
    },
    drawerTopSection: {
        alignItems: "center",
    },
});
