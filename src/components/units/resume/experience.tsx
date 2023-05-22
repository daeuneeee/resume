import styled from "@emotion/styled";
import Title from "./modules/title";
import { styleSet } from "../../../commons/styles/styleSet";
import Image from "next/image";

const Experience = () => {
  return (
    <Wrapper>
      <Title text="Experience"></Title>
      <ContentsBox>
        <ContentsUl>
          <ContentsLi>코드캠프 FE 09 수료 (2022.08 - 2022.11)</ContentsLi>
          <ContentsLi>미래신용정보 영업지원팀 (2020.07 - 2022.07)</ContentsLi>
          <ContentsLi>
            한국영상대 스튜어디스과 졸업 (2015.03 - 2017.02)
          </ContentsLi>
        </ContentsUl>
      </ContentsBox>
      <Footer>
        <Wave1></Wave1>
        <Wave2></Wave2>
        <Wave3></Wave3>
        <IconBox>
          <a href="mailto:dxexx2@gmail.com">
            <Image
              src="/images/mail.png"
              alt="mail_icon"
              width={40}
              height={40}
            />
          </a>
          <a href="https://github.com/daeuneeee" target="_blank">
            <Image
              src="/images/github.png"
              alt="github_icon"
              width={40}
              height={40}
            />
          </a>
          <a href="https://velog.io/@unaepaal" target="_blank">
            <Image
              src="/images/blog.png"
              alt="blog_icon"
              width={40}
              height={40}
            />
          </a>
          <a href="tel:010-5051-5844">
            <Image
              src="/images/phone.png"
              alt="phone_icon"
              width={40}
              height={40}
            />
          </a>
        </IconBox>
      </Footer>
    </Wrapper>
  );
};

export default Experience;

const Wrapper = styled.main`
  padding-top: 9.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentsBox = styled.section`
  margin-top: 3rem;
  width: 65%;
  padding: 3rem;
`;

const ContentsUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContentsLi = styled.li`
  font-size: 1.8rem;
`;

const Footer = styled.footer`
  width: 100%;
  margin-top: 10rem;
  height: 100%;
  background: ${styleSet.colors.white};
  position: relative;
`;

const Wave1 = styled.div`
  width: 400rem;
  height: 400rem;
  position: absolute;
  top: 40%;
  left: -48%;
  border-radius: 45%;
  background: rgba(134, 197, 222, 0.79);
  animation: move 6.8s infinite linear;

  @keyframes move {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Wave2 = styled(Wave1)`
  left: -70%;
  animation: move 6.4s infinite linear;
`;

const Wave3 = styled(Wave1)`
  left: -92%;
  animation: move 7.2s infinite linear;
`;

const IconBox = styled.div`
  position: absolute;
  bottom: 25%;
  left: 50%;
  display: flex;
  gap: 4rem;
  transform: translate(-50%, 0);
`;
