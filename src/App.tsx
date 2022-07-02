import React from "react";
import { StyleSheet, Text, SafeAreaView } from 'react-native';

// import { container } from './styles'
const App: React.FC = () => {
    return (
        <SafeAreaView style={style.App}>
          <Text style={style.Title}>Bem vindo ao Schema Academy</Text>
        </SafeAreaView>
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
