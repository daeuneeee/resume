import styled from "@emotion/styled";
import { styleSet } from "../../../commons/styles/styleSet";
import Image from "next/image";

const Introduce = () => {
  return (
    <Wrapper>
      <SectionTop>
        <Image
          src="/images/profile.jpeg"
          alt="profile"
          width={200}
          height={200}
          style={{ borderRadius: "100%" }}
        />
        <ContentsBox>
          <IntroduceBox>
            <strong>안녕하세요.</strong>
            <strong>프론트엔드 개발자 이다은입니다.</strong>
          </IntroduceBox>
          <LinkBox>
            <div>
              <p>
                Mail: <a href="mailto:dxexx2@gmail.com">dxexx2@gamil.com</a>
              </p>
              <p>
                Tel: <a href="tel:010-5051-5844">010-5051-5844</a>
              </p>
            </div>
            <div>
              <p>
                Blog:{" "}
                <a href="https://velog.io/@unaepaal" target="_blank">
                  https://velog.io/@unaepaal
                </a>
              </p>
              <p>
                GitHub:{" "}
                <a href="https://github.com/daeuneeee" target="_blank">
                  https://github.com/daeuneeee
                </a>
              </p>
            </div>
          </LinkBox>
        </ContentsBox>
      </SectionTop>
      <SectionBottom>
        <p>About.</p>
        <div>
          <p>
            평소에 손으로 뭔가를 만들기 좋아하는 저에게 이전 직장을 통해 국비
            지원 개발 교육과정을 수강할 수 있는 기회가 있었습니다. 처음
            접근하기는 쉽지 않으나 원리를 이해하면 어떤 것이든 직접 만들 수
            있다는 점, 뒤처지지 않기 위해서는 끊임없이 공부해야 하기 때문에
            꾸준한 자기 계발이 가능하다는 점에 매력을 느껴 개발자로서의 커리어
            전환을 결심하게 되었습니다.
          </p>
          <p>
            문제를 해결하기 위해 동료와 협업하는 자세를 가지고 있으며, 해내고자
            하는 욕심과 집요함으로 끈기 있게 목표를 달성하고자 합니다. 지속적인
            성장을 위해 배우게 된 것을 블로그에 정리하여 작성 하며, 스터디를
            통해 새로운 것을 배우고, 알고 있는 것을 다른 사람에게 전달하는
            연습을 하고 있습니다.
          </p>
        </div>
      </SectionBottom>
    </Wrapper>
  );
};

export default Introduce;

const Wrapper = styled.main`
  background-color: ${styleSet.colors.subColor};
  padding-top: 9.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`;

const SectionTop = styled.section`
  width: 55%;
  display: flex;
  flex-direction: row;
  gap: 5rem;
  padding: 2rem;
`;

const SectionBottom = styled.section`
  width: 55%;

  > p {
    font-family: ${styleSet.fonts.EB};
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  > div > p {
    font-size: 1.8rem;
    line-height: 3.2rem;
  }
`;

const ContentsBox = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const IntroduceBox = styled.article`
  > strong {
    color: ${styleSet.colors.mainColor};
    font-family: ${styleSet.fonts.EB};
    font-size: 3rem;
    display: block;
  }
`;

const LinkBox = styled.article`
  display: flex;
  flex-direction: row;
  gap: 5rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;

    > p,
    > p > a {
      font-size: 1.6rem;
    }
  }
`;
