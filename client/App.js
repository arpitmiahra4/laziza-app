import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./navigation";
import { Provider } from "react-redux";
import { store } from "./Store";
import { ThemeProvider } from "./theme";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Navigation />
      </ThemeProvider>
    </Provider>
  );
}
