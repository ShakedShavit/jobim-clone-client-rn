import { AsyncStorage } from "react-native";

const userDataKey = "USER_DATA";

export const _storeUserData = async (user) => {
    try {
        await AsyncStorage.setItem(userDataKey, JSON.stringify(user));
    } catch (error) {
        // Error saving data
    }
};

export const _retrieveUserData = async () => {
    try {
        const userData = await AsyncStorage.getItem(userDataKey);
        if (userData === null) throw new Error("User data not found");
        return JSON.parse(userData);
    } catch (error) {
        // Error retrieving data
    }
};
