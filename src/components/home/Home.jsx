import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import cake from "../../assets/cake.jpeg";
import choco from "../../assets/choco.png";
import mousse from "../../assets/mousse.png";
import postres from "../../assets/postres.jpeg";
import vaniila from "../../assets/vanilla.png";
import './Home.css';

function Home() {
    return (
    <>
        <section className="inicio">
            <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 6000 }}
            loop
            className="mySwiper"
            >
            <SwiperSlide>
                <div className="contenido">
                    <h1 className="green">Delight in</h1>
                    <h2 className="orange">every bites!</h2>
                    <p>Experience the joy of perfectly baked
                        cakes, made with love and crafted to
                        bring a smile to every celebration.
                    </p>
                    <a href="/productos" className="button">Order Now</a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="contenido1 card1">
                    <div>
                        <img src={postres} alt="Cake" />
                        <div className="text-content">
                            <h1>A Flavor for Every Craving</h1>
                            <p>From classic favorites to bold creations, our cakes are
                                crafted to match every mood and taste.</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="contenido1 card2">
                    <div>
                        <img src={cake} alt="Bread" />
                        <div className="text-content">
                            <h1>Crafted with Love & Care</h1>
                            <p>Each cake is a piece of art, handmade with passion
                            to make every bite as memorable as the moment.</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            </Swiper>
            <div className="signature">
                <h2>Our Signature</h2>
                <div className="cards">
                    <div className="card1">
                        <img src={choco} alt="Chips" className="chips"/>
                        <h3>Descendant Choco Chips <a href="#" className="buttonSign">🛍️</a></h3>
                        <h4>$15 <a href='#'>More Details</a></h4>
                    </div>
                    <div className="card2">
                        <img src={vaniila} alt="Vanilla" className="vanilla"/>
                        <h3>Classic Vanilla Chiffon Cake <a href="#" className="buttonSign">🛍️</a></h3>
                        <h4>$25 <a href='#'>More Details</a></h4>
                    </div>
                    <div className="card3">
                        <img src={mousse} alt="Mousse" className="mousse"/>
                        <h3>Choco Mousse Extravaganza <a href="#" className="buttonSign">🛍️</a></h3>
                        <h4>$35 <a href='#'>More Details</a></h4>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default Home
