import Menu from '../3-home/menu&nav/Menu';
import NavBar from '../3-home/menu&nav/NavBar';
import Responsive_Menu_NavBar from '../3-home/menu&nav/Responsive_Menu_NavBar';
import { useParams } from 'react-router-dom';
import './category.css';
import Head from './head/Head';
import ConerMenu from './cornerMenu/CornerMenu';
import CategoryProduct from './categoryProduct/CategoryProduct';

const Category = () => {
    const { title,type } = useParams();

    return (
        <div className='category'>
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
                <Head type={type} title={title} />
            </div>
            <div className='flex category-contenu'>
                <ConerMenu />
                <CategoryProduct />
            </div>
        </div>
    );
}

export default Category;