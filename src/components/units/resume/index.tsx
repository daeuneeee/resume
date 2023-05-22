import styled from "@emotion/styled";
import Experience from "./experience";
import Introduce from "./introduce";
import Objectives from "./objectives";
import Skills from "./skills";

const Resume = () => {
  return (
    <Wrapper>
      <Introduce />
      <Objectives />
      <Skills />
      <Experience />
    </Wrapper>
  );
};

export default Resume;

const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    width: 0;
    background-color: transparent;
  }

  & > main {
    scroll-snap-align: start;
    height: 100vh;
  }
`;
