import styled from "@emotion/styled";
import OnAndOff from "./onAndOff";
import SeventeenCarat from "./seventeenCarat";
import WeTrekking from "./weTrekking";

const Portfolio = () => {
  return (
    <Wrapper>
      <OnAndOff />
      <WeTrekking />
      <SeventeenCarat />
    </Wrapper>
  );
};

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

export default Portfolio;
