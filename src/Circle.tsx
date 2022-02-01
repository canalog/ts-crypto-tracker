import { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}
const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 100px;
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

const Circle = ({
  bgColor,
  borderColor,
  text = "default text",
}: CircleProps) => {
  const [counter, setCounter] = useState<number|string>(1);
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
};

export default Circle;
