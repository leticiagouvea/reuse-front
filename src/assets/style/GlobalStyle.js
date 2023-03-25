import { createGlobalStyle } from "styled-components";

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
    background-color: #F6F3E4;
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
}
.lightgreen {
    background-color: #afd898;
}
`;
export default GlobalStyle;
