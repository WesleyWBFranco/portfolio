import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import StartCanvas from "./components/canvas/Stars"
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import About from "./components/sections/About";

const Body = styled.div`
  background-color: ${({theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden; 
  position: relative;
`;


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar />
        <Body>
          <StartCanvas /> 
          <Hero />
          <About/>
          <Skills/>
          <Experience/>
          <Projects/>
          <Contact/>
          <Footer />
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;