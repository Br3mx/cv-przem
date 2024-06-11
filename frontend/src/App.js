import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout/MainLayout";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import NoFound from "./components/pages/NoFound/NoFound";
const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoFound />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
