import './midContact.css';

export default function MidContact() {
    return (
        <div>
            <div id="ContAll" className="flex">
                <div id="ContAll2">
                    <p className="" id="ContP1">Contact Us</p>
                    <div id="ContDesc">
                        Africa Gaming MAROC est une entreprise spécialisée dans la vente de PC & de matériel informatique & électronique au Maroc.
                    </div>

                    <p id="ContP2">SIÈGE SOCIAL</p>
                    <ul>
                        <li id="ContDesc">65, Massira 1 ( Al Ahbas )</li>
                        <li id="ContDesc">Marrakech – Maroc</li>
                    </ul>

                    <p id="ContP2">ÉCRIVEZ-NOUS :</p>
                    <ul>
                        <li id="ContDesc">africagaming2022@gmail.com</li>
                    </ul>

                    <p id="ContP2">APPELEZ-NOUS</p>
                    <ul>
                        <li id="ContDesc">+212 6 81 27 11 90</li>
                    </ul>

                    <p id="ContP2">JOURS & HEURES D’OUVERTURE</p>
                    <ul>
                        <li id="ContDesc">Lundi à Samedi : 10:30 à 19:30</li>
                        <li id="ContDesc">Dimanche: Fermé</li>
                    </ul>

                    <p id="ContP2">RÉSEAUX SOCIAUX</p>
                    <ul>
                        <li id="ContDesc">
                            Facebook : <a href="https://www.facebook.com/people/Africa-Gaming/61551477496309/" target="_blank" rel="noreferrer">https://www.facebook.com/africagaming/</a>
                        </li>
                        <li id="ContDesc">
                            Instagram : <a href="https://www.instagram.com/africagming/?hl=fr" target="_blank" rel="noreferrer">https://www.instagram.com/africagaming/</a>
                        </li>
                    </ul>

                    {/* Contact Form */}
                    <div id="ContactForm">
                        <form>
                            <div className="form-row">
                                <input type="text" name="nom" placeholder="Nom" className="input-half" />
                                <input type="tel" name="telephone" placeholder="Téléphone" className="input-half" />
                            </div>
                            <div className="form-row">
                                <input type="email" name="email" placeholder="Email" className="input-full" />
                            </div>
                            <div className="form-row">
                                <textarea name="message" placeholder="Message" className="input-full"></textarea>
                            </div>
                            <button type="submit" className="submit-btn">Envoyer</button>
                        </form>
                    </div>
                </div>
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3236.9587902223566!2d-5.824021989070363!3d35.7763886246271!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0c79ad51c210f1%3A0xa5c84eb11b5a6add!2sAfrica%20Gaming%20Store!5e0!3m2!1sen!2sma!4v1709802525075!5m2!1sen!2sma"
                        width="550"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
