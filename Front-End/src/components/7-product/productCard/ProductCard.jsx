import { useState, useEffect } from 'react';
import axios from 'axios';
import './productCard.css';
import { FaHeart, FaMinus, FaPlus, FaShoppingCart } from 'react-icons/fa';
import { IoMdHeartEmpty } from "react-icons/io";
import Emplacement from '../emplacement/Emplacement';

import { useDispatch } from 'react-redux';
import { addToCart } from '../../2-hero/redux/cartSlice';


const ProductCard = ({ title, name, category, id }) => {
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState('');
    const [afficheDetails, setAfficheDetails] = useState(true);
    const dispatch = useDispatch();

    function Ajouter(e) {
        e.preventDefault();
        setQuantity((prevQuantity) => {
            if (prevQuantity < product.quantity) {
                return prevQuantity + 1;
            } else {
                return prevQuantity;
            }
        });
    }




    const handleAddToCart = () => {
        if (!product.availability) return;

        dispatch(addToCart({
            id: product._id,
            name: product.title,
            price: product.price,
            quantity: quantity,
        }));
    };



    function Moins(e) {
        e.preventDefault();
        setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
    }

    function AddPopularity(e) {
        e.preventDefault();
        alert("Like add to the product")
    }

    function Desc(e) {
        e.preventDefault();
        setAfficheDetails(true);
    }

    function Retour(e) {
        e.preventDefault();
        setAfficheDetails(false);
    }

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/products/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        if (id) {
            fetchProduct();
        }
    }, [id]);

    if (!product) {
        return <p>Loading product...</p>;
    }

    const handleThumbnailClick = (img) => {
        setSelectedImage(img);
    };


    return (
        <div className='Pro-Page'>
            <div> <Emplacement category={category} name={name} title={title} /> </div>
            <div className='Pro-Card-Desc'>
                <div>
                    <div className='Pro-Card'>
                        <div className='flex' id='Card-p' key={product._id}>
                            <div className='Card-img'>
                                <div className='container-Main-img'>
                                    <img id='Main-img' src={selectedImage || product.img} alt={product.title} />
                                </div>
                                <div className="thumbnail-container">
                                    <span className={`thumbnail ${(selectedImage || product.img) === product.img ? 'selected' : ''}`}
                                        onClick={() => handleThumbnailClick(product.img)}>
                                        <img src={product.img} />
                                    </span>
                                    <span className={`thumbnail ${(selectedImage || product.img) === product.img2 ? 'selected' : ''}`}
                                        onClick={() => handleThumbnailClick(product.img2)}>
                                        <img src={product.img2} />
                                    </span>
                                    <span className={`thumbnail ${(selectedImage || product.img) === product.img3 ? 'selected' : ''}`}
                                        onClick={() => handleThumbnailClick(product.img3)}>
                                        <img src={product.img3} />
                                    </span>
                                    <span className={`thumbnail ${(selectedImage || product.img) === product.img4 ? 'selected' : ''}`}
                                        onClick={() => handleThumbnailClick(product.img4)}>
                                        <img src={product.img4} />
                                    </span>
                                    <span className={`thumbnail ${(selectedImage || product.img) === product.img5 ? 'selected' : ''}`}
                                        onClick={() => handleThumbnailClick(product.img5)}>
                                        <img src={product.img5} />
                                    </span>
                                </div>
                            </div>
                            <div className='Card-details'>
                                <h3 className='C-D-title'>{product.title}</h3>
                                <p>
                                    <div className='flex' style={{ gap: "70px" }}>
                                        <div><strong>État</strong></div>
                                        <div style={{ color: "#5d5d5d" }}>Nouveau</div>
                                    </div>
                                    <div style={{ width: '135px' }}>
                                        {product.availability === true ? (
                                            <div className="available">
                                                Disponible En Stock
                                            </div>
                                        ) : (
                                            <div className="out-of-stock">
                                                Rupture de stock
                                            </div>
                                        )}
                                    </div>
                                    <div className='C-D-carateristique'>
                                        <h3>CARACTÉRISTIQUES:</h3>

                                    </div>
                                </p>
                                <div className="price-container">
                                    <p className="price">
                                        <span className='price'>{product.price},00 MAD</span> <span style={{ fontSize: "45%", fontStyle: "italic", verticalAlign: "20%", color: "#5d5d5d", fontWeight: "lighter" }}>TTC</span>
                                    </p>
                                    <div style={{ fontSize: ".8em", fontStyle: "italic", color: "#5d5d5d", lineHeight: "18px", fontWeight: 400, marginTop: "0px" }}>Entre 24H Et 48H</div>
                                    <div className='flex' style={{ gap: "3.5%", alignItems: "flex-start", marginTop: "20px", marginBottom: "15px" }}>
                                        <div className='flex setQuantity'>
                                            <span id='Moins'>
                                                <button
                                                    onClick={Moins}
                                                    type='button'
                                                    disabled={!product.availability}
                                                >
                                                    <FaMinus style={{ fontSize: "10px" }} />
                                                </button>
                                            </span>
                                            <input
                                                className="quantity-input"
                                                type="number"
                                                value={quantity}
                                                onChange={(e) => setQuantity(Number(e.target.value))}
                                                min={product.availability ? 1 : 0}
                                                disabled={!product.availability}
                                            />
                                            <span id='Ajouter'>
                                                <button
                                                    onClick={Ajouter}
                                                    type='button'
                                                    disabled={!product.availability}
                                                >
                                                    <FaPlus style={{ fontSize: "10px" }} />
                                                </button>
                                            </span>
                                        </div>
                                        <div className="C-D-button-container">
                                            <button
                                                className="C-D-add-to-cart-btn"
                                                onClick={handleAddToCart}
                                                disabled={!product.availability}
                                            >
                                                <FaShoppingCart className="C-D-cart-icon" />
                                                <span>AJOUTER AU PANIER</span>
                                            </button>

                                        </div>
                                    </div>
                                    <div className='C-D-add-popularity'>
                                        <button onClick={AddPopularity}><IoMdHeartEmpty className='icon-heart' /></button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ marginTop: "35px" }}>
                        <ul className='flex Pro-Details-Btn'>
                            <li> <button className={afficheDetails === true ? "Pro-Btn-active" : ""} onClick={Desc}><span>Description</span></button></li>
                            <li><button className={afficheDetails === false ? "Pro-Btn-active" : ""} onClick={Retour}><span>Expédition & Retour</span></button></li>
                        </ul>
                    </div>
                    <div className='Pro-Details'>
                        {afficheDetails === true ? (
                            <div className={`Pro-Info-Details ${afficheDetails ? "active" : ""}`}>{product.details}</div>
                        ) : (
                            <div className={`Pro-Info-Retour ${!afficheDetails ? "active" : ""}`}>
                                <strong><u>Expédition:</u></strong> <br />

                                <p style={{ marginTop: "10px" }}>Nous livrons à pratiquement n'importe quelle adresse dans le Maroc.</p>

                                <p style={{ marginTop: "10px", marginBottom: "10px" }}>Lorsque vous passez une commande, nous estimons les dates d'expédition et de livraison en fonction de la disponibilité des articles et des options d'expédition que vous avez choisies. En fonction du prestataire de services d'expédition que vous avez choisi, les dates d'expédition estimées peuvent apparaître sur la page des devis d'expédition.</p>

                                <strong><u>Retour:</u></strong> <br />

                                <p style={{ marginTop: "10px" }}>Vous pouvez retourner la plupart des articles neufs et non ouverts dans les 14 jours suivant la livraison pour un remboursement complet. Nous prenons également en charge les frais de retour si le retour résulte d'une erreur de notre part (vous avez reçu un article incorrect ou défectueux, etc.).</p>

                                <p style={{ marginTop: "10px" }}>Vous devriez recevoir votre remboursement dans les quatre semaines suivant la remise de votre colis à l'expéditeur du retour, mais dans de nombreux cas, vous recevrez un remboursement plus rapidement. Ce délai comprend le temps de transit nécessaire pour que nous recevions votre retour de l'expéditeur (5 à 10 jours ouvrables), le temps qu'il nous faut pour traiter votre retour une fois que nous l'avons reçu (3 à 5 jours ouvrables) et le temps qu'il faut à votre banque pour traiter notre demande de remboursement (5 à 10 jours ouvrables).</p>

                                <p style={{ marginTop: "10px" }}>Si vous devez retourner un article, il vous suffit de vous connecter à votre compte, d'afficher la commande à l'aide du lien « Commandes complètes » dans le menu « Mon compte » et de cliquer sur le bouton « Retourner l'article ». Nous vous informerons par e-mail de votre remboursement une fois que nous aurons reçu et traité l'article retourné.</p>

                                <div style={{ marginTop: "10px", color: "#5d5d5d" }}>
                                    <p>- Le produit doit être retourné dans son état d'origine, non utilisé, non endommagé, et dans son emballage scellé d'origine.</p>

                                    <p style={{ marginTop: "10px" }}>- Tous les accessoires, manuels et garanties inclus avec le produit doivent être retournés.</p>

                                    <p style={{ marginTop: "10px" }}>- Les produits neufs ne doivent pas être ouverts ou déballés de leur emballage d'origine.</p>

                                    <p style={{ marginTop: "10px" }}>- Les articles suivants ne peuvent pas être retournés :</p>

                                    <ul>
                                        <li style={{ listStyle: "initial" }}>Produits numériques et logiciels téléchargés.</li>
                                        <li style={{ listStyle: "initial" }}>Articles endommagés par une mauvaise utilisation.</li>
                                        <li style={{ listStyle: "initial" }}>Produits en promotion.</li>
                                        <li style={{ listStyle: "initial" }}>Produits remis à neuf.</li>
                                        <li style={{ listStyle: "initial" }}>Produits neufs déjà ouverts ou dont l'emballage d'origine est endommagé.</li>
                                        <li style={{ listStyle: "initial" }}>Produits marqués comme "ventes finales".</li>
                                    </ul>

                                    <p style={{ marginTop: "10px" }}>- Assistance:</p>

                                    <p style={{ marginTop: "10px", marginBottom: "10px" }}>Pour toute question, contactez notre service client à <a href="mailto:contact@bounnoureda.com">contact@bounnoureda.com</a>.</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
