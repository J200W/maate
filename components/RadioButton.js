import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { scaleFont } from '../function/Font';

export default function RadioButton({ data, onSelect }) {
  const [userOption, setUserOption] = useState(null);
  const selectHandler = (value) => {
    onSelect(value);
    setUserOption(value);
  };
  return (
    <View>
      {data.map((item, index) => {
        return (
          <Pressable
            key={index}
            style={
              item.value === userOption ? styles.selected : styles.unselected
            }
            onPress={() => selectHandler(item.value)}>
            <Text style={item.value === userOption ? styles.selectedText : styles.unselectedText}> {item.value}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
    option: {
        color: '#555555',
        textAlign: 'center',
    },
    unselected: {
        padding: 7,
        borderRadius: 120,
        paddingHorizontal:70,
        paddingVertical:10,
        borderWidth: 3,
        borderColor: '#888888',
        margin: 20,
    },
    selected: {
        padding: 7,
        borderRadius: 120,
        paddingHorizontal:70,
        paddingVertical:10,
        borderWidth: 3,
        borderColor: '#e84c5c',
        margin: 20,
    },
    selectedText: {
        fontSize: scaleFont(17),
        textAlign: 'center',
        color: '#e84c5c',
    },
    unselectedText: {
        fontSize: scaleFont(17),
        textAlign: 'center',
        color: '#888888',
    }

});