import React from "react";
import { View } from "react-native";
import { MarkerProps } from "react-native-a11y-slider";

function MyMarker({ color }: MarkerProps) {
  return (
    <View
      style={{
        backgroundColor: "#E84C5C",
        height: MyMarker.size,
        width: MyMarker.size,
        borderRadius: 200,
      }}
    />
  );
}
MyMarker.size = 30;
export default MyMarker;