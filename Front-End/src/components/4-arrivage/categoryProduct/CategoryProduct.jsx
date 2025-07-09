import './categoryProduct.css';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { gsap } from 'gsap';
import { Link, useParams } from 'react-router-dom';

const categories = {
    moniteur: ['Msi', 'Samsung', 'Asus'],
    pcGamer: ['PcBureauGamer'],
    workstation: ['WorkstationAmd', 'WorkstationIntel'],
    gaming: ['Clavier', 'Souris', 'Casque'],
    meuble: ['ChaiseGamer', 'BureauGamer', 'Chaise&Bureau'],
    accessoire: ['Microphone', 'HautParleur', 'Webcam'],
    stockage: ['Hdd', 'Ssd'],
    composant: ['CarteMere', 'CarteGraphique'],
    pcPortable: ['PcPortableGamer', 'PcPortableProfessionel']
};

const CategoryProduct = () => {
    const { title, type } = useParams(); 
    const [products, setProducts] = useState([]);
    const containerRef = useRef();

    const details = [
        { "Meilleur prix au Maroc": "✓" },
        { "12 mois de garantie": "✓" },
        { "Livraison 24h": "✓" }
    ];

    useEffect(() => {
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

    // Determine the valid categories for the given title
    

    useEffect(() => {
        if (products.length === 0) return;

        const ctx = gsap.context(() => {
            gsap.from(".Cp-card", {
                opacity: 0,
                y: 50,
                duration: 0.6,
                stagger: { amount: 0.4, from: "random" },
                ease: "power3.out"
            });

            gsap.utils.toArray(".Cp-card").forEach(card => {
                const img = card.querySelector('.Cp-img');

                const tl = gsap.timeline({ paused: true });
                tl.to(card, {
                    y: -8,
                    scale: 1.02,
                    boxShadow: "0 12px 20px rgba(0,0,0,0.15)",
                    duration: 0.3,
                    ease: "power2.out"
                }).to(img, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: "power2.out"
                }, 0);

                card.addEventListener('mouseenter', () => tl.play());
                card.addEventListener('mouseleave', () => tl.reverse());
            });
        }, containerRef);

        return () => ctx.revert();
    }, [products]);

    return (
        <div className="Cp-container" ref={containerRef}>
            {products.length > 0 ? (
                products.map((product, index) => (
                    <div key={index} className="Cp-card">
                        <Link
                            to={type
                                ? `/product/${title}/${product.category}/${product.title.replace(/\s+/g, '-')}`
                                : `/product/${title}/${product.title.replace(/\s+/g, '-')}`
                            }
                            state={{ id: product._id }}
                        >
                            <div className="Cp-img-container">
                                <img className="Cp-img" src={product.img} alt={product.title} />
                            </div>
                            <div className='Cp-content'>
                                <h4 className="Cp-title">{product.title}</h4>
                                <div className='Cp-prices'>
                                    {product.oldPrice > product.price && (
                                        <p className="Cp-oldPrice">{product.oldPrice}.د.م</p>
                                    )}
                                    <p className="Cp-price">{product.price}.د.م</p>
                                </div>
                                {product.availability ? (
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
                        </Link>
                        <button className='flex button-insert-CP'>
                            <span className='sent-insert-CP'>Ajouter au Panier</span>
                            <span className='icon-add'></span>
                        </button>
                    </div>
                ))
            ) : (
                <p className="no-products">Aucun produit trouvé.</p>
            )}
        </div>
    );
};

export default CategoryProduct;
