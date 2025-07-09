import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF, faInstagram, faWhatsapp, faTiktok, faYoutube
} from '@fortawesome/free-brands-svg-icons';
import {
    faCheck, faMapMarkerAlt, faPhoneAlt, faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
    return (
        <div className="flex footer">
            <div className="flex concept-footer">
                <div className="firstP-footer">
                    <div className="flex footer-media">
                        <h2>Social Media</h2>
                        <div className="flex">
                            <a href=""><FontAwesomeIcon style={{ border: '1px solid blue', backgroundColor: '#2252D1', borderRadius: '50%', fontSize: '12px', padding: '2px 3px 0px 3px', }} icon={faFacebookF} className="footer-icon" /></a>
                            <a href=""><FontAwesomeIcon style={{ color: '#fff' }} icon={faInstagram} className="footer-icon" /></a>
                            <a href=""><FontAwesomeIcon style={{ color: '#0AA80E' }} icon={faWhatsapp} className="footer-icon" /></a>
                            <a href=""><FontAwesomeIcon style={{ color: '#fff' }} icon={faTiktok} className="footer-icon" /></a>
                            <a href=""><FontAwesomeIcon style={{ color: '#FF1111' }} icon={faYoutube} className="footer-icon" /></a>
                        </div>
                    </div>
                    <div className="flex footer-logo">
                        <div>
                            <img className='logo' src="	https://africagaming.ma/wp-content/uploads/2023/10/africa-gaming.ps-3-300x212.png" alt="Africa Gaming Logo" />
                        </div>
                        <p>
                            Africagaming.ma informatiques, électronique, technologie au meilleur prix, qualité et service. Africa Gaming est votre boutique en ligne leader pour PC gamer, ordinateurs, workstation et bien plus…
                        </p>
                    </div>
                </div>
                <div className="flex secondP-footer">
                    <div className="footer-info">
                        <h2>Informations</h2>
                        <div>
                            <FontAwesomeIcon icon={faCheck} className="footer-icon" /> <span>Qui Somme Nous</span>
                            <br />
                            <FontAwesomeIcon icon={faCheck} className="footer-icon" /> <span>Modes de paiement</span>
                            <br />
                            <FontAwesomeIcon icon={faCheck} className="footer-icon" /> <span>Plan d’accès</span>
                            <br />
                            <FontAwesomeIcon icon={faCheck} className="footer-icon" /> <span>LIVRAISON</span>
                            <br />
                            <FontAwesomeIcon icon={faCheck} className="footer-icon" /> <span>Conditions Generales de Vente (CGV)</span>
                            <br />
                            <FontAwesomeIcon icon={faCheck} className="footer-icon" /> <span>Mentions Légales</span>
                        </div>
                    </div>
                    <div className="footer-compte">
                        <h2>Mon Compte</h2>
                        <div>
                            <FontAwesomeIcon icon={faCheck} className="footer-icon" /> <span>Mes Commandes</span>
                            <br />
                            <FontAwesomeIcon icon={faCheck} className="footer-icon" /> <span>Mes Informations</span>
                            <br />
                            <FontAwesomeIcon icon={faCheck} className="footer-icon" /> <span>Demander un devis</span>
                            <br />
                            <FontAwesomeIcon icon={faCheck} className="footer-icon" /> <span>Annuler une commande</span>
                            <br />
                            <FontAwesomeIcon icon={faCheck} className="footer-icon" /> <span>Validation de la commande</span>
                        </div>
                    </div>
                    <div className="footer-produits">
                        <h2>Nos Produits</h2>
                        <div>
                            <FontAwesomeIcon icon={faCheck} className="footer-icon" /> <span>Promotion</span>
                            <br />
                            <FontAwesomeIcon icon={faCheck} className="footer-icon" /> <span>Nouveautés</span>
                            <br />
                            <FontAwesomeIcon icon={faCheck} className="footer-icon" /> <span>Meilleures ventes</span>
                            <br />
                            <FontAwesomeIcon icon={faCheck} className="footer-icon" /> <span>Flash deal</span>
                            <br />
                            <FontAwesomeIcon icon={faCheck} className="footer-icon" /> <span>Outlet</span>
                        </div>
                    </div>
                    <div className="footer-contact">
                        <h2>Contactez-Nous</h2>
                        <div>
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="footer-icon" /> <span>Marrakech, Al Ahbas Marrakech, Maroc</span>
                            <br />
                            <FontAwesomeIcon icon={faPhoneAlt} className="footer-icon" /> <span>+212-767-019-512</span>
                            <br />
                            <FontAwesomeIcon icon={faPhoneAlt} className="footer-icon" /> <span>+212-767-019-512</span>
                            <br />
                            <FontAwesomeIcon icon={faEnvelope} className="footer-icon" /> <span>contact@africagaming.ma</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>
                    Copyright © 2024 AFRICA GAMING – (N° Registre du Commerce : 127297/Tanger – Taxe professionnelle : 50103089 – Identifiant Fiscal (IF) : 52423960 – Identifiant commun de l’entreprise (ICE) : 003052201000027)
                </p>
            </div>
        </div>
    );
}

export default Footer;
