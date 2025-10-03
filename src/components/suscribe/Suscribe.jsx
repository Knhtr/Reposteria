import { useState } from "react";
import "./Suscribe.css";

function Suscribe() {
    const [subscribed, setSubscribed] = useState(false);
    const handleSubscribe = () => {
    setSubscribed(true);
    setTimeout(() => {
        setSubscribed(false);
    }, 3000);
    };
    return (
        <div className="taste">
        <input type="email" placeholder="Enter your email address ..." />
        <button onClick={handleSubscribe}>SUBSCRIBE</button>

        {subscribed && (
            <div className="success-message">
            <span className="check">✓</span> Successfully subscribed!
            </div>
        )}
        </div>
    );
}

export default Suscribe;
