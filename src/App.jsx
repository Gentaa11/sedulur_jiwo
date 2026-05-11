import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ExpertSection from "./components/expertSection";
import Advantages from "./components/advantages";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen">
              <Navbar />
              <Header />
              <ExpertSection/>
              <Advantages/>
              <Footer/>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;