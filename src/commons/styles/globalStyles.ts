import { css } from "@emotion/react";
import { styleSet } from "./styleSet";

export const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 10px;
    font-family: SCDream3, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;

    @media (max-width: 1024px) {
      font-size: 7px;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
  @font-face {
    font-family: "SCDream2";
    src: url("/fonts/SCDream2.otf");
  }
  @font-face {
    font-family: "SCDream3";
    src: url("/fonts/SCDream3.otf");
  }
  @font-face {
    font-family: "SCDream4";
    src: url("/fonts/SCDream4.otf");
  }
  @font-face {
    font-family: "SCDream5";
    src: url("/fonts/SCDream5.otf");
  }

  a {
    color: ${styleSet.colors.black};
    text-decoration: none;
  }
`;
