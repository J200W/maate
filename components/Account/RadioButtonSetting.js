import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { scaleFont } from '../../function/Font';

export default function RadioButtonSetting({ data, onSelect }) {
  const [userOption, setUserOption] = useState(null);
  const selectHandler = (value) => {
    onSelect(value);
    setUserOption(value);
  };
  return (
    <View style={styles.radioContainer}>
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
    radioContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    option: {
        fontSize: scaleFont(10),
        color: '#555555',
        textAlign: 'center',
    },
    unselected: {
        flex: 1,
        padding: 7,
        borderRadius: 120,
        paddingVertical: 10,
        borderWidth: 3,
        borderColor: '#888888',
        marginVertical: 20,
        marginHorizontal: 10,
    },
    selected: {
        flex: 1,
        padding: 7,
        borderRadius: 120,
        paddingVertical:10,
        borderWidth: 3,
        borderColor: '#e84c5c',
        marginVertical: 20,
        marginHorizontal: 10,
    },

    selectedText: {
        fontSize: scaleFont(16),
        textAlign: 'center',
        color: '#e84c5c',
    },
    unselectedText: {
        fontSize: scaleFont(16),
        textAlign: 'center',
        color: '#888888',
    }

});