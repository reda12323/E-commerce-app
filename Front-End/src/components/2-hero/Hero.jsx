import './hero.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    const [Categorie, setCategorie] = useState('ALL');
    const [Auto, setAuto] = useState(false);

    const handleOptionClick = (option) => {
        setCategorie(option); 
        setAuto(false); 
    };

    return (
        <section className='flex'>
            <div className='flex header-section'>
                <Link to='/'>
                <div>
                    <img className='logo' src="https://africagaming.ma/wp-content/uploads/2023/10/africa_gaming11.png" alt="" />
                </div>
                </Link>

                <div style={{marginTop:'15px'}} className='flex contenu-search-bar'>

                    <div className='input-capsule'>
                        <input type="text" placeholder='Chercher Des Produits' />
                    </div>

                    <div className='flex select-capsule'>
                        <div className='dropdown'>
                            <div className={`dropdown-selected ${Auto ? 'more-width' : ''}`} onClick={() => setAuto(!Auto)}>
                                {Categorie} <span className={`icon-keyboard_arrow_down ${Auto ? 'rotate' : ''}`}></span>
                            </div>

                            { Auto && (
                                <div className='flex dropdown-options'>
                                    <div onClick={() => handleOptionClick('Composants Pc')}>Composants Pc</div>
                                    <div onClick={() => handleOptionClick('Console Jeux')}>Console Jeux</div>
                                    <div onClick={() => handleOptionClick('Imprimante')}>Imprimante</div>
                                    <div onClick={() => handleOptionClick('Mobilier du PC')}>Mobilier du PC</div>
                                    <div onClick={() => handleOptionClick('Moniteurs PC')}>Moniteurs PC</div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='flex iconSearch-capsule'>
                        <span className='icon-search'></span>
                    </div>
                </div>

                <div style={{marginTop:'15px'}} className='flex contenu-shopping-cart'>
                    <div className='flex'>
                        <span className='icon-shopping-cart'></span>
                        <span className='lenght-shopping-cart'>0</span>
                    </div>
                    <div className='cart-price'>
                        <p id='cart'>My Card</p>
                        <p id='price'>0.00 DHS</p>
                    </div>
                </div>
            </div>

            {/* Responsive Search Bar */}

            <div style={{marginTop:'10px'}} className='flex responsive-contenu-search-bar'>

                    <div className='responsive-input-capsule'>
                        <input type="text" placeholder='Chercher Des Produits' />
                    </div>

                    <div className='flex responsive-select-capsule'>
                        <div className='dropdown'>
                            <div className={`responsive-dropdown-selected ${Auto ? 'more-width' : ''}`} onClick={() => setAuto(!Auto)}>
                                {Categorie} <span className={`icon-keyboard_arrow_down ${Auto ? 'rotate' : ''}`}></span>
                            </div>

                            { Auto && (
                                <div className='flex responsive-dropdown-options'>
                                    <div onClick={() => handleOptionClick('Composants Pc')}>Composants Pc</div>
                                    <div onClick={() => handleOptionClick('Console Jeux')}>Console Jeux</div>
                                    <div onClick={() => handleOptionClick('Imprimante')}>Imprimante</div>
                                    <div onClick={() => handleOptionClick('Mobilier du PC')}>Mobilier du PC</div>
                                    <div onClick={() => handleOptionClick('Moniteurs PC')}>Moniteurs PC</div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='flex responsive-iconSearch-capsule'>
                        <span className='icon-search'></span>
                    </div>
                </div>
        </section>
    );
}

export default Hero;
