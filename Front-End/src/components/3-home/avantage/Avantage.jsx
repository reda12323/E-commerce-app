import './avantage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast, faDollarSign, faCreditCard, faHeadphonesAlt } from '@fortawesome/free-solid-svg-icons';

const Avantage = () => {
    return (
        <div className='flex avan-header'>
            <div className='flex avan-space'>
                <div className='avan-logo'>
                    <span>
                        <FontAwesomeIcon icon={faShippingFast} className="avan-icon" />
                    </span>
                </div>
                <div className='avan-text'>
                    <p className='title-avan'>Livraison Rapide</p>

                    <p className='desc-avan'>Environ 24h-48h</p>
                </div>
            </div>

            <div className='flex avan-space'>
                <div className='avan-logo'>
                    <span>
                        <FontAwesomeIcon icon={faDollarSign} className="avan-icon" />
                    </span>
                </div>
                <div className='avan-text'>
                <p className='title-avan'>Garantie 12 mois
                </p>
                <p className='desc-avan'>Garantie sur tous les produit
                </p>
                </div>
            </div>

            <div className='flex avan-space'>
                <div className='avan-logo'>
                    <span>
                        <FontAwesomeIcon icon={faCreditCard} className="avan-icon" />
                    </span>
                </div>
                <div className='avan-text'>
                <p className='title-avan'>Paiement Flexible
                </p>
                <p className='desc-avan'>Diverses méthodes de paiement
                </p>
                </div>
            </div>

            <div className='flex avan-space'>
                <div className='avan-logo'>
                    <span>
                        <FontAwesomeIcon icon={faHeadphonesAlt} className="avan-icon" />
                    </span>
                </div>
                <div className='avan-text'>
                <p className='title-avan'>Support en ligne
                </p>
                <p className='desc-avan'>Appelez-nous au : +212 670-676548
                </p>
                </div>
            </div>
        </div>
    );
}

export default Avantage;
