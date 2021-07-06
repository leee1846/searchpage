import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./fonts.css";

const GlobalStyle = createGlobalStyle`
  ${reset};

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body{
    font-family: "NotoSansCJKKR";
  }
`;

export default GlobalStyle;
