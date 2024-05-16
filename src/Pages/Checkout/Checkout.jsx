import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../store/cart-slice";

import styles from "./Checkout.module.css";
import { Button } from "../../Components/UI";

const CheckoutPage = () => {
	const dispatch = useDispatch();

	const totalItems = useSelector((state) => state.cart.items);
	const totalPrice = useSelector((state) => state.cart.totalPrice);
	console.log({ totalPrice });

	// TDOO: show only unique items and how many of the same
	return (
		<div>
			<h2>Checkout age</h2>
			<div>
				{totalItems.map((item, index) => (
					<div key={item._id + index} className={styles.Item}>
						<Link to={`/products/${item._id}`}>
							{item.name.substring(0, 20) + "..."}
						</Link>
						<span>${item.price}</span>
						<div>
							<button
								onClick={() => dispatch(removeFromCart(item))}
							>
								-
							</button>{" "}
							<button onClick={() => dispatch(addToCart(item))}>
								+
							</button>
						</div>
					</div>
				))}
			</div>
			<div>Total: {totalPrice.toFixed(2)}</div>
			<Button>Pay</Button>
		</div>
	);
};

export default CheckoutPage;
