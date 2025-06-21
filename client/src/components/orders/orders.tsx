import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { IdType } from '../../types/idType';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import styles from "./orders.module.css"


interface Order {
    _id: string;
    products: ProductItem[];
    name: string;
    address: string;
    phoneNumber: string;
    totalPrice: number;
}

interface Product {
    _id: string;
    name: string;
    price: number;
    img?: string;
    color?: string;
}

interface ProductItem {
    productId: IdType;
    quantity: number;
    size: number;
    fullProduct?: Product; 
}


const Orders = () => {
    const { auth } = useAuth();
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const axios = useAxiosPrivate();

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const userRes = await axios.get(`http://localhost:8080/client/user/email/${auth.email}`);
                const userId = userRes.data._id;

                const ordersRes = await axios.get(`http://localhost:8080/client/user/orders/${userId}`);
                const rawOrders: Order[] = ordersRes.data;

                const productCache = new Map<string, Product>();

                const enrichedOrders = await Promise.all(
                    rawOrders.map(async (order) => {
                        const enrichedProducts = await Promise.all(
                            order.products.map(async (product) => {
                                if (!productCache.has(product.productId)) {
                                    const res = await axios.get(`http://localhost:8080/client/products/${product.productId}`);
                                    productCache.set(product.productId, res.data);
                                }

                                return {
                                    ...product,
                                    fullProduct: productCache.get(product.productId),
                                };
                            })
                        );

                        return {
                            ...order,
                            products: enrichedProducts,
                        };
                    })
                );

                setOrders(enrichedOrders);
            } catch (err: any) {
                setError(err.message || 'Error fetching orders');
            } finally {
                setLoading(false);
            }
        };

        if (auth.email) {
            fetchOrders();
        }
    }, [auth.email]);


    if (loading) return <div>Loading orders...</div>;
    if (error) return <div className="text-red-500">Error: {error}</div>;
    if (orders.length === 0) return <div>No orders found.</div>;

    return (
        <div className={styles["orders-container"]}>
            <div className={styles["orders-title"]}>Your Orders</div>

            {orders.map((order) => (
                <div key={order._id} className={styles["order-card"]}>
                    <div className={styles["order-header"]}>
                        <div>Name: {order.name}</div>
                        <div>Address: {order.address}</div>
                        <div>Phone: {order.phoneNumber}</div>
                        <div>Total Price: ${order.totalPrice.toFixed(2)}</div>
                    </div>

                    <div className={styles["products-section"]}>
                        <div className={styles["products-title"]}>Products:</div>
                        <div className={styles["product-list"]}>
                            {order.products.map((product, index) => (
                                <div key={index} className={styles["product-item"]}>
                                    <div>Name: {product.fullProduct?.name || 'Loading...'}</div>
                                    <div>Price: ${product.fullProduct?.price?.toFixed(2) ?? 'N/A'}</div>
                                    <div>Color: {product.fullProduct?.color || 'N/A'}</div>
                                    <div>Quantity: {product.quantity}</div>
                                    <div>Size:{product.size}</div>
                                    {product.fullProduct?.img && (
                                        <img
                                            src={product.fullProduct.img}
                                            alt={product.fullProduct.name}
                                            className={styles["product-image"]}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Orders;
