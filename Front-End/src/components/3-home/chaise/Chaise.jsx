import './chaise.css';
import chaise from '../../Chaise';
import pub4 from '../../../../public/pub-4.webp';
import pub5 from '../../../../public/pub-5.webp';


const Chaise = () => {
    return (
        <div className="chaise-container">
            <div className='flex chaise-title'>
                <h1>Chaise Gamer Maroc</h1>
                <a className='go-to' href="">
                    Découvrir
                    <span style={{ position: 'relative', top: '3px' }} className='icon-keyboard_arrow_right'></span>
                </a>
            </div>
            <div className='flex nav-chaise'>
                {chaise.map((ele, index) => (
                    <div className='box-chaise' key={index}>
                        <div className='flex'>
                            <div className='chaise'>
                                <img src={ele.img} alt="" />
                            </div>
                            <div className='flex Rhalf-info'>
                                <p id='title'>{ele.title}</p>
                                <p id='price'>{ele.price}</p>
                                <p
                                    style={{
                                        color: ele.availability === 'In stock:' ? 'green' : 'red',
                                        textTransform: 'uppercase', fontSize: 12.5, fontWeight: 500
                                    }}
                                >
                                    {ele.availability}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex decoration">
                <div className="image-wrapper">
                    <img
                        src={pub5}
                        alt=""
                    />
                </div>
                <div className="image-wrapper">
                    <img
                        src={pub4}
                        alt=""
                    />
                </div>
            </div>

        </div>
    );
};

export default Chaise;
