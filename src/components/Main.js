import React from 'react';
import Nav from './Nav';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Projects from './Projects';
import Blogs from './Blogs';

const Main = () => {
    return(
        <div className="main">
            <Nav />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/blogs" element={<Blogs/>} />
            </Routes>
        </div>
    );
};

export default Main;