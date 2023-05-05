import {FC} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../Home/Home.tsx";
import TechStack from "../TechStack/TechStack.tsx";
import Header from "../Header/Header.tsx";
import Contact from "../Contact/Contact.tsx";
import About from "../About/About.tsx";
import Projects from "../Projects/Projects.tsx";
import {HelmetProvider} from 'react-helmet-async';
import NotFound from "../404.tsx";


const Router: FC = () => {

    return (
        <BrowserRouter basename="/Portfolio">
            <HelmetProvider>
                <Header/>
                <Routes>
                    <Route element={<Home/>} path='/'/>
                    <Route element={<About/>} path='/About'/>
                    <Route element={<TechStack/>} path='/TechStack'/>
                    <Route element={<Projects/>} path='/Projects'/>
                    <Route element={<Contact/>} path='/Contact'/>
                    <Route element={<NotFound/>} path='*'/>
                </Routes>
            </HelmetProvider>
        </BrowserRouter>
    )
}
export default Router;