import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #f9f9f9;

    --blue-400: #8dd4f7;

    --gray-50: #E0E0E0;
    --gray-100: #dAdAdA;
    --gray-500: #9A9A9A;
    --gray-600: #7A7A7A;
    --gray-700: #3F3F3F;
    --gray-900: #212121;
  }

  li {
    list-style: none;
  }

  body, button, textarea, input {
    font-family: 'Nunito', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Mukta', sans-serif;
  }

  button {
    cursor: pointer;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
`;

export default GlobalStyled;
