import { useState, useEffect } from 'react';
import './carousel.css';

const images = [
    '/imgcasual1.png',
    '/imgcasual2.png',
    '/imgcasual3.png',
];

const ImageCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); 

        return () => clearInterval(interval); 
    }, []);

    return (
        <div className="carousel-wrapper">
            <div className="carousel-container">
                {images.map((image, index) => (
                    <div
                        className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
                        key={index}
                        style={{ backgroundImage: `url(${image})` }}
                    ></div>
                ))}
            </div>

            <div className="carousel-dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)} 
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;
