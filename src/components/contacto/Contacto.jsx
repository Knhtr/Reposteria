import { useEffect } from "react";
import panes from "../../assets/panes.png";
import titulo from "../../assets/titulo.png";
import Suscribe from '../../components/suscribe/Suscribe';
import './Contacto.css';

function Contacto() {
    useEffect(() => {
            document.body.className = "contacto-body";
            return () => (document.body.className = "");
    }, []);
    return (
    <div>
        <section className="intro">
            <div className="begin">
                <div className="contImg"><img src={panes} alt="Pan" /></div>
                <div className="ready">
                    <h2>Ready to taste the magic?</h2>
                    <p>Take the first step towards sweet satisfaction - place your order
                        now or subscribe to our newsletter for updates and promo.</p>
                </div>
                <Suscribe />
            </div>
            <div className="footer">
                <div className="footer-logo">
                    <img src={titulo} alt="Cake" />
                    <p>(+123) 456 7890</p>
                    <p>redVelvet.cakeshop@gmail.com</p>
                </div>
                <div className="footer-links">
                    <ul>
                        <li>About Us</li>
                        <li>Shop Cakes</li>
                        <li>Testimonials</li>
                        <li>Store Locations</li>
                    </ul>
                    <ul>
                        <li>Cake Journal</li>
                        <li>Recipes</li>
                        <li>Our Story</li>
                        <li>Our Values</li>
                    </ul>
                    <ul>
                        <li>FAQ</li>
                        <li>Terms of Service</li>
                        <li>Refund Policy</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
    )
}

export default Contacto
