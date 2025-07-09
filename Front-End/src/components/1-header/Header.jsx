import { useState } from 'react';
import './header.css';

const Header = () => {
    const [language, setLanguage] = useState('France');
    const [currency, setCurrency] = useState('Dirham(DHS)');

    return (
        <header className='flex'>
            <div className='flex header-contact'>
                <div className='flex header-phone'>
                    <span className='icon-phone'></span>
                    <span style={{ color: 'var(--main-red)' }}>Phone : </span>
                    (212) 681 271 190
                </div>
                <div className='flex header-email'>
                    <span className='icon-email'></span>
                    <span style={{ color: 'var(--main-red)' }}>Email : </span>
                    pcstorema@gmail.com
                </div>
            </div>
            
            <div className='flex header-info'>
                <div className='dropdown'>
                    <div className='dropdown-selected'>
                        {language} <span className='icon-keyboard_arrow_down'></span>
                    </div>
                    <div className='dropdown-options'>
                        <div onClick={() => setLanguage('France')}>France</div>
                        <div onClick={() => setLanguage('English')}>English</div>
                    </div>
                </div>

                <div className='dropdown'>
                    <div className='dropdown-selected'>
                        {currency} <span className='icon-keyboard_arrow_down'></span>
                    </div>
                    <div className='dropdown-options'>
                        <div onClick={() => setCurrency('Dirham(DHS)')}>Dirham(DHS)</div>
                        <div onClick={() => setCurrency('Euro(EUR)')}>Euro(EUR)</div>
                    </div>
                </div>

                <div className='flex account'>
                    <span className='icon-lock'></span>
                    My Account
                </div>
            </div>
        </header>
    );
};

export default Header;
