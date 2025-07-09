import './menu.css';
import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link

const Menu = () => {
    const [isHovered, setIsHovered] = useState(false);

    const getMarginTop = (itemsCount) => {
        switch (itemsCount) {
            case 1:
                return '0px';
            case 2:
                return '35px';
            case 3:
                return '68px';
            default:
                return '0px';
        }
    };

    return (
        <div className='flex menu'>
            <div className='flex menu-border'>
                <div
                    className='flex contenu-menu-border'
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {isHovered ? (
                        <span className='icon-close'></span>
                    ) : (
                        <span className='icon-menu'></span>
                    )}
                    <span className='border-menu-title'>ALL CATEGORIES</span>
                </div>

                <div className='flex menu-list'>
                    {/* Setup Complet */}
                    <div className='flex contenu-menu-list'>
                        <Link to="/category/SetupComplet" className='flex list'>Setup Complet</Link>
                        <span className='flex icon-keyboard_arrow_right'></span>
                    </div>

                    {/* Config Pc Gamer */}
                    <div className='flex contenu-menu-list pcGamer'>
                        <Link to="/category/pcGamer/PcBureauGamer" className='flex list'>Config Pc Gamer</Link>
                        <span className='flex icon-keyboard_arrow_right'></span>
                        <div className='second-menu-list' style={{ marginTop: getMarginTop(1) }}>
                            <Link to="/category/pcGamer/PcBureauGamer" className='detail-secondL list-pcGamer'>
                                Pc Bureau Gamer
                            </Link>
                            <span style={{ border: '1px solid white' }}></span>
                        </div>
                    </div>

                    {/* Workstation */}
                    <div className='flex contenu-menu-list workstation'>
                        <Link to="/category/workstation" className='flex list'>Workstation</Link>
                        <span className='flex icon-keyboard_arrow_right'></span>
                        <div className='second-menu-list' style={{ marginTop: getMarginTop(2) }}>
                            <Link to="/category/workstation/WorkstationAmd" className='detail-secondL list-workstation'>
                                Workstation AMD
                            </Link>
                            <hr />
                            <Link to="/category/workstation/WorkstationIntel" className='detail-secondL list-workstation'>
                                Workstation INTEL
                            </Link>
                        </div>
                    </div>

                    {/* Pc Portable */}
                    <div className='flex contenu-menu-list pcPortable'>
                        <Link to="/category/pcPortable" className='flex list'>Pc Portable</Link>
                        <span className='flex icon-keyboard_arrow_right'></span>
                        <div className='second-menu-list' style={{ marginTop: getMarginTop(2) }}>
                            <Link to="/category/pcPortable/PcPortableGamer" className='detail-secondL list-pcPortable'>
                                Pc Portable Gamer
                            </Link>
                            <hr />
                            <Link to="/category/pcPortable/PcPortableProfessionel" className='detail-secondL list-pcPortable'>
                                Pc Portable Professionel
                            </Link>
                        </div>
                    </div>

                    {/* Composant */}
                    <div className='flex contenu-menu-list composant'>
                        <Link to="/category/composant" className='flex list'>Composant</Link>
                        <span className='flex icon-keyboard_arrow_right'></span>
                        <div className='second-menu-list' style={{ marginTop: getMarginTop(2) }}>
                            <Link to="/category/composant/CarteMere" className='detail-secondL list-composant'>
                                Carte Mère
                            </Link>
                            <hr />
                            <Link to="/category/composant/CarteGraphique" className='detail-secondL list-composant'>
                                Carte Graphique
                            </Link>
                        </div>
                    </div>

                    {/* Stockage */}
                    <div className='flex contenu-menu-list stockage'>
                        <Link to="/category/stockage" className='flex list'>Stockage</Link>
                        <span className='flex icon-keyboard_arrow_right'></span>
                        <div className='second-menu-list' style={{ marginTop: getMarginTop(2) }}>
                            <Link to="/category/stockage/Hdd" className='detail-secondL list-stockage'>
                                HDD
                            </Link>
                            <hr />
                            <Link to="/category/stockage/Ssd" className='detail-secondL list-stockage'>
                                SSD
                            </Link>
                        </div>
                    </div>

                    {/* Gaming */}
                    <div className='flex contenu-menu-list gaming'>
                        <Link to="/category/gaming" className='flex list'>Gaming</Link>
                        <span className='flex icon-keyboard_arrow_right'></span>
                        <div className='second-menu-list' style={{ marginTop: getMarginTop(3) }}>
                            <Link to="/category/gaming/Clavier" className='detail-secondL list-gaming'>
                                Clavier
                            </Link>
                            <hr />
                            <Link to="/category/gaming/Souris" className='detail-secondL list-gaming'>
                                Souris
                            </Link>
                            <hr />
                            <Link to="/category/gaming/Casque" className='detail-secondL list-gaming'>
                                Casque
                            </Link>
                        </div>
                    </div>

                    {/* Meuble */}
                    <div className='flex contenu-menu-list meuble'>
                        <Link to="/category/meuble" className='flex list'>Meuble</Link>
                        <span className='flex icon-keyboard_arrow_right'></span>
                        <div className='second-menu-list' style={{ marginTop: getMarginTop(3) }}>
                            <Link to="/category/meuble/ChaiseGamer" className='detail-secondL list-meuble'>
                                Chaise Gamer
                            </Link>
                            <hr />
                            <Link to="/category/meuble/BureauGamer" className='detail-secondL list-meuble'>
                                Bureau Gamer
                            </Link>
                            <hr />
                            <Link to="/category/meuble/Chaise&Bureau" className='detail-secondL list-meuble'>
                                Chaise & Bureau
                            </Link>
                        </div>
                    </div>

                    {/* Moniteur */}
                    <div className='flex contenu-menu-list moniteur'>
                        <Link to="/category/moniteur" className='flex list'>Moniteur</Link>
                        <span className='flex icon-keyboard_arrow_right'></span>
                        <div className='second-menu-list' style={{ marginTop: getMarginTop(3) }}>
                            <Link to="/category/moniteur/Msi" className='detail-secondL list-moniteur'>
                                MSI
                            </Link>
                            <hr />
                            <Link to="/category/moniteur/Samsung" className='detail-secondL list-moniteur'>
                                SUMSUNG
                            </Link>
                            <hr />
                            <Link to="/category/moniteur/Asus" className='detail-secondL list-moniteur'>
                                ASUS
                            </Link>
                        </div>
                    </div>

                    {/* Accessoire */}
                    <div className='flex contenu-menu-list accessoire'>
                        <Link to="/category/accessoire" className='flex list'>Accessoire</Link>
                        <span className='flex icon-keyboard_arrow_right'></span>
                        <div className='second-menu-list' style={{ marginTop: getMarginTop(3) }}>
                            <Link to="/category/accessoire/Microphone" className='detail-secondL list-meuble'>
                                Microphone
                            </Link>
                            <hr />
                            <Link to="/category/accessoire/HautParleur" className='detail-secondL list-meuble'>
                                Haut-Parleur
                            </Link>
                            <hr />
                            <Link to="/category/accessoire/Webcam" className='detail-secondL list-meuble'>
                                Webcam
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;