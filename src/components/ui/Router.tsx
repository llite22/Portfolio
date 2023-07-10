import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "../Home";
import TechStack from "../TechStack";
import Header from "../Header";
import Contact from "../Contact";
import About from "../About";
import Projects from "../Projects";
import NotFound from "./404";

const Router: FC = () => {
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
