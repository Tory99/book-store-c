import { ThemeProvider } from "styled-components";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import ThemeSwitcher from "./components/header/ThemeSwitcher";
import { BookStoreThemeProvider, ThemeContext } from "./context/themeContext";


function App() {
  return (
    <BookStoreThemeProvider>
        <Layout>
          <Home />
        </Layout> 
    </BookStoreThemeProvider>
  );
}

export default App;