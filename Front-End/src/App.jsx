import Home from "./components/3-home/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Arrivage from "./components/4-arrivage/Arrivage"
import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Category from "./components/6-category/Category";
import Product from "./components/7-product/Product";
import Conatact from "./components/8-contact/Contact";


function App() {

  return (

    <Router>
      <Header />
      <Hero />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arrivage" element={<Arrivage />} />
        <Route path="/category/:title" element={<Category />} />
        <Route path="/category/:title/:type" element={<Category />} />
        <Route path="/product/:title/:category/:name" element={<Product />} />
        <Route path="/product/:title/:name" element={<Product />} />
        <Route path="/contact" element={<Conatact />} />
      </Routes>
    </Router>

  )
}

export default App
