import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "../Home/Index";
import TechStack from "../TechStack/Index";
import Header from "../Header/Index";
import Contact from "../Contact/Index";
import About from "../About/Index";
import Projects from "../Projects/Index";
import NotFound from "./404";

const Router = () => {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <Header />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/About" />
          <Route element={<TechStack />} path="/TechStack" />
          <Route element={<Projects />} path="/Projects" />
          <Route element={<Contact />} path="/Contact" />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </HelmetProvider>
    </BrowserRouter>
  );
};
export default Router;
