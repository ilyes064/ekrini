import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Annonces from "./Annonces";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Categories from "./Categories";
import WhyUs from "./whyUs";
import Footer from "./Footer";
import Login from "./Login";
import Register from "./Register";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Categories />
              <WhyUs />
              <Footer />
            </>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/annonces" element={<Annonces />} />

      </Routes>
    </Router>
  );
}

export default App;
