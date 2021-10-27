import { injectGlobal } from "styled-components";
import "font-awesome/css/font-awesome.css";
import background from "../images/01.png"

injectGlobal`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  outline: 0;
}
body, html {
  @import url(https://fonts.googleapis.com/css?family=Open+Sans);
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  background-image: url(${background});
  background-size: cover;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  height: 100%;
  width: 100%;
}

footer{
  position:absolute;
  bottom:20px;
  width:100%;
  font-family: 'Opens sans', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 10px;
line-height: 11px;
/* or 115% */
text-align: center;
color: #FFFFFF;
}
`;