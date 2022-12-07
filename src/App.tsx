import { Fragment } from "react";
import { ThemeProvider } from "styled-components";

import Router from "@/components/Router";
import { GlobalStyle } from "@/styles/global-style";
import { theme } from "@/styles/theme";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
