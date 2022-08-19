import React, { createContext, useState } from 'react'

const TimerContext = createContext()

const TimerContextProvider = ({children}) => {
  const [timerHistory, setTimerHistory] = useState({})

  increaseTimerCount = ({title, duration}) => {
    console.log('\x1b[31m%s\x1b[0m', `WX - duration: ${JSON.stringify(duration)}`)
    if (timerHistory[title]) {
      const newTimerHistory = {
        ...timerHistory
      }
      newTimerHistory[title].count++
      setTimerHistory(newTimerHistory)
    } else {
      const newTimerHistory = {
        ...timerHistory,
        [title]: {
          duration,
          count: 1
        }
      }
      setTimerHistory(newTimerHistory)
    }
  }

  return (
    <TimerContext.Provider
      value={{
        increaseTimerCount,
        timerHistory
      }}
    >
      {children} 
    </TimerContext.Provider>
  )
}

export default TimerContext
export { TimerContextProvider }

