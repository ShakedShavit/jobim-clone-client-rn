import {
    changeUserDetailsActionType,
    signInActionType,
} from "../actions/user.action";

const initialUserState = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    cityOfResidence: "",
    phoneNumber: "",
    yearOfBirth: null,
    avatarFileKey: "",
    favoriteJobs: [],
    hiddenJobs: [],
};

// This func may seem redundant, but if userObj contains more fields than the ones I specified in the func (and in the user state), than they are not included in the returned object
// In short this func removes unnecessary fields from the user object
const getUserDetailsFromUserObj = (userObj) => {
    return ({
        email,
        password,
        firstName,
        lastName,
        cityOfResidence,
        phoneNumber,
        yearOfBirth,
        avatarFileKey,
        favoriteJobs: [...favoriteJobs],
        hiddenJobs: [...hiddenJobs],
    } = userObj);
};

const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case signInActionType:
            const user = getUserDetailsFromUserObj(action.user);
            return { ...user };
        case changeUserDetailsActionType:
            return {
                ...state,
                ...action.newUserDetails,
            };
        default:
            return {
                ...state,
            };
    }
};

export default userReducer;
