// Components==============
import { createGlobalStyle } from "styled-components";
import woff300 from "../assets/fonts/raleway-v14-latin-300.woff";
import woff2_300 from "../assets/fonts/raleway-v14-latin-300.woff2";
import woff500 from "../assets/fonts/raleway-v14-latin-500.woff";
import woff2_500 from "../assets/fonts/raleway-v14-latin-500.woff2";
import woff600 from "../assets/fonts/raleway-v14-latin-600.woff";
import woff2_600 from "../assets/fonts/raleway-v14-latin-600.woff2";
import woff700 from "../assets/fonts/raleway-v14-latin-700.woff";
import woff2_700 from "../assets/fonts/raleway-v14-latin-700.woff2";
import regular from "../assets/fonts/raleway-v14-latin-regular.woff";
import regular2 from "../assets/fonts/raleway-v14-latin-regular.woff2";
import { flexUnit } from "./Mixins";
// =========================

const GlobalStyles = createGlobalStyle`
   
   /* =========================================*/
   /* Global style ============================*/
   /* =========================================*/
   
   body {
      color: ${({ theme }) => theme.black};
   }

   /* =========================================*/
   /* Font ====================================*/
   /* =========================================*/

    /* raleway-300 - latin */
    @font-face {
   font-family: 'Raleway';
   font-style: normal;
   font-weight: 300;
   src: local('Raleway Light'), local('Raleway-Light'),
   url('${woff2_300}') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
   url('${woff300}') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
   }
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

   html {
      font-family: raleway;
      background-color: ${({ theme }) => theme.white};
   }

   h1 {
      ${flexUnit(4, 36, 65, "vw", "font-size")}
   }

   h2 {
      ${flexUnit(4, 32, 55, "vw", "font-size")}
   }

   h3 {
      ${flexUnit(4, 30, 45, "vw", "font-size")}
   }

   h4 {
      ${flexUnit(4, 27.5, 40, "vw", "font-size")}
   }

   h5 {
      ${flexUnit(4, 24, 35, "vw", "font-size")}
   }

   h6 {
      ${flexUnit(4, 22, 30, "vw", "font-size")}
   }

   p,
   a,
   strong,
   span {
      ${flexUnit(4, 16, 20, "vw", "font-size")}
   }

   /* =========================================*/
   /* Reset ===================================*/
   /* =========================================*/

   *,
   ::before,
   ::after {
      box-sizing: border-box;
   }

   body {
      margin: 0;
   }

   p,
   ul,
   ol,
   dl,
   address {
      line-height: 1.2;
      padding: 0;
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
      color: black;
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
