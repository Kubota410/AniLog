import React, { useEffect } from "react";
import AppNavigator from "./navigation/AppNavigator";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { UserProvider } from "./context/UserContext";

const App: React.FC = () => {
  return (
    <>
      <UserProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <AppNavigator />
        </GestureHandlerRootView>
      </UserProvider>
    </>
  );
};

export default App;
