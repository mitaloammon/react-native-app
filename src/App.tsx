import React, { useState } from "react";
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { ThemeProvider } from "styled-components";
import Header from './components/Header/Index';
import Button from "./components/Button/Index";
import useAppearance from "./hooks/useAppearance";

// import { container } from './styles'

const App: React.FC = () => {
  const {theme} = useAppearance()
  //const [theme, setTheme] = useState<'light' | 'dark'>('light');

    return (
        <ThemeProvider theme={theme}>
          <SafeAreaView style={style.App}>
            <Header />
            <Button onPress={() => {}} />
            <Text typography="h1" colors="primary">
              Text
            </Text>
          </SafeAreaView>
        </ThemeProvider>
    );
};

export default App;

const style = StyleSheet.create({
    App:{
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center'
    },

    Title:{
        color: 'white',
        fontSize: 30,
    }
})
