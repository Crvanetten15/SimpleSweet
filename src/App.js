
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Nav from './components/Nav.jsx';
import Home from './pages/Home.jsx';
import Gallery from "./pages/Gallery.jsx";
import PageNotFound from './pages/PageNotFound.jsx';
import Footer from "./components/Footer.jsx";

function App() {

  return (
    <>
    <Router>
        <Nav />
        <div className="container">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="*" element={<PageNotFound />} />
        </Routes>
        </div>
        
        <Footer />
    </Router>
    
    
    
    </>

  );

}

export default App;
