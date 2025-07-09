import React, { useState, useEffect } from 'react';
import './populaire.css';
import stock2 from '../../Stock2';
import { Carousel } from 'primereact/carousel';
import pub3 from '../../../../public/pub-3.webp'

const ProPopulaire = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const responsiveOptions = [
        {
            breakpoint: '2000px',
            numVisible: 5,
            numScroll: 3,
        },
        {
            breakpoint: '1660px',
            numVisible: 4,
            numScroll: 4,
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 3,
        },
        {
            breakpoint: '967px',
            numVisible: 2,
            numScroll: 2,
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1,
        },
    ];

    const productTemplate = (product) => (
        <div className='flex produit-populaire'>
            <div key={product.id} className="product-item">
                <img src={product.img} alt={product.title} />
                <div className="content"></div>
                <div className="product-semi-info">
                    <h3>{product.title}</h3>
                    <p style={{ color: 'var(--main-red)', fontWeight: 600 }}>{product.price}</p>
                    <p style={{ color: 'var(--green-color)' }}>{product.availability}</p>
                    <ul className="flex product-semi-info li">
                        {product.details.map((detail, idx) => (
                            <li
                                style={{ color: '#4e4e4e' }}
                                key={idx}
                            >
                                <span
                                    style={{
                                        color: 'var(--green-color)',
                                        fontSize: '12px',
                                        marginRight: '5px',
                                    }}
                                >
                                    ✓
                                </span>
                                {detail}
                            </li>
                        ))}
                    </ul>
                </div>
                <button className="flex button-insert">
                    <span className="sent-insert">Ajouter au Panier</span>
                    <span className="icon-add"></span>
                </button>
            </div>
        </div>
    );

    const onCarouselPageChange = (e) => {
        setActiveIndex(e.page);
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth); 
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="populaire-container">
            <div className='part-1-populaire'>
                <div className='capsule-of-title'>
                    <p className='title'>PC Gamer Maroc : Les meilleurs PC gamer au Maroc au meilleur prix !</p>
                </div>
                <div className='flex second-title'>
                    <div className='class-1'>Produit Populaire Gamer</div>
                    <div className='flex categorie-populaire'>
                        <span>Carte Mère</span>
                        <span>Casque Gamer</span>
                        <span>Disques SSD</span>
                        <span>Mobilier du PC</span>
                    </div>
                    <div className='T-catego'>Tous les Categories</div>
                </div>
            </div>
            <div className='straight-line'>
                <div className='flex pubs'>
                    <span style={{
                        fontSize: "1.7rem", fontWeight: '600'
                    }}>
                        PC Gamer Intel
                    </span>
                    <img src={pub3} alt="" />
                </div>
                <div className='W-carousel'>
                    <Carousel
                        value={stock2}
                        numVisible={3}
                        numScroll={3}
                        responsiveOptions={responsiveOptions}
                        itemTemplate={productTemplate}
                        className="populaire-carousel"
                        circular
                        activeIndex={activeIndex}
                        onPage={onCarouselPageChange}
                        key={windowWidth} 
                    />
                </div>
            </div>
        </div>
    );
};

export default ProPopulaire;
