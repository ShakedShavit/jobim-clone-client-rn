export default PersonalDetailsNavigator = createStackNavigator(
    {
        // PersonalDetails: {
        //     screen: PersonalDetailsScreen,
        // },
        NameAndAvatar: {
            screen: NameAndAvatarScreen,
        },
        CityOfResidencePicker: {
            screen: CityOfResidencePickerScreen,
        },
        YearOfBirthPicker: {
            screen: YearOfBirthPickerScreen,
        },
        EmailPicker: {
            screen: EmailPickerScreen,
        },
    }
    // {
    //   defaultNavigationOptions: defaultStackNavOptions
    // }
);
