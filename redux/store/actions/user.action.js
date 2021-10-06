export const signInActionType = "SIGN_IN";
export const changeUserDetailsActionType = "CHANGE_USER_DETAILS";

export const signInAction = (user) => {
    return { type: signInActionType, user };
};

export const changeUserDetailsAction = (newUserDetails) => {
    return { type: changeUserDetailsActionType, newUserDetails };
};
