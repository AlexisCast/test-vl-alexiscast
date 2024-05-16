import { Link, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../../../store/cart-slice'

import { Card, CardContainer } from "../../Shared/Card/Card";

import { Button } from "../../UI";

import styles from "./ProductDetailCard.module.css";

export const ProductDetailCard = ({ product }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch()

	const { _id, img, name, rating, price } = product;

	return (
		<Card className={styles.Card}>
			<div className={styles.ImageContainer}>
				<img className={styles.Image} src={img} alt={name} />
			</div>
			<CardContainer className={styles.CardContainer}>
				<div className={styles.Title}>
					{name}
				</div>
				<div className={styles.Details}>
					<div>
						Stars {rating.stars} ({rating.stars})
					</div>
					<div>
						<b>Price</b> ${price.toFixed(2)}
					</div>
					<div className={styles.Buttons}>
						<Button className={styles.Button} onClick={() => dispatch(addToCart(product))}>Add to Cart</Button>
						<Button className={styles.Button} onClick={()=>navigate('/checkout')}>Checkout</Button>
						<Button className={styles.Button} onClick={()=>navigate('/products')}>Cancel</Button>
					</div>
				</div>
			</CardContainer>
		</Card>
	);
};
