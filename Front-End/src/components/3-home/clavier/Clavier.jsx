import './clavier.css';
import React, { useState, useEffect } from 'react';
import clavier from '../../Clavier';
import { Carousel } from 'primereact/carousel';
import pub7 from '../../../../public/pub-7.webp'



const Clavier = () => {

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
            breakpoint: '1400px',
            numVisible: 3,
            numScroll: 3,
        },
        {
            breakpoint: '967px',
            numVisible: 3,
            numScroll: 2,
        },
        {
            breakpoint: '825px',
            numVisible: 3,
            numScroll: 2,
        },
        {
            breakpoint: '695px',
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
        <div className='flex produit-clavier'>
            <div key={product.id} className="product-item-clavier">
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
                <button className="flex button-insert-clavier">
                    <span className="sent-insert-clavier">Ajouter au Panier</span>
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
        <div className='flex items-clavier'>
            
            <div className='flex clavier-title'>
                <h2>Obtenez Clavier Gamer maroc pour votre Pc Gamer et profitez de la livraison à domicile à un prix abordable.
                </h2>
                <a className='go-to' href="">
                    Découvrir
                    <span style={{ position: 'relative', top: '3px' }} className='icon-keyboard_arrow_right'></span>
                </a>
            
            </div>
            <div className='flex W-carousel'>
                <Carousel
                    value={clavier}
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
                <div className='mini-pub'>
                    <div className='image-wrapper'>
                        <img src={pub7} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Clavier;