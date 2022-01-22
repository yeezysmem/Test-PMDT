import "./App.css";
import ResumeCard from "./components/ResumeCard/ResumeCard";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <ResumeCard />
      </Container>
    </ThemeProvider>
  );
}

export default App;
