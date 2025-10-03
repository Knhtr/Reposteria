import { useEffect } from "react";
import avellana from "../../assets/avellana.png";
import caramelo from "../../assets/caramelo.png";
import choco from "../../assets/choco.png";
import chocolate from "../../assets/chocolate.png";
import fresa from "../../assets/fresa.png";
import limon from "../../assets/limon.png";
import mango from "../../assets/mango.png";
import mousse from "../../assets/mousse.png";
import vanilla from "../../assets/vanilla.png";
import './Productos.css';

function Productos() {
    useEffect(() => {
            document.body.className = "products-body";
            return () => (document.body.className = "");
    }, []);
    return (
        <div className="signature">
            <h2>Our Signature</h2>
            <div className="cards">
                <div className="card1">
                    <img src={choco} alt="Chips" className="chips"/>
                    <h3>Descendant Choco Chips <a href="#" className="buttonSign">🛍️</a></h3>
                    <h4>$15 <a href='#'>More Details</a></h4>
                </div>
                <div className="card2">
                    <img src={vanilla} alt="Vanilla" className="vanilla"/>
                    <h3>Classic Vanilla Chiffon Cake <a href="#" className="buttonSign">🛍️</a></h3>
                    <h4>$25 <a href='#'>More Details</a></h4>
                </div>
                <div className="card3">
                    <img src={mousse} alt="Mousse" className="mousse"/>
                    <h3>Choco Mousse Extravaganza <a href="#" className="buttonSign">🛍️</a></h3>
                    <h4>$35 <a href='#'>More Details</a></h4>
                </div>
            </div>
            <div className="cards">
                <div className="card1">
                    <img src={caramelo} alt="Caramelo" className="caramelo"/>
                    <h3>Golden Caramel Delight <a href="#" className="buttonSign">🛍️</a></h3>
                    <h4>$40 <a href='#'>More Details</a></h4>
                </div>
                <div className="card2">
                    <img src={fresa} alt="Vanilla" className="vanilla"/>
                    <h3>Strawberry Bliss Tart <a href="#" className="buttonSign">🛍️</a></h3>
                    <h4>$50 <a href='#'>More Details</a></h4>
                </div>
                <div className="card3">
                    <img src={chocolate} alt="Mousse" className="mousse"/>
                    <h3>Velvet Chocolate Dream <a href="#" className="buttonSign">🛍️</a></h3>
                    <h4>$25 <a href='#'>More Details</a></h4>
                </div>
            </div>
            <div className="cards">
                <div className="card1">
                    <img src={mango} alt="Chips" className="chips"/>
                    <h3>Tropical Mango Fantasy <a href="#" className="buttonSign">🛍️</a></h3>
                    <h4>$15 <a href='#'>More Details</a></h4>
                </div>
                <div className="card2">
                    <img src={limon} alt="Vanilla" className="vanilla"/>
                    <h3>Lemon Zest Cheesecake <a href="#" className="buttonSign">🛍️</a></h3>
                    <h4>$40 <a href='#'>More Details</a></h4>
                </div>
                <div className="card3">
                    <img src={avellana} alt="Mousse" className="mousse"/>
                    <h3>Hazelnut Crunch Sensation <a href="#" className="buttonSign">🛍️</a></h3>
                    <h4>$20 <a href='#'>More Details</a></h4>
                </div>
            </div>
        </div>
    )
}

export default Productos
