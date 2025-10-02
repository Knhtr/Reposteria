import { useEffect } from "react";
import redVel from "../../assets/redVel.png";
import './Blog.css';

function Blog() {
    useEffect(() => {
        document.body.className = "blog-body";
        return () => (document.body.className = "");
    }, []);
    return (
        <section>
            <div className="start">
                <div className="contenedoras cont1">
                    <p>Their chocolate cake is the best i have ever tasted in town. Keep up the great work, Red Velvet!</p>
                    <h4>Ellie Anderson</h4>
                </div>
                <div className="contenedoras cont2">
                    <p>Red Velvet made my daughter's birthday special with a cake that tasted as good as it looked!</p>
                    <h4>Mike Johnson</h4>
                </div>
            <div className="choise">
                <h2>Best Choise for</h2>
                <h2>Every Occasion</h2>
                <p>At Red Velvet, we turn simple ingredients into delectable works of edible art.
                    Satisfy your cravings with our irresistible pastries and baked goods,
                    delivered fresh from the oven for you truly.</p>
                <div className="etiquetas-container">
                    <span className="etiquetas uno">+</span>
                    <span className="etiquetas">QUALITY INGREDIENTS</span>
                    <span className="etiquetas">PERSONALIZED DESIGNS</span>
                </div>
                <div className="etiquetas-container">
                    <span className="etiquetas">ON-TIME DELIVERY</span>
                    <span className="etiquetas">AFFORDABLE PRICES</span>
                    <span className="etiquetas uno">VALUES</span>
                </div>
                <img src={redVel} alt="Cake" />
            </div>
            </div>
        </section>
    
    )
}

export default Blog
