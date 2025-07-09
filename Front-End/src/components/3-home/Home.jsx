import Footer from '../5-footer/Footer';
import Avantage from './avantage/Avantage';
import Chaise from './chaise/Chaise';
import Clavier from './clavier/Clavier';
import Publi from './clavier/Publi';
import Ecran from './ecran/Ecran';
import Title from './ecran/Title';
import './home.css'
import ImageCarousel from './imageCarousel/ImageCarousel';
import Menu from './menu&nav/Menu';
import NavBar from './menu&nav/NavBar';
import Responsive_Menu_NavBar from './menu&nav/Responsive_Menu_NavBar';
import Narrivage from './nArrivage/Narrivage';
import ProPopulaire from './populaire/ProPopulaire';


const Home = () => {
    return (
        <div className='home'>
            <div className='full-navbar'>
                <div>
                    <Menu />
                </div>
                <div>
                    <NavBar />
                </div>
            </div>
            
            <div className='full-m-n'>
                <Responsive_Menu_NavBar />
            </div>
            <div style={{marginBottom:'80px'}}>
                <ImageCarousel />
            </div>
            <div>
                <Narrivage />
            </div>
            <div>
                <ProPopulaire />
            </div>
            <div>
                <Chaise />
            </div>
            <div>
                <Title />
                <Ecran />
            </div>
            <div>
                <Publi />
                <Clavier />
            </div>
            <div>
                <Avantage />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Home;