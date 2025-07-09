import Menu from '../3-home/menu&nav/Menu';
import NavBar from '../3-home/menu&nav/NavBar';
import Responsive_Menu_NavBar from '../3-home/menu&nav/Responsive_Menu_NavBar';
import './product.css'
import PorductCard from './productCard/ProductCard';
import { useParams, useLocation } from 'react-router-dom';
import Footer from '../5-footer/Footer';
import RelatedProducts from './relatedProduct/RelatedProductsCS';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Product = () => {
    const {title, category, name } = useParams();
    const location = useLocation();
    const productId = location.state?.id;
    const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    fetchProducts();
}, []);

if (loading) return <div>Loading...</div>;
if (error) return <div>Error loading products</div>;

    return (
        <div className='main-Product'>
            <div className='full-navbar'>
                <div>
                    <Menu />
                </div>
                <div>
                    <NavBar />
                </div>
            </div>
            <div>
                <Responsive_Menu_NavBar />
            </div>
            <div>
                <PorductCard title={title} id={productId} name={name} category={category} />
            </div>
            <div>
                <RelatedProducts products={products} currentProductId={productId} />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Product;