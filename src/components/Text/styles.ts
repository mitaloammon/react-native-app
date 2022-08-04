import styled from "styled-components";
import { Props } from "./types";

type ContainerProps = Required<Pick<Props, 'color' | 'typography'>>

export const Container = styled.text<ContainerProps>`
  color: ${({theme, color})=>{
    return theme.colors[color].main;
  }};
  font-size: ${({theme, typography})=> {
    return theme.typography[typography].fontSize;
  }}px;
`;
