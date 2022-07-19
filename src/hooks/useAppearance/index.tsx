import React, {useCallback, useEffect, useMemo, useState} from "react";
import { Appearance } from "react-native";
import themeDark from "../../constants/styles/themes/dark";
import themeLight from "../../constants/styles/themes/light";
import { Props, themeType, colorSchemaProps } from './types';

const useAppearance = (): Props => {
  const [currentTheme, setCurrentTheme] = useState<themeType>(Appearance.getColorScheme() || 'light',);

  const handleChangeAppearance = useCallback(
    ({colorScheme}: colorSchemaProps) => {
      if(colorScheme) {
        setCurrentTheme(colorScheme);
      }
    },
    []
  );

  const theme = useMemo(() => {
    if(currentTheme == 'light') {
      return themeLight
    }
    return themeDark
  }, [currentTheme])

  useEffect(() => {
    Appearance.addChangeListener(handleChangeAppearance);

    return () => Appearance.removeChangeListener(handleChangeAppearance);
  }, [handleChangeAppearance]);

  return {currentTheme, theme};
};

export default useAppearance;
