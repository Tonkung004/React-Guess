import React, { useState, useEffect } from 'react';
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Title from '../components/Title';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';
import PrimaryButton from '../components/PrimaryButton';
import InstructionText from '../components/InstructionText';
import GuessLogItem from '../components/GuessLogItem';

const generateRandomBetween = (min, max, exclude) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userNumber, onGameOver }) {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver])

    const nextGuessHandler = (direction) => {
        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert('Mistake!', 'this is wrong direction', [
                { text: 'sorry', style: 'cancel' },
            ]);
            return;
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(
            minBoundary,
            maxBoundary,
            currentGuess
        );
        setCurrentGuess(newRndNumber);
        setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
    }

    const guessRoundsListLength = guessRounds.length;

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>
                    Higher or lower?
                </InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name='remove' size={24} color='#fff' />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                            <Ionicons name='add' size={24} color='#fff' />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View style={styles.listContainer}>
                <FlatList
                    data={guessRounds}
                    renderItem={({ item, index }) => (
                        <GuessLogItem
                            roundNumber={guessRoundsListLength - index}
                            guess={item}
                        />
                    )}
                    keyExtractor={(item) => item}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
    instructionText: {
        marginBottom: 12,
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
    listContainer: {
        flex: 1,
        padding: 16
    },
});