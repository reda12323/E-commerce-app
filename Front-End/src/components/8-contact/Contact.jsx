import './contact.css';
import MidContact from './midContact/MidContact';
import Menu from '../3-home/menu&nav/Menu';
import NavBar from '../3-home/menu&nav/NavBar';
import Responsive_Menu_NavBar from '../3-home/menu&nav/Responsive_Menu_NavBar';
import Emplacement from './emplacement/Emplacement'
const Conatact = () => {
    return (
        <div className='main-Contact'>
           <div className='full-navbar'>
                <div>
                    <Menu/>
                </div>
                <div>
                    <NavBar />
                </div>
            </div>
            <div>
                <Responsive_Menu_NavBar />
            </div>
            <div>
                <Emplacement />
            </div>
            <div>
                <MidContact />
            </div>
            {/* <div>
                <Footer />
            </div>  */}
        </div>
    );
}
 
export default Conatact;