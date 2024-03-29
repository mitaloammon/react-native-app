/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import { Container } from "./styles";
import { Props } from './types';

const Text = ({children, color, typography, ...rest}: Props) => {
  return (
    <Container color={color || 'surface'}
      typography={typography || 'body1'}
      {...rest}>
      {children}
    </Container>
  );
};

export default Text;
