import { Fragment } from "react";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";

import Router from "@/components/Router";
import DebugObserver from "@/state/tools/DebugObserver";
import { GlobalStyle } from "@/styles/global-style";
import { theme } from "@/styles/theme";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <DebugObserver />
          <Router />
        </RecoilRoot>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
