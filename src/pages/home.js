import { Box } from "@mui/system";
import styled from "styled-components";
import FavAndCountriesSection from "../component/favAndCountriesSection";
import SearchFilterSection from "../component/searchFilterSection/searchFilterSection";
import {createBreakpoint} from "styled-components-breakpoint";

const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};
 
const breakpoint1 = createBreakpoint(breakpoints);

const HomeBox = styled(Box)`

${breakpoint1('xs')`
margin-top: 100px;
margin-right: 50px;
margin-left: 50px;
`}
${breakpoint1('md')`
margin: 100px;
`}
`;
export default function Home() {


  return (
    <HomeBox>
      <SearchFilterSection />
      <FavAndCountriesSection />
    </HomeBox>
  );
}
