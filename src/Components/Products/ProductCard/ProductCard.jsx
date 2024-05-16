import { Link } from "react-router-dom";

import { Card, CardContainer } from "../../Shared/Card/Card";

import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../../../store/cart-slice'

import { Button } from "../../UI";

import styles from "./ProductCard.module.css";

export const ProductCard = ({ product }) => {
	const dispatch = useDispatch();

	const { _id, img, name, rating, price } = product;

	const navigateTo = `/products/${_id}`;

	return (
		<Card className={styles.Card}>
			<Link to={navigateTo} className={styles.ImageContainer}>
				<img className={styles.Image} src={img} alt={name} />
			</Link>
			<CardContainer>
				<Link to={navigateTo} className={styles.Title}>
					{name}
				</Link>
				<div className={styles.Details}>
					<Link to={navigateTo}>
						Stars {rating.stars} ({rating.stars})
					</Link>
					<Link to={navigateTo}>
						<b>Price</b> ${price.toFixed(2)}
					</Link>
					<Button
						className={styles.Button}
						onClick={() => dispatch(addToCart(product))}
					>
						Add to Cart
					</Button>
				</div>
			</CardContainer>
		</Card>
	);
};
