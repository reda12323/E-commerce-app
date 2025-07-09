import './title.css';
import { useState, useEffect } from 'react';

const Title = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        // Check if an end time exists in local storage
        const storedEndTime = localStorage.getItem('promoEndTime');
        let endTime = storedEndTime ? new Date(storedEndTime) : null;

        if (!endTime || new Date() > endTime) {
            endTime = new Date();
            endTime.setDate(endTime.getDate() + 6);
            localStorage.setItem('promoEndTime', endTime);
        }

        const timer = setInterval(() => {
            const now = new Date();
            const diff = endTime - now;

            if (diff <= 0) {
                endTime = new Date();
                endTime.setDate(endTime.getDate() + 6);
                localStorage.setItem('promoEndTime', endTime);
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
       
        <div className='header-ecran'>
            <div className='flex title-moniteur'>
                <h2>Moniteur</h2>
                <p>Soldes jusqu'à 30 % de réduction sur certains articles Achat de Votre LG UltraGear Maroc sur Africa Gaming en livraison rapide à domicile ou en magasin Au mailleure Prix Maroc.</p>
            </div>
            <div className='flex time-promo'>
                <div className='flex offer-promo'>
                    <p>Dépêchez-vous de profiter de l'offre.</p>
                    <p className='flex'>
                        <span>{timeLeft.days}</span>
                        <div>:</div>
                        <span>{timeLeft.hours}</span>
                        <div>:</div>
                        <span>{timeLeft.minutes}</span>
                        <div>:</div>
                        <span>{timeLeft.seconds}</span>
                    </p>
                </div>
                <a className='go-to' href="">
                    Découvrir
                    <span style={{ position: 'relative', top: '3px' }} className='icon-keyboard_arrow_right'></span>
                </a>
            </div>
        </div>
    );
}
 
export default Title;