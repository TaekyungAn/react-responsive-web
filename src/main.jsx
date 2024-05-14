import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme.js";
import GlobalStyle from "./style/GlobalStyle.js";
import ScrollToTop from "./pages/Test.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <GlobalStyle />
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </ThemeProvider>
);
