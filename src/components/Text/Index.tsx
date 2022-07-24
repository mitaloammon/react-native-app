import React from "react";

import {Container} from './styles'
import { Props } from './types';

const Text = ({children}: Props) => {
  return <Container>{children}</Container>;
};

export default Text;
