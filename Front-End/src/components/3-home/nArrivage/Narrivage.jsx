import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './narriv.css';
import pub1 from '../../../../public/pub-1.webp';
import pub2 from '../../../../public/pub-2.webp';
import { Link, useParams } from 'react-router-dom';


const Narrivage = () => {
    const [products, setProducts] = useState([]);
    const { title, type } = useParams(); 


    const details = [
        { "Meilleur prix au Maroc": "✓" },
        { "12 mois de garantie": "✓" },
        { "Livraison 24h": "✓" }
    ];

    useEffect(() => {
        // Fetch products from the backend
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className='full-Narrivage'>
            <div className='Narrivage'>
                <div>
                    <p className='title'>Nouvel Arrivage</p>
                    <p className='title'>Achetez votre Gaming Pc Meilleur prix au Maroc, livraison rapide à domicile.</p>
                </div>
                <div className='flex main-border'>
                    <div>
                        <img className='img-liv' src={pub1} alt="" />
                    </div>
                    {products.map((item, index) => (
                        <div
                            key={index}
                            className="product-item"
                        >
                            <Link
                            to={type
                                ? `/product/${title}/${item.category}/${item.title.replace(/\s+/g, '-')}`
                                : `/product/${item.category}/${item.title.replace(/\s+/g, '-')}`
                            }
                            state={{ id: item._id }}>


<img src={item.img} alt={item.title} />
                            <div className='content'></div>
                            <div className='Cp-content'>
                                <h4 className="Cp-title">{item.title}</h4>

                                <div className='Cp-prices'>
                                    {item.oldPrice > item.price && (
                                        <p className="Cp-oldPrice">{item.oldPrice}.د.م</p>
                                    )}
                                    <p className="Cp-price">{item.price}.د.م</p>
                                </div>

                                {item.availability ? (
                                    <p className="Cp-available">In Stock</p>
                                ) : (
                                    <p className="Cp-outOfStock">Out of stock</p>
                                )}

                                <ul className="Cp-details">
                                    {details.map((detail, index) => (
                                        <li key={index} className="Cp-detail-item">
                                            <span className="Cp-checkmark">✓</span>
                                            {Object.keys(detail)[0]}
                                        </li>
                                    ))}
                                </ul>

                            </div>
                            <button className='flex button-insert'>
                                <span className='sent-insert'>Ajouter au Panier</span>
                                <span className='icon-add'></span>
                            </button>

                            </Link>
                        </div>
                    ))}
                    <div>
                        <img className='img-liv' src={pub2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Narrivage;