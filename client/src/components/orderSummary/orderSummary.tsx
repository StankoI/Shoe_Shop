import { useEffect, useState } from 'react';
import styles from './orderSummary.module.css';
import { useShoppingCart } from '../../contexts/shopingCartContext';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Този hook е само за пример. Заменете го с вашия реален hook.


const OrderSummary = () => {

    const { cartItems } = useShoppingCart();
    const [subtotal, setSubtotal] = useState(0);
    const [promoCode, setPromoCode] = useState('');

    useEffect(() => {
        const fetchPricesAndCalculateSubtotal = async () => {

            try {
                const priceRequests = cartItems.map(item =>
                    axios.get(`http://localhost:8080/client/products/${item.id}/price`)
                        .then(res => ({
                            id: item.id,
                            size: item.size,
                            quantity: item.quantity,
                            price: res.data.price
                        }))
                );

                const results = await Promise.all(priceRequests);

                const total = results.reduce((acc, item) => {
                    return acc + item.price * item.quantity;
                }, 0);

                setSubtotal(total);
            } catch (err) {
                console.error("Failed to fetch product prices:", err);
            }
        };

        if (cartItems.length > 0) {
            fetchPricesAndCalculateSubtotal();
        } else {
            setSubtotal(0);
        }

    }, [cartItems]);

    const taxRate = 0.08;
    const shippingCost = 5.99;
    const taxAmount = subtotal * taxRate;
    const total = subtotal + taxAmount + shippingCost;

    return (
        <div className={styles['summaryContainer']}>
            <div className={styles['title']}>Order Summary</div>

            <div className={styles['priceBreakdown']}>
                <div className={styles['priceRow']}>
                    <div>Subtotal</div>
                    <div>${subtotal.toFixed(2)}</div>
                </div>
                <div className={styles['priceRow']}>
                    <div>Shipping</div>
                    <div>{`${shippingCost.toFixed(2)}`}</div>
                </div>
                <div className={styles['priceRow']}>
                    <div>Tax ({taxRate * 100}%)</div>
                    <div>${taxAmount.toFixed(2)}</div>
                </div>
            </div>

            <hr className={styles['divider']} />

            <div className={`${styles['priceRow']} ${styles['totalRow']}`}>
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
            </div>

            <div className={styles['promoSection']}>
                <label htmlFor="promo-code" className={styles['promoLabel']}>
                    Promo Code
                </label>
                <div className={styles['promoInputGroup']}>
                    <input
                        id="promo-code"
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="Enter code"
                        className={styles['promoInput']}
                    />
                    <button className={styles['applyButton']}>Apply</button>
                </div>
            </div>

            <button className={styles['checkoutButton']}>
                <Link
                    to="/checkout" style={{textDecoration:"none", color:"white"}}>
                    Proceed to Checkout
                </Link>
            </button>

            <ul className={styles['featuresList']}>
                <div className={styles['featureItem']}>
                    Secure payment
                </div>
                <div className={styles['featureItem']}>
                    Free shipping on orders over $150
                </div>
                <div className={styles['featureItem']}>
                    30-day easy returns
                </div>
            </ul>
        </div>
    );
};

export default OrderSummary;