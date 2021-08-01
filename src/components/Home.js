import useStore from "../store";
import OrderForm from "./OrderForm";

const Home = () => {
    const user = useStore(state => state.user);
    const ordersCart = useStore(state => state.cart);

    return (
        <div className="flex-col items-center w-full h-full m-10 justify-center">
            <div>
                <p><span className="font-bold">Current User:</span> {user.name}</p>
                <p><span className="font-bold">Cart:</span></p>
                <ul className="list-disc list-inside">
                    {ordersCart.length > 0 && ordersCart.map((orderItem, index) => {
                        return <li key={index}><span className="font-bold">Order:</span> {orderItem.order} - <span className="font-bold">Quantity:</span> {orderItem.quantity}</li>
                    })}
                </ul>
            </div>
        
            <OrderForm/>
        </div>
    );
}

export default Home;