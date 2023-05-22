import styled from "@emotion/styled";
import { styleSet } from "../../../../commons/styles/styleSet";

const Header = () => {
  return (
    <>
      <Wrapper>
        <Nav>
          <NavUl>
            <NavLi>Resume</NavLi>
            <NavLi>Portfolio</NavLi>
            <NavLi>Contact</NavLi>
          </NavUl>
        </Nav>
      </Wrapper>
      {/* <Scrollbar> */}
      {/* <ScrollProgress
      ></ScrollProgress> */}
      {/* </Scrollbar> */}
    </>
  );
};

export default Header;

const Wrapper = styled.div`
  border: 1px solid red;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 2.4rem 0;
  z-index: 1000;
  background-color: ${styleSet.colors.white};
`;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
const NavUl = styled.ul`
  width: 45rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid orange;
  margin-right: 5rem;
`;

const NavLi = styled.li`
  font-size: 2.6rem;
  list-style: none;
  border: 1px solid blue;
  padding: 0.5rem;
`;

// const Scrollbar = styled.div`
//   width: 100%;
//   height: 0.8rem;
//   background: ${styleSet.colors.gray};
//   position: fixed;
//   top: 9.2rem;
//   left: 0;
// `;

// const ScrollProgress = styled.div`
//   width: 0%;
//   height: 0.8rem;
//   z-index: 20;
//   margin-top: 20rem;
//   background: ${styleSet.colors.mainColor};
// `;
