import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./__styles__/GlobalStyles";
import theme from "./__styles__/DefaultTheme";


class Main extends React.Component {
  render() {
    return (

      <ThemeProvider theme={theme}>
        <StyledPage>
          <StyledContent>
            <GlobalStyles />
            <StyledText>
              Container App

            </StyledText>
          </StyledContent>
        </StyledPage>
      </ThemeProvider>

    );
  }
}

export default Main;

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: ${props => props.theme.Gray1};
  background-color: ${props => props.theme.Blue5};
`;

// const StyledHeaderContainer = styled.section`
//   position: fixed;
//   top: 0;
//   min-width: 100%;
// `;

const StyledContent = styled.main`
  background-color: ${props => props.theme.White1};
  flex: 1 0 auto;
  margin: 2%;
`;

const StyledText = styled.div`
  font-size: 3rem;
  color: ${props => props.theme.Blue3};
  text-align: center;
`

// const StyledFooterContainer = styled.section`
//   flex-shrink: 0;
// `;