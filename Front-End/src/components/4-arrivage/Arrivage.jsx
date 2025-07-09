import Menu from '../3-home/menu&nav/Menu';
import NavBar from '../3-home/menu&nav/NavBar';
import Responsive_Menu_NavBar from '../3-home/menu&nav/Responsive_Menu_NavBar';
import './arrivage.css';
import Head from './head/Head';
import ConerMenu from '../6-category/cornerMenu/CornerMenu';
import CategoryProduct from './categoryProduct/CategoryProduct';


const Arrivage = () => {
    return (
        <div className='arrivage'>
            <div className='full-navbar'>
                <div>
                    <Menu />
                </div>
                <div>
                    <NavBar />
                </div>
            </div>
            <div>
                <Responsive_Menu_NavBar />
            </div>
            <div>
                <Head/>
            </div>
            <div className='flex category-contenu'>
                <ConerMenu />
                <CategoryProduct />
            </div>
        </div>
    );
}

export default Arrivage;