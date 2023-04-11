import { createGlobalStyle } from "styled-components";
import { colors } from "./constants";

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
    font-family: 'League Spartan', sans-serif;
    line-height: 1;
    background-color: ${colors.backgroundColor};
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
* {
	box-sizing: border-box;
}
a {
	text-decoration: none;
	color: inherit;
	cursor: pointer;
}
strong {
	font-weight: 500;
}
button {
    width: 150px;
    height: 30px;
    border: 0px;
    border-radius: 5px;
    cursor: pointer;
    font-family: 'League Spartan', sans-serif;
    font-size: 15px;
    font-weight: 500;
    box-shadow: 2px 2px 2px rgb(0 0 0 / 30%);
    display: flex;
    align-items: center;
    justify-content: center;
}
form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0px 40px 0px;
}
input, 
textarea {
    width: 100%;
    min-width: 300px;
    height: 50px;
    margin-bottom: 20px;
    padding: 20px;
    border: 0px;
    border-radius: 10px;
    background-color: ${colors.beigeTone};
    font-family: 'League Spartan', sans-serif;
    font-size: 18px;
    font-weight: 500;
}
input::placeholder, 
textarea::placeholder {
    color: #333333;
    font-size: 18px;
}
input:focus,
textarea:focus {
    outline: inherit;
}
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
textarea {
    height: 100px;
    resize: none;
}
&::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}
&::-webkit-scrollbar-thumb {
    background: ${colors.lightGreen};
    border-radius: 6px;
}
&::-webkit-scrollbar-thumb:hover {
    background: ${colors.darkGreen};
}
.lightgreen {
    background-color: ${colors.lightGreen};
}
.earthytone {
    background-color: ${colors.earthyTone};
}
.darkgreen {
    background-color: ${colors.darkGreen};
}
.mustardtone {
    background-color: ${colors.mustardTone};
}
.graytone {
    background-color: ${colors.grayTone};
}
`;
export default GlobalStyle;
