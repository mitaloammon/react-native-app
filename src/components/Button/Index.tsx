import React, { useContext } from "react";
import { Button as ButtonRN} from "react-native";
import { ThemeContext } from "styled-components";

const Button: React.FC<{onPress: () => void}> = ({onPress}) => {
  const themeContext = useContext(ThemeContext);
  //console.log(ThemeContext);
  return <ButtonRN color="white" title="change theme" onPress={onPress} />;
};

export default Button;
