import { StyledNavList, StyledNavLink } from "./styled";

const Navigation = () => (
  <StyledNavList>
    <li>
      <StyledNavLink to="/zadania">Zadania</StyledNavLink>
    </li>
    <li>
      <StyledNavLink to="/autor">O autorze</StyledNavLink>
    </li>
  </StyledNavList>
);

export default Navigation;
