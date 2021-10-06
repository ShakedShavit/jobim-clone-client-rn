import React from "react";
import { StyleSheet, View, StatusBar, Platform } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { _retrieveUserData } from "./asyncStorage";
import MainNavigatorDrawer from "./navigators/drawer/Main.navigator.drawer";
import rootReducer from "./redux/store/reducers/root.reducer";

export default function App() {
    const store = createStore(rootReducer);

    return (
        <Provider store={store}>
            <View
                style={{
                    flex: 1,
                }}
            >
                {Platform.OS === "android" && (
                    <StatusBar style={{ backgroundColor: "black" }} />
                )}
                <MainNavigatorDrawer />
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

// import React from "react";
// import { Provider } from "react-redux";
// import gameReducer from "./store/reducers/game";
// import { createStore, combineReducers } from "redux";
// import Main from "./screens/Main";

// const rootReducer = combineReducers({
//   game: gameReducer,
// });
// const store = createStore(rootReducer);

// export default function App() {
//   return (
//     <Provider store={store}>
//       <Main />
//     </Provider>
//   );
// }
