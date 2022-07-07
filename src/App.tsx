import React, {useState, useEffect, useCallback, useMemo, useRef} from "react";
import { StyleSheet, SafeAreaView, Button, TextInput } from 'react-native';
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
     * Callback - Mantém uma função
     */

    const handlePressButton = useCallback(()=>{
        if(name == 'Mitalo'){
          setName('Miguel');
        } else {
          setName('Mitalo');
        }
    }, [])

    /**
     * Memo - Mantém um valor
     */

    const nameChanged = useMemo(()=>{
      // return value
      return `${name} | ${new Date()}`;
    }, [name])

    // () => {
    //   setName((old) => {
    //     if(old == 'Mitalo'){
    //       return 'Miguel';
    //     } else {
    //       return 'Mitalo';
    //     }
    //   });
    // };

     /**
      * Refs
      */

     const InputRef = useRef<TextInput>({} as TextInput);

    return (
      <SafeAreaView style={style.App}>
        <Header title={title}name={nameChanged}/>
        <Button
          title="Change name"
          onPress={() => console.log(InputRef.current.blur())}
        />

        <TextInput
          ref={InputRef}
          style={style.Input}
          onChangeText={text => setName(text)}
        />
      </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
  App: {
    flex: 1,
    margin: 20,
  },

  Input: {
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    fontSize: 20,
  },

});
