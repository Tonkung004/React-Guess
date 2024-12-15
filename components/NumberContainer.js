import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/Colors';

export default function NumberContainer({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.accent500,
    }
});