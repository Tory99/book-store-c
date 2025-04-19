import styled, { DefaultTheme } from "styled-components";

// Extend DefaultTheme to include the color property
declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      background: string;
      primary: string;
    };
  }
}

function Header() {
    return (
    <HeaderStyle>
      <h1>
        Header
      </h1>
    </HeaderStyle>
    );
  }
  
const HeaderStyle = styled.header`
  background-color: ${({theme}) => theme.color.background};

  h1 {
    color: ${({theme}) => theme.color.primary};
  }
`;

export default Header;
  