import * as ImagePicker from 'expo-image-picker';

const reverseString = (str) => {
    return str.split('').reverse().join('')
}

const findTypeImage = (str) => {
    str = reverseString(str)
    let type = str.split('.')
    type = reverseString(type[0])
    return type
}

const handlePickImage = async (setImage, setImageUri, setType, setCheck) => {
    // Ask the user for the permission to access the camera
    const permissionResult = ImagePicker.requestMediaLibraryPermissionsAsync()

    if (permissionResult.granted === false) {
      alert("You've refused to allow this app to access your gallery!")
      return
    }
    //choose image in library
    const pickerResult = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            base64: true
        }
    )

    if (pickerResult.canceled === false) {
        setImage(pickerResult.assets[0].base64)
        setImageUri(pickerResult.assets[0].uri)
        setType(findTypeImage(pickerResult.assets[0].uri))
        setCheck(true)
    }
}

export default handlePickImage