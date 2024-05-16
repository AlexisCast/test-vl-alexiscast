import { Link } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux'

import styles from "./DesktopNavBar.module.css";

const DesktopNavBar = () => {
	const totalItems = useSelector((state) => state.cart.totalItems)

	return (
		<nav className={styles.DesktopNavBar}>
			<Link to="/">VL Shop</Link>
			<div className={styles.NavItems}>
				<Link to="/checkout">checkout({totalItems})</Link>
				<Link to="/Products">Products</Link>
				{/* <Link to="/">Log In</Link>
				<Link to="/">Log Out</Link> */}
			</div>
		</nav>
	);
};

export default DesktopNavBar;
