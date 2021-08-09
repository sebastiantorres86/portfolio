import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    align-items: center;
    width: 100%;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.gray3};
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    text-rendering: optimizeLegibility;
    @media (min-width: ${({ theme }) => theme.mobile}) {
      padding: 70px 197px;
    }
  }
  h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: ${({ theme }) => theme.gray2};
    margin: 0 0 6px;
  }
  h3 {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: ${({ theme }) => theme.gray3};
    margin: 0;
  }
  section {
    margin-bottom: 42px;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.white};
  }
`
