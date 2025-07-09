import './responsive.css';
import { useState } from 'react';

const Responsive_Menu_NavBar = () => {
    const [Open, setOpen] = useState(false);
    const [activeList, setActiveList] = useState(null);
    const [Menu, setMenu] = useState(true)

    const handleListClick = (index) => {
        setActiveList(activeList === index ? null : index);
    };

    return (
        <div className="flex responsive_men_nav">
            <div className='flex responsive-part-one'>
                <span onClick={() => { setOpen(!Open) }} className="icon-menu"></span>
                <div>
                    <img className='responsive-logo' src="https://africagaming.ma/wp-content/uploads/2023/10/africa_gaming11.png" alt="" />
                </div>
            </div>

            <div className='flex responsive-contenu-shopping-cart'>
                <div className='flex'>
                    <span className='icon-shopping-cart'></span>
                    <span className='lenght-shopping-cart'>0</span>
                </div>
                <div className='responsive-cart-price'>
                    <p id='responsive-cart'>My Card</p>
                    <p id='responsive-price'>0.00 DHS</p>
                </div>
            </div>

            {Open && (
                <div className="dropdown-menu">
                    <div className='flex setup-dropdown'>
                        <div className='part-one-dropdown'>
                            <div className='flex dropdown-button'>
                                <button onClick={() => { setMenu(!Menu) }} id='categ' className={` ${Menu ? '' : 'Active'}`}>Categories</button>
                                <button onClick={() => { setMenu(!Menu) }} id='menu' className={` ${Menu ? 'Active' : ''}`}>Menu</button>
                            </div>
                            <div className='dropdown-list-categories'>
                                {
                                    Menu ? (
                                        <ul className='flex'>
                                            <li className='border-b'>
                                                <div className='flex dropdown-menu-list' onClick={() => handleListClick(0)}>
                                                    <span id='contenu-case'>Setup Complet</span>
                                                    <span className='icon-keyboard_arrow_right'></span>
                                                </div>
                                            </li>

                                            <li className='border-b'>
                                                <div className='flex dropdown-menu-list' onClick={() => handleListClick(1)}>
                                                    <span id='contenu-case'>Config Pc Gamer</span>
                                                    <span className={`icon-keyboard_arrow_right ${activeList === 1 ? 'rotate' : ''}`}></span>
                                                </div>
                                                <ul className={`dropdown-content ${activeList === 1 ? 'active' : ''}`}>
                                                    <li className='border-t'>
                                                        <div className='flex dropdown-menu-list'>
                                                            <span className='second' id='contenu-case'>Pc Bureau Gamer</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className='border-b'>
                                                <div className='flex dropdown-menu-list' onClick={() => handleListClick(2)}>
                                                    <span id='contenu-case'>Workstation</span>
                                                    <span className={`icon-keyboard_arrow_right ${activeList === 2 ? 'rotate' : ''}`}></span>
                                                </div>
                                                <ul className={`dropdown-content ${activeList === 2 ? 'active' : ''}`}>
                                                    <li className='border-t'>
                                                        <div className='flex dropdown-menu-list'>
                                                            <span className='second' id='contenu-case'>Workstation AMD</span>
                                                        </div>
                                                    </li>
                                                    <li className='border-t'>
                                                        <div className='flex dropdown-menu-list'>
                                                            <span className='second' id='contenu-case'>Workstation INTEL</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className='border-b'>
                                                <div className='flex dropdown-menu-list' onClick={() => handleListClick(3)}>
                                                    <span id='contenu-case'>Pc Portable</span>
                                                    <span className={`icon-keyboard_arrow_right ${activeList === 3 ? 'rotate' : ''}`}></span>
                                                </div>
                                                <ul className={`dropdown-content ${activeList === 3 ? 'active' : ''}`}>
                                                    <li className='border-t'>
                                                        <div className='flex dropdown-menu-list'>
                                                            <span className='second' id='contenu-case'>Pc Portable Gamer</span>
                                                        </div>
                                                    </li>
                                                    <li className='border-t'>
                                                        <div className='flex dropdown-menu-list'>
                                                            <span className='second' id='contenu-case'>Pc Portable Professionel</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className='border-b'>
                                                <div className='flex dropdown-menu-list' onClick={() => handleListClick(4)}>
                                                    <span id='contenu-case'>Composant</span>
                                                    <span className={`icon-keyboard_arrow_right ${activeList === 4 ? 'rotate' : ''}`}></span>
                                                </div>
                                                <ul className={`dropdown-content ${activeList === 4 ? 'active' : ''}`}>
                                                    <li className='border-t'>
                                                        <div className='flex dropdown-menu-list'>
                                                            <span className='second' id='contenu-case'>Carte Mère</span>
                                                        </div>
                                                    </li>
                                                    <li className='border-t'>
                                                        <div className='flex dropdown-menu-list'>
                                                            <span className='second' id='contenu-case'>Carte Graphique</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className='border-b'>
                                                <div className='flex dropdown-menu-list' onClick={() => handleListClick(5)}>
                                                    <span id='contenu-case'>Stockage</span>
                                                    <span className={`icon-keyboard_arrow_right ${activeList === 5 ? 'rotate' : ''}`}></span>
                                                </div>
                                                <ul className={`dropdown-content ${activeList === 5 ? 'active' : ''}`}>
                                                    <li className='border-t'>
                                                        <div className='flex dropdown-menu-list'>
                                                            <span className='second' id='contenu-case'>HDD</span>
                                                        </div>
                                                    </li>
                                                    <li className='border-t'>
                                                        <div className='flex dropdown-menu-list'>
                                                            <span className='second' id='contenu-case'>SSD</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className='border-b'>
                                                <div className='flex dropdown-menu-list' onClick={() => handleListClick(6)}>
                                                    <span id='contenu-case'>Gaming</span>
                                                    <span className={`icon-keyboard_arrow_right ${activeList === 6 ? 'rotate' : ''}`}></span>
                                                </div>
                                                <ul className={`dropdown-content ${activeList === 6 ? 'active' : ''}`}>
                                                    <li className='border-t'>
                                                        <div className='flex dropdown-menu-list'>
                                                            <span className='second' id='contenu-case'>Clavier</span>
                                                        </div>
                                                    </li>
                                                    <li className='border-t'>
                                                        <div className='flex dropdown-menu-list'>
                                                            <span className='second' id='contenu-case'>Souris</span>
                                                        </div>
                                                    </li>
                                                    <li className='border-t'>
                                                        <div className='flex dropdown-menu-list'>
                                                            <span className='second' id='contenu-case'>Casque</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className='border-b'>
                                                <div className='flex dropdown-menu-list' onClick={() => handleListClick(7)}>
                                                    <span id='contenu-case'>Meuble</span>
                                                    <span className={`icon-keyboard_arrow_right ${activeList === 7 ? 'rotate' : ''}`}></span>
                                                </div>
                                                <ul className={`dropdown-content ${activeList === 7 ? 'active' : ''}`}>
                                                    <li className='border-t'>
                                                        <div className='flex dropdown-menu-list'>
                                                            <span className='second' id='contenu-case'>Chaise Gamer</span>
                                                        </div>
                                                    </li>
                                                    <li className='border-t'>
                                                        <div className='flex dropdown-menu-list'>
                                                            <span className='second' id='contenu-case'>Bureau Gamer</span>
                                                        </div>
                                                    </li>
                                                    <li className='border-t'>
                                                        <div className='flex dropdown-menu-list'>
                                                            <span className='second' id='contenu-case'>Chaise & Bureau</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className='border-b'>
                                                <div className='flex dropdown-menu-list' onClick={() => handleListClick(8)}>
                                                    <span id='contenu-case'>Moniteur</span>
                                                    <span className={`icon-keyboard_arrow_right ${activeList === 8 ? 'rotate' : ''}`}></span>
                                                </div>
                                                <ul className={`dropdown-content ${activeList === 8 ? 'active' : ''}`}>
                                                    <li className='border-t'>
                                                        <div className='flex dropdown-menu-list'>
                                                            <span className='second' id='contenu-case'>MSI</span>
                                                        </div>
                                                    </li>
                                                    <li className='border-t'>
                                                        <div className='flex dropdown-menu-list'>
                                                            <span className='second' id='contenu-case'>SAMSUNG</span>
                                                        </div>
                                                    </li>
                                                    <li className='border-t'>
                                                        <div className='flex dropdown-menu-list'>
                                                            <span className='second' id='contenu-case'>ASUS</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className='border-b'>
                                                <div className='flex dropdown-menu-list' onClick={() => handleListClick(9)}>
                                                    <span id='contenu-case'>Accessoire</span>
                                                    <span className={`icon-keyboard_arrow_right ${activeList === 9 ? 'rotate' : ''}`}></span>
                                                </div>
                                                <ul className={`dropdown-content ${activeList === 9 ? 'active' : ''}`}>
                                                    <li className='border-t'>
                                                        <div className='flex dropdown-menu-list'>
                                                            <span className='second' id='contenu-case'>Microphone</span>
                                                        </div>
                                                    </li>
                                                    <li className='border-t'>
                                                        <div className='flex dropdown-menu-list'>
                                                            <span className='second' id='contenu-case'>Haut-Parleur</span>
                                                        </div>
                                                    </li>
                                                    <li className='border-t'>
                                                        <div className='flex dropdown-menu-list'>
                                                            <span className='second' id='contenu-case'>Webcam</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>


                                        </ul>
                                    ) : (
                                        <ul className='flex'>
                                            <li className='border-b'>
                                                <div className='flex dropdown-menu-list' onClick={() => handleListClick(0)}>
                                                    <span className='navbar' id='contenu-case'>Accueil</span>
                                                </div>
                                            </li>
                                            {/* <li className='border-b'>
                                                <div className='flex dropdown-menu-list' onClick={() => handleListClick(0)}>
                                                    <span className='navbar' id='contenu-case'>EN ARRIVAGE</span>
                                                </div>
                                            </li> */}
                                            <li className='border-b'>
                                                <div className='flex dropdown-menu-list' onClick={() => handleListClick(0)}>
                                                    <span className='navbar' id='contenu-case'>NOUVEL ARRIVAGE</span>
                                                </div>
                                            </li>
                                            <li className='border-b'>
                                                <div className='flex dropdown-menu-list' onClick={() => handleListClick(0)}>
                                                    <span className='navbar' id='contenu-case'>PROMOTION</span>
                                                </div>
                                            </li>
                                            <li className='border-b'>
                                                <div className='flex dropdown-menu-list' onClick={() => handleListClick(0)}>
                                                    <span className='navbar' id='contenu-case'>À Propos</span>
                                                </div>
                                            </li>
                                            <li className='border-b'>
                                                <div className='flex dropdown-menu-list' onClick={() => handleListClick(0)}>
                                                    <span className='navbar' id='contenu-case'>Contacte</span>
                                                </div>
                                            </li>
                                        </ul>
                                    )
                                }
                            </div>
                            <div className='dropdown-list-menu'>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => { setOpen(!Open) }} className='bgc-Nclair' >
                        <div onClick={() => { setOpen(!Open) }} className='flex part-two-close'>
                            <span className='icon-close'></span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Responsive_Menu_NavBar;
