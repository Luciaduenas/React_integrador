import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Fredoka:wght@300;400;500;600;700&family=Zilla+Slab+Highlight:wght@400;700&display=swap');
        
        *{ 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Caveat', cursive;
        font-family: 'Fredoka', sans-serif;
        font-family: 'Zilla Slab Highlight', serif;
        font-family: 'Oxygen', sans-serif;
    }

    :root {
    --beige-bg: #f2e1de;
    --softpink: #f6bade;
    --pink: #ff87ba;
    --fucsia: #f75e94;
    --pinkred: #fb4e6e;
    --red: #ea2c29;
    --tangerine: #fa982f;
  --btn-gradient: linear-gradient(83deg, #f6bade, #ff87ba);
  --btn-gradient-secondary: linear-gradient(140deg, #fb4e6e, #fa982f);
  --btn-gradient-store: linear-gradient(140deg, #f2e1de, #fa982f);
  }
  html{
    scroll-behavior: smooth;
  }
    body {
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden;
    }

    a {
    text-decoration: none;
    color: white;
    }



    li {
    list-style: none;
    }
`;