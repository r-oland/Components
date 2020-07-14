// Components==============
import { createGlobalStyle } from "styled-components";
import woff500 from "../assets/fonts/raleway-v14-latin-500.woff";
import woff2_500 from "../assets/fonts/raleway-v14-latin-500.woff2";
import woff600 from "../assets/fonts/raleway-v14-latin-600.woff";
import woff2_600 from "../assets/fonts/raleway-v14-latin-600.woff2";
import woff700 from "../assets/fonts/raleway-v14-latin-700.woff";
import woff2_700 from "../assets/fonts/raleway-v14-latin-700.woff2";
import regular from "../assets/fonts/raleway-v14-latin-regular.woff";
import regular2 from "../assets/fonts/raleway-v14-latin-regular.woff2";
// =========================

const GlobalStyles = createGlobalStyle`
      
      /* =========================================*/
      /* Global style ============================*/
      /* =========================================*/
      
      html {
         font-family: Raleway;
         background-color: ${({ theme: { color } }) => color.offWhite};

         input, select, textarea, label{
            font-family: Raleway;
            font-size: 14px;
         }
      }


      body {
         color: ${({ theme: { color } }) => color.black};
         overflow: hidden;
      }

      #gatsby-focus-wrapper{
         position: relative;
      }

      svg{
         display: block;
      }

      /* =========================================*/
      /* Font ====================================*/
      /* =========================================*/

      /* raleway-regular - latin */
      @font-face {
      font-family: 'Raleway';
      font-style: normal;
      font-weight: 400;
      src: local('Raleway'), local('Raleway-Regular'),
            url('${regular2}') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('${regular}') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }
      /* raleway-500 - latin */
      @font-face {
      font-family: 'Raleway';
      font-style: normal;
      font-weight: 500;
      src: local('Raleway Medium'), local('Raleway-Medium'),
            url('${woff2_500}') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('${woff500}') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }
      /* raleway-600 - latin */
      @font-face {
      font-family: 'Raleway';
      font-style: normal;
      font-weight: 600;
      src: local('Raleway SemiBold'), local('Raleway-SemiBold'),
            url('${woff2_600}') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('${woff600}') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }
      /* raleway-700 - latin */
      @font-face {
      font-family: 'Raleway';
      font-style: normal;
      font-weight: 700;
      src: local('Raleway Bold'), local('Raleway-Bold'),
            url('${woff2_700}') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('${woff700}') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }

      h1 {
         ${({ theme: { fontSize } }) => fontSize.h1}
      }

      h2 {
         ${({ theme: { fontSize } }) => fontSize.h2}
      }

      h3 {
         ${({ theme: { fontSize } }) => fontSize.h3}
      }

      h4 {
         ${({ theme: { fontSize } }) => fontSize.h4}
      }

      h5 {
         ${({ theme: { fontSize } }) => fontSize.h4}
      }

      h6 {
         ${({ theme: { fontSize } }) => fontSize.h4}
      }

      p,
      a,
      strong,
      span, 
      li
      {
         ${({ theme: { fontSize } }) => fontSize.m}
      }

      /* =========================================*/
      /* Reset ===================================*/
      /* =========================================*/

      *,
      ::before,
      ::after {
         box-sizing: border-box;
      }


      body,
      h1,
      h2,
      h3,
      h4,
      p,
      ul,
      ol,
      li,
      figure,
      figcaption,
      blockquote,
      dl,
      dd {
      margin: 0;
      }

      p,
      ul,
      ol,
      dl,
      address,
      button
      {
         line-height:1.4;
         padding: 0;
      }

      button {
         background: none;
         color: ${({ theme: { color } }) => color.gray};
         border: none;
         padding: 0;
         cursor: pointer;
         font-family: inherit;
         outline: inherit;
         ${({ theme: { fontSize } }) => fontSize.m}
      }

      pre {
         white-space: pre-wrap;
      }

      hr {
         border: 0.5px solid;
      }

      ul {
         list-style: none;
      }

      ol {
         padding-left: 1em;
      }

      a {
         color: ${({ theme: { color } }) => color.gray};
         text-decoration: none;
      }

      img,
      video,
      canvas,
      audio,
      iframe,
      embed,
      object {
         display: block;
      }

      img,
      video,
      canvas,
      audio,
      iframe,
      embed,
      object {
         vertical-align: middle;
      }

      img,
      video {
         max-width: 100%;
         height: auto;
      }

      img {
         border-style: none;
      }
      `;

export default GlobalStyles;
