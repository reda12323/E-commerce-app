import './head.css';
import { Link } from 'react-router-dom';

const addSpaces = (str) => {
    return str ? str.replace(/([A-Z])/g, ' $1').trim() : '';
};

const Head = ({ type, title }) => {
    console.log('Head Props:', { type, title }); // Debugging

    return (
        <div id='head-category'>
            <div id='box'>
                <div className="breadcrumbs flex">
                    <Link id='breadcrumbs-Link' to="/">HOME</Link>
                    <span> • </span>
                    <Link id='breadcrumbs-Link' to={`/category/${title}`}>{title}</Link>
                    {type && (
                        <>
                            <span> • </span>
                            <span>{addSpaces(type)}</span>
                        </>
                    )}
                </div>
                <h1>{type ? addSpaces(type) : title}</h1>
                <div className="breadcrumbs-paragraphe">
                    Libérez la puissance du jeu en déplacement avec nos 
                    <strong> {type ? addSpaces(type) : title}</strong> au <strong>meilleur prix</strong> au <strong>Maroc</strong>. 
                    <strong>Livraison partout au Maroc</strong> pour une expérience gaming nomade exceptionnelle.
                </div>
            </div>
        </div>
    );
};

export default Head;