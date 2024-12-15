import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert } from 'react-native';
import { Colors } from '../constants/Colors';
import Title from '../components/Title';
import Card from '../components/Card';
import PrimaryButton from '../components/PrimaryButton';
import InstructionText from '../components/InstructionText';

export default function StartGameScreen({ onPickNumber }) {
    const [enterNumber, setEnterNumber] = useState('');

    const confirmInputNumber = () => {
        const number = parseInt(enterNumber);

        if (isNaN(number) || number <= 0 || number > 99) {
            Alert.alert('Invalid Number', 'Enter number between 0 - 100', [
                { text: 'OK', style: 'destructive', onPress: resetInputNumber }
            ]);
        } else {
            onPickNumber(number);
        }
    };

    const resetInputNumber = () => {
        setEnterNumber('');
    };

    return (
        <View style={styles.rootContainer}>
            <Title>Cuess My Number</Title>
            <Card>
                <InstructionText>
                    Enter a Number
                </InstructionText>
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType='number-pad'
                    value={enterNumber}
                    onChangeText={(value) => setEnterNumber(value)}
                    onSubmitEditing={confirmInputNumber}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={resetInputNumber}
                        >Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={confirmInputNumber}
                        >Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center',
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
});