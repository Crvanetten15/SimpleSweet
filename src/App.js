import './App.css';

// Components Needed for importing 
import Header from './components/Header.js';
import Home from './components/Home.js';
import Footer from './components/Footer.js';
import Gallery from "./components/PhotoGallery";
function App() {
  // const images = [
  //   { src: process.env.PUBLIC_URL + "/images/stock1.jpg", alt: "Image 1" },
  //   { src: process.env.PUBLIC_URL + "/images/stock2.jpg", alt: "Image 2" },
  //   { src: process.env.PUBLIC_URL + "/images/stock3.jpg", alt: "Image 3" },
  //   { src: process.env.PUBLIC_URL + "/images/stock1.jpg", alt: "Image 1" },
  //   { src: process.env.PUBLIC_URL + "/images/stock1.jpg", alt: "Image 2" },
  //   { src: process.env.PUBLIC_URL + "/images/stock1.jpg", alt: "Image 3" },
  //   { src: process.env.PUBLIC_URL + "/images/stock1.jpg", alt: "Image 1" },
  //   { src: process.env.PUBLIC_URL + "/images/stock1.jpg", alt: "Image 2" },
  //   { src: process.env.PUBLIC_URL + "/images/stock1.jpg", alt: "Image 3" },
  //   { src: process.env.PUBLIC_URL + "/images/stock1.jpg", alt: "Image 1" },
  //   { src: process.env.PUBLIC_URL + "/images/stock1.jpg", alt: "Image 2" },
  //   { src: process.env.PUBLIC_URL + "/images/stock1.jpg", alt: "Image 3" },
  //   // Add more image objects as needed
  // ];
  return (
    <>
      <Header />
      <Home />
      <Footer />
      {/* <Gallery images={images}/> */}
    </>
  );
}

export default App;
