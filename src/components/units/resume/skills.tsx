import styled from "@emotion/styled";
import { styleSet } from "../../../commons/styles/styleSet";
import Title from "./modules/title";
import Image from "next/image";

const Skills = () => {
  return (
    <Wrapper>
      <Title text="Skills"></Title>
      <ContentsBox>
        <Box>
          <Image
            src="/images/typescript.png"
            alt="typescript_icon"
            width={90}
            height={90}
            style={{ borderRadius: "2rem" }}
          />
          <div>
            <strong>TypeScript.</strong>
            <p>
              프론트엔드 개발자로서 중요하다고 생각하는 크로스 브라우징 문제도
              해결해주고, 타입을 명시함으로써 앞으로 발생할 에러를 줄여줍니다.
              들어올 데이터의 타입을 유추하기 쉽기 때문에 더 나은 개발자 경험을
              할 수 있으며 유지보수에 용이합니다.
            </p>
          </div>
        </Box>
        <Box>
          <Image
            src="/images/recoil.png"
            alt="recoil_icon"
            width={90}
            height={90}
          />
          <div>
            <strong>Recoil.</strong>

            <p>
              상태를 별도의 저장소에 보관하기 때문에 상태를 관리하는데 필요한
              코드가 간소화되며, 상태의 일관성을 보장할 수 있습니다. 비동기 상태
              관리를 통해 사용자 경험을 개선할 수 있습니다.
            </p>
          </div>
        </Box>
        <Box>
          <Image
            src="/images/graphql.png"
            alt="graphql_icon"
            width={90}
            height={90}
          />
          <div>
            <strong>GraphQL/ApolloClient.</strong>

            <p>
              필요한 데이터만 받아오기 때문에 응답 사이즈를 줄일 수 있으며,
              타입스크립트와 함께 사용할 수 있다는 장점이 있습니다. Apollo
              Client를 함께 사용하면 상태 관리도 가능하며, 개발자 도구에
              추가하여 캐시에 저장된 데이터를 시각화하여 작업할 수 있습니다.
            </p>
          </div>
        </Box>
      </ContentsBox>
    </Wrapper>
  );
};

export default Skills;

const Wrapper = styled.main`
  background-color: ${styleSet.colors.subColor};
  padding-top: 9.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentsBox = styled.section`
  display: flex;
  flex-direction: column;
  width: 65%;
  gap: 3rem;
  margin-top: 3rem;
`;

const Box = styled.article`
  width: 100%;
  height: 15rem;
  display: flex;
  flex-direction: row;
  background-color: ${styleSet.colors.white};
  padding: 3rem;
  gap: 5rem;
  border-radius: 2rem;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  > div > strong {
    font-family: ${styleSet.fonts.B};
    font-size: 1.8rem;
  }

  > div > p {
    width: 100%;
    font-size: 1.6rem;
    line-height: 2.4rem;
  }
`;
