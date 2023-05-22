import styled from "@emotion/styled";
import { styleSet } from "../../../../commons/styles/styleSet";

interface ITitleProps {
  text: string;
}

const Title = (props: ITitleProps) => {
  return <Text>{props.text}</Text>;
};

export default Title;

const Text = styled.h1`
  color: ${styleSet.colors.mainColor};
  font-size: 4.5rem;
  font-family: ${styleSet.fonts.EB};
  padding: 6rem 0;
`;
