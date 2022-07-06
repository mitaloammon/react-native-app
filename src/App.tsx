import React, {useState, useEffect} from "react";
import { StyleSheet, SafeAreaView, Button } from 'react-native';
import Header from "./components/Header/Index";

// import { container } from './styles'
const App: React.FC = () => {
    const [name, setName] = useState<string>('Mitalo');
    const [title, setTitle] = useState<string>('Olá!,');

    /**
     * Effect
     */
    useEffect(()=>{
      console.log("Updated");
      if(name == 'Mitalo'){
        setTitle('Hello');
      } else {
        setTitle('Olá');
      }
    }, [name])

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
