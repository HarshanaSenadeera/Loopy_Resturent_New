import { useLocation } from "react-router-dom";

const OrderPage: React.FC = () => {
    const location = useLocation();
    const { cartItems, totalPrice } = location.state || { cartItems: [], totalPrice: 0 };

    return (
        <div>
            <h1>Your Order</h1>
            <ul>
                {cartItems.map((item: any, index: number) => (
                    <li key={index}>{item.title} - Quantity: {item.quantity}</li>
                ))}
            </ul>
            <p>Total Price: {totalPrice}</p>
        </div>
    );
};
export default OrderPage
