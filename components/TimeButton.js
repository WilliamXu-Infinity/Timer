import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Button } from "react-native";
import TimerContext from './timerContext';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

const TimeButton = ({title, duration}) => {
  const { increaseTimerCount } = useContext(TimerContext)

  const [startTimer, setStartTimer] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const onPress = () => {
    console.log('\x1b[31m%s\x1b[0m', 'WX - pressed button')
    setStartTimer(true)
    setIsPlaying(true)
  }

  const onComplete = () => {
    increaseTimerCount({title, duration})
    setStartTimer(false)
  }

  const stopTimer = () => {
    console.log('\x1b[31m%s\x1b[0m', 'WX - stopTimer')
    setIsPlaying(false)
  }

  return (
    <View
      onClick={stopTimer}
    >
      {!startTimer && 
        <Button
          title={`${title} (${duration})`}
          onPress={onPress}
        >
        </Button>
      }

      {startTimer && 
        <View
          onPress={() => setIsPlaying(prev => !prev)}
        >
          <CountdownCircleTimer
            isPlaying={isPlaying}
            duration={duration}
            colors={['#004777', '#F7B801', '#A30000', '#A30000']}
            colorsTime={[7, 5, 2, 0]}
            onComplete={onComplete}
            onClick={stopTimer}
          >
            {({ remainingTime }) => <Text>{remainingTime}</Text>}
          </CountdownCircleTimer>
          <Button
            title={'Toggle'}
            onPress={() => setIsPlaying(prev => !prev)}
          >
          </Button>
        </View>
      }
    </View>
    
  )
}

const styles = StyleSheet.create({
  
})

export default TimeButton