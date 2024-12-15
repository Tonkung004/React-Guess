import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from './constants/Colors';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Title from './components/Title';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const pickUserNumberHandler = (pickNumber) => {
    setUserNumber(pickNumber);
    setGameIsOver(false);
  };

  const gameOverHandler = (numberOfRound) => {
    setGameIsOver(true);
    setGuessRounds(numberOfRound);
  };

  const startNewGameHandler = () => {
    setGameIsOver(null);
    setGuessRounds(0);
    setUserNumber();
  };

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <StatusBar style="auto" />
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        {gameIsOver && userNumber
          ? (
            <GameOverScreen
              userNumber={userNumber}
              roundsNumber={guessRounds}
              onStartNewGame={startNewGameHandler}
            />
          ) : userNumber ? (
            <GameScreen
              userNumber={userNumber}
              onGameOver={gameOverHandler}
            />
          ) : (
            <StartGameScreen
              onPickNumber={pickUserNumberHandler}
            />
          )
        }
        <Title>{'Waritthon Sathidkunrat\n6514110025'}</Title>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.15
  },
});