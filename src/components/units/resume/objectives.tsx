import styled from "@emotion/styled";
import Title from "./modules/title";
import { styleSet } from "../../../commons/styles/styleSet";

const Objectives = () => {
  return (
    <Wrapper>
      <Title text="Objectives"></Title>
      <ContentsBox>
        <Box>
          <p>하나로 열까지</p>
          <div>
            <p>
              일을 효율적으로 하는 것을 좋아하며, 무슨 일을 해도 함께 일하는
              동료나 상사로부터 일머리가 좋다는 이야기를 자주 들었습니다.
              움직이는 일을 할 때는 한 동선 안에 여러 일을 동시에 할 수 있도록
              하고, 사무적인 일을 할 때는 비슷한 업무끼리 묶어서 한 번에
              처리하는 것을 선호했습니다.
            </p>
            <p>
              같은 코드를 여러 번 짜는 것 보단 공통 컴포넌트를 만들어서 재활용
              하는 것을 좋아합니다. 반응형 페이지를 구현할 때는 어떤 식으로
              디자인 해야 태그를 여러 개 만들지 않고 코드를 써 내려갈 수
              있는지에 대해 관심이 많습니다.
            </p>
          </div>
        </Box>
        <Box>
          <p>사용자의 관점에서</p>
          <div>
            <p>
              웹 서비스를 이용하면서 로딩이 오래 걸리거나 동작 방식이 생각과
              다른 점이 불편해서 페이지를 벗어난 경험이 있습니다. 이용자의
              관점으로 페이지에 오래 머무르는 경우는 사이트의 목적이 내가 원하는
              것과 일치하기 때문인 것도 있지만 페이지가 불편하지 않은 이유도
              있기 때문이라고 생각합니다.
            </p>
            <p>
              사용자 경험을 개선할 수 있는 다양한 기술 중 웹에서 발생하는 트래픽
              이슈를 정확하게 이해하고 리소스를 최적화시키는 것에 대해 관심을
              갖고 기존 서비스보다 더 나은 경험, 새로운 경험을 보여주고
              싶습니다.
            </p>
          </div>
        </Box>
      </ContentsBox>
    </Wrapper>
  );
};

export default Objectives;

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 9.2rem;
`;

const ContentsBox = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 65%;
  gap: 5rem;
  margin-top: 3rem;
`;

const Box = styled.article`
  display: flex;
  flex-direction: column;
  width: 55rem;
  background-color: ${styleSet.colors.subColor};
  padding: 4rem;
  border-radius: 2rem;

  > p {
    font-family: ${styleSet.fonts.EB};
    font-size: 2.2rem;
    margin-bottom: 3rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
  }

  > div > p {
    font-size: 1.8rem;
    line-height: 3.2rem;
  }
`;
