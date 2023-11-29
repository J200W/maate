// App.jsx
import { BaseToast, ErrorToast } from 'react-native-toast-message';
import { scaleFont } from '../function/Font';

/*
  1. Create the config
*/
const toastConfig = {
  /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: 'pink' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: scaleFont(12),
        fontWeight: '100'
      }}
      text2Style={{
        fontSize: scaleFont(10),
      }}
    />
  ),
  /*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
  error: (props) => (
    <ErrorToast
      {...props}
      style={{ zIndex: 1000, borderLeftColor: '#FC6F20'  }}
      text1Style={{
        fontSize: scaleFont(12),
      }}
      text2Style={{
        fontSize: scaleFont(10),
      }}
    />
  ),
  /*
    Or create a completely new type - `tomatoToast`,
    building the layout from scratch.

    I can consume any custom `props` I want.
    They will be passed when calling the `show` method (see below)
  */
  tomatoToast: ({ text1, props }) => (
    <View style={{ height: 60, width: '100%', backgroundColor: 'tomato'}}>
      <Text>{text1}</Text>
      <Text>{props.uuid}</Text>
    </View>
  )
};


export default toastConfig;