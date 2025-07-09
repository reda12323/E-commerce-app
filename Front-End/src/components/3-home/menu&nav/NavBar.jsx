import { NavLink } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
    return (
        <div className='flex navbar-contenu'>
            <ul className='flex'>
                <li id='li'>
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
                    >
                        <span className='icon-home'></span>
                        <span>Accueil</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/arrivage"
                        className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
                    >
                        <span>EN ARRIVAGE</span>
                    </NavLink>
                </li>
                {/* <li>
                    <NavLink
                        to="/nouvel-arrivage"
                        className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
                    >
                        <span>NOUVEL ARRIVAGE</span>
                    </NavLink>
                </li> */}
                <li>
                    <NavLink
                        to="/promotion"
                        className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
                    >
                        <span>PROMOTION</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/apropos"
                        className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
                    >
                        <span>À Propos</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
                    >
                        <span>Contacte</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;
