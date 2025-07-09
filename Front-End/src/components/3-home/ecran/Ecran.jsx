import './ecran.css';
import { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import ecran1 from '../../Ecran';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

const Ecran = () => {
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

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const productTemplate = (product) => (
        <div className='flex ecran-contenu'>
            <div className='flex ecran-item'>
                <img src={product.img} alt="" />
                <div className='flex ecran-semi-info'>
                    <h3>{product.title}</h3>
                    <p style={{ color: 'var(--main-red)', fontWeight: 600 }}>{product.price}</p>
                    <p style={{ color: 'var(--green-color)' }}>{product.availability}</p>
                </div>
            </div>
            <div className='flex ecran-bottom'>
                <span>
                    <FontAwesomeIcon icon={faList} />
                    <span className="list-text">List</span> 
                </span>
                <button className='flex ecran-button'>
                    <span className='ecran-insert'>Ajouter au Panier</span>
                    <span className='icon-add'></span>
                </button>
            </div>
        </div>
    );

    return (
        <div>
            <Carousel
                value={ecran1}
                numVisible={3}
                numScroll={3}
                responsiveOptions={responsiveOptions}
                itemTemplate={productTemplate}
                className="populaire-carousel"
                circular
                key={windowWidth}
            />
        </div>
    );
}

export default Ecran;
