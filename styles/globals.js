import { createGlobalStyle } from 'styled-components';
import { COLORS, FONTS, WEIGHTS, TYPESCALE } from './constants';

// CSS reset adapted from Piccalilli: https://piccalil.li/blog/a-modern-css-reset
// Some resets adopted from Josh Comeau's CSS-for-JS course: https://courses.joshwcomeau.com/css-for-js
const CSSReset = createGlobalStyle`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  /* Piccalilli rule uses – ul[role='list'], ol[role='list'] – but I went with all ul/ol per JC */
  ul, ol {
    list-style: none;
    padding: 0;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
    scroll-behavior: auto;
    }
    
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /*  Create a stacking context, without a z-index.
      This ensures that all portal content (modals and tooltips) will float above the app. */
  #__next {
    isolation: isolate;
  }
`;

const GlobalStyles = createGlobalStyle`
  html, body, #__next {
    height: 100%;
    font-family: ${FONTS.josefinSans};
    color: ${COLORS.eerieBlack};
  }

  /* Typography */
  html {
    font-size: 16px;
  }

  h1 {
    font-size: ${TYPESCALE.h1};
    font-weight: ${WEIGHTS[400]};
  }
`;

export { CSSReset, GlobalStyles };
