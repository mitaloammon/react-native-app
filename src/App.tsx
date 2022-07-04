import React, {useState} from "react";
import { StyleSheet, SafeAreaView, Button } from 'react-native';
import Header from "./components/Header/Index";

// import { container } from './styles'
const App: React.FC = () => {
    const [name, setName] = useState<string>('Mitalo');
    const [title, setTitle] = useState<string>('Olá!,');

    /**
     * Callback
     */
    const handlePressButton = () => {
      setName((old) => {
        if(old == 'Mitalo'){
          return 'Miguel';
        } else {
          return 'Mitalo';
        }
      });
    };

    return (
      <SafeAreaView style={style.App}>
        <Header title={title}name={name}/>
        <Button title="Change name" onPress={handlePressButton}/>
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
