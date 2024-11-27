import React from 'react'
import AppNavigator from './navigation/AppNavigator'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const App: React.FC = () => {
  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AppNavigator />
      </GestureHandlerRootView>
    </>
  )
}

export default App
