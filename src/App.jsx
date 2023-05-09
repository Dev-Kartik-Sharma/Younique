import theme from "./themes/theme";
import { ThemeProvider } from "@mui/material";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <HomePage />
      </ThemeProvider>
    </>
  );
}

export default App;
