import styled from "styled-components";

interface Props {
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
}

const Flex = styled.div<Props>`
  display: flex;
  ${(props) => props.justifyContent && `justify-content: ${props.justifyContent};`}
  ${(props) => props.alignItems && `align-items: ${props.alignItems};`}
  ${(props) => props.flexDirection && `flex-direction: ${props.flexDirection};`}
`;

export default Flex;
