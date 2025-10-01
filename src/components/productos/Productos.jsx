import { useEffect } from "react";
import birthday from "../../assets/birthday.jpeg";
import blue from "../../assets/blue.jpeg";
import pastel from "../../assets/pastel.jpeg";
import './Productos.css';


function Productos() {
    useEffect(() => {
        document.body.className = "products-body";
        return () => (document.body.className = "");
    }, []);
    return (
    <section className='primero'>
        <div className='first'>
        <h2 className="order">How to Order</h2>
        <section class="container">
            <div class="card">
                <h3 class="title">Choose</h3>
                <p class="text">Pick your favorite cake flavor and design.</p>
                <div class="line"></div>
                <div class="circle bottom">1</div>
            </div>
            <div class="card">
                <div class="circle top">2</div>
                <div className='text bottom'>
                    <h3 class="title">Customize</h3>
                    <p class="text">Add personal touches and special requests.</p>
                </div>
                <div class="line bottom"></div>
            </div>
            <div class="card">
                <h3 class="title">Order</h3>
                <p class="text">Place and pay your order via online.</p>
                <div class="line"></div>
                <div class="circle bottom">3</div>
            </div>
            <div class="card">
                <div class="circle top">4</div>
                <div className='text bottom'>
                    <h3 class="title">Wait</h3>
                    <p class="text">Your cake will be delivered right to you.</p>
                </div>
                <div class="line bottom"></div>
            </div>
        </section>
        <section className="journal">
            <h2 className="journal-title">Cake Journal</h2>
            <div className="journal-buttons">
                <div className="btn">Tips & Trick</div>
                <div className="btn active">New Article</div>
                <div className="btn">Promotions</div>
            </div>
            <div className="journal-cards">
                <div className="journal-card">
                    <img src={pastel} alt="Cake" />
                    <div className="card-text">
                        <h3>Our Favorite Cakes that Always Make it To the Best Seller</h3>
                        <a href='#'>More Details</a>
                    </div>
                </div>
                <div className="journal-card">
                    <div className="imagen"><img src={birthday} alt="Cake" /></div>
                    <div className="card-text">
                        <h3>Designing Your Own Customized Dream Birthday Cake</h3>
                        <a href='#'>More Details</a>
                    </div>
                </div>
                <div className="journal-card">
                    <img src={blue} alt="Cake" />
                    <div className="card-text">
                        <h3>Choosing the Right Cake for Any Occasion and Party: A Guide</h3>
                        <a href='#'>More Details</a>
                    </div>
                </div>
            </div>
        </section>
        </div>
    </section>
    )
}

export default Productos
