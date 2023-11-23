import * as ImagePicker from "expo-image-picker";

const handleVideoPicker = async (setVideo) => {
    // Ask the user for the permission to access the library
    // Then launch the library to choose ONLY a video using mediaTypes ImagePickerOption
    const permissionResult =
        ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
        alert("You've refused to allow this app to access your library!");
        return;
    }
    const pickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
    });
    if (pickerResult.assets[0].uri !== undefined) {
        setVideo(() => pickerResult.assets[0].uri);
    } else {
        setVideo(null);
    }
};

export default handleVideoPicker;