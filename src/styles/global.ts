import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  @media (max-width: 1080px) {
    font-size: 93.75%; // 15px
  }
  @media (max-width: 720px) {
    font-size: 87.5% // 14px
  }
}

body, button, textarea, input {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 600;
}

body {
  background: #111111;
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
}

button {
  cursor: pointer;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}

@font-face {
  font-family: "Papernotes";
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url("/fonts/Papernotes.ttf");
}

::-webkit-scrollbar-track {
  background: rgba(50, 50, 50, 0.8);  
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-thumb {
  background: #ff4c6a; 
  border-radius: 10px;
}

`;
