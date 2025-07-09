import './head.css';
import { Link } from 'react-router-dom';

const Head = () => {
    const elements = [
        { ele: "https://africagaming.ma/wp-content/uploads/2023/10/moniteur-100x100.png", label: "Moniteurs" },
        { ele: "https://africagaming.ma/wp-content/uploads/2023/10/gaming-100x100.webp", label: "Gaming" },
        { ele: "https://africagaming.ma/wp-content/uploads/2023/10/console-100x100.png", label: "Console Jeux" },
        { ele: "https://africagaming.ma/wp-content/uploads/2023/10/bureau-100x100.png", label: "Bureaux" },
        { ele: "https://africagaming.ma/wp-content/uploads/2023/10/portable-100x100.png", label: "PC Portables" },
        { ele: "https://africagaming.ma/wp-content/uploads/2023/10/3937031-100x100.png", label: "Composants" },
        { ele: "https://africagaming.ma/wp-content/uploads/2023/10/computer-mouse-1-1-100x100.webp", label: "Souris" },
        { ele: "https://africagaming.ma/wp-content/uploads/2023/10/computer-1-100x100.webp", label: "PC Gamers" },
        { ele: "https://africagaming.ma/wp-content/uploads/2023/10/volant-100x100.png", label: "Accessoires" },
    ];

    return (
        <div id='head-category'>
            <div id='box'>
                <h1>Tous les produits</h1>
                <div className='arrHead-container'>
                    <div className='flex arrHead-scroll'>
                        {elements.map((item, index) => (
                            <div key={index} className="arrHead-item">
                                <img src={item.ele} alt={`categorie-${index}`} />
                                <p className="arrHead-label">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Head;
