import styled from "@emotion/styled";
import Header from "./header";

interface ILayoutProps {
  children?: JSX.Element;
}

const Layout = (props: ILayoutProps) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default Layout;
