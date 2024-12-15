import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function PrimaryButton({ children, onPress }) {
    return (
        <View style={styles.buttonContainer}>
            <Pressable
                style={({ pressed }) => pressed && styles.pressed}
                onPress={onPress}
                android_ripple={{ color: '#640233' }}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 28,
        margin: 4,
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,
        borderRadius: 28,
    },
});