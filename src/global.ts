import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  html { scroll-behavior: smooth; }
  body {
    background: #0B0F14;
    color: #FFFFFF;
    margin: 0;
    font-family: system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,"Helvetica Neue",Arial,"Noto Sans";

    /* żeby mobilny fab nie zasłaniał treści */
    padding-bottom: 84px;
  }
  @media (min-width: 768px) {
    body {
    background: #0B0F14;
    color: #FFFFFF; padding-bottom: 0; }
  }
  a { color: inherit; text-decoration: none; }
  img { display: block; max-width: 100%; }
  button, input, textarea { font: inherit; }
`;
// todo
// background: ${({ theme }) => theme.colors.uiWhite};
// color: ${({ theme }) => theme.colors.uiBlack};
