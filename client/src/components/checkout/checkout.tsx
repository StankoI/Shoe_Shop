import React, { useEffect, useState } from 'react';
import { useShoppingCart } from '../../contexts/shopingCartContext';
import styles from './Checkout.module.css';
import axios from 'axios';
import CartItemTSX from '../cartItem/cartItem';
import useAuth from '../../hooks/useAuth';

const Checkout = () => {
    const { cartItems, cleanCart } = useShoppingCart();
    const [subtotal, setSubtotal] = useState(0);

    const { auth } = useAuth()

    const [formData, setFormData] = useState({
        name: auth.name,
        address: auth.address,
        phoneNumber: auth.phoneNumber
    });


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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const products = cartItems.map(item => ({
            productId: item.id,
            quantity: item.quantity,
            size: item.size
        }));

        const orderData = {
            products,
            ...formData,
            totalPrice: total.toFixed(2)
        };

        try {
            const res = await axios.post('http://localhost:8080/client/order', orderData);
            console.log('Order submitted:', res.data);

            //here i have to add logic to add the user a orders ids http://localhost:8080/client/user/email/order

            if (auth?.accessToken) {
                await axios.put('http://localhost:8080/client/user/email/order',{
                    email:auth.email,
                    order_id:res.data._id
                })
            }

            cleanCart();
            alert('Поръчката беше успешно направена!');
        } catch (error: any) {
            console.error('Error submitting order:', error.response?.data || error.message);
            alert('Грешка при изпращане на поръчката.');
        }
    };

    return (
        <div className={styles['checkout-container']}>
            <div className={styles['checkout-title']}>Checkout</div>

            <div className={styles['cart-summary']}>
                <div className={styles['section-title']}>Продукти в количката</div>

                <div className={styles['cart-list']}>
                    {cartItems.map((item, idx) => (
                        <CartItemTSX key={idx} id={item.id} quantity={item.quantity} size={item.size} />
                    ))}
                </div>

                <div className={styles['total']}>Обща сума: {total.toFixed(2)} лв.</div>
            </div>

            <form className={styles['form']} onSubmit={handleSubmit}>
                <h3 className={styles['section-title']}>Данни за доставка</h3>

                <input
                    type="text"
                    name="name"
                    placeholder="Име"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles['input']}
                    required
                />

                <input
                    type="text"
                    name="address"
                    placeholder="Адрес"
                    value={formData.address}
                    onChange={handleChange}
                    className={styles['input']}
                    required
                />

                <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Телефон"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className={styles['input']}
                    required
                />

                <button type="submit" className={styles['submit-button']}>
                    Потвърди поръчка
                </button>
            </form>
        </div>
    );
};

export default Checkout;
