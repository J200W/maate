import Toast from 'react-native-toast-message';

const handleShowToast = (type, title, message) => {
    console.log("Toast Show");
    Toast.show({
        type: type,
        position: 'top',
        text1: title,
        text2: message,
        visibilityTime: 4000,
        autoHide: true,
        topOffset: 20,
        zIndex: 4,
    })
}

export default handleShowToast;