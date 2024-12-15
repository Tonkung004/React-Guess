import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Title({ children }) {
    return (
        <View>
            <Text style={styles.title}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        borderWidth: 2,
        borderColor: 'white',
        margin: 10,
        padding: 10,
    },
});