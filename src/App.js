import "./App.css";
import PostsList from "./components/PostsList/PostsList";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <CssBaseline />
      <Container>
        <PostsList />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
