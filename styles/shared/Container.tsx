import { flexbox } from "@mui/system";
import styled from "styled-components";

interface Props {
  flex?: boolean;
  justifyContent?: string;
  flexDirection?: string;
}

const Container = styled.div<Props>`
  width: 95%;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;

  ${(props) =>
    props.flex &&
    `
    display: flex;
    align-items: center;
  `}
  ${(props) => props.flex && props.justifyContent && `justify-content: ${props.justifyContent};`}
  ${(props) =>
    props.flex &&
    props.justifyContent &&
    `
    flex-direction: ${props.flexDirection}
  `}
`;

export default Container;
