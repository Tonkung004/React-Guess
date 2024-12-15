import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Colors } from '../constants/Colors';

export default function InstructionText({ children }) {
    return (
        <Text style={styles.instructionText}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.accent500,
        fontSize: 24,
    },
});