import React from "react";
import { StyleSheet, SafeAreaView } from 'react-native';
import Header from "./components/Header/Index";

// import { container } from './styles'
const App: React.FC = () => {
    return (
      <SafeAreaView style={style.App}>
        <Header />
      </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
  App: {
    flex: 1,
    margin: 20,
  },

});
