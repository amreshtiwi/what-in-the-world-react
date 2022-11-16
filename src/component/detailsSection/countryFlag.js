import styled from "styled-components";
import { createBreakpoint } from "styled-components-breakpoint";

const breakpoints = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  };
  
const breakpoint1 = createBreakpoint(breakpoints);

const ImgFlag = styled.img`
${breakpoint1("xs")`
width: 100%;
`}
${breakpoint1("md")`
width: 45%;
`}
`;

export default function CountryFlag({src, cca2}) {
    return <ImgFlag src={src} alt={cca2}/>;
}