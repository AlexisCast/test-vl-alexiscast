import { ProductCard } from "../ProductCard/ProductCard";

import styles from "./ProductList.module.css";

export const ProductList = ({ products }) => {
	return (
		<ul className={styles.ProductList}>
			{products.map((item) => (
				<li key={item._id}>
					<ProductCard product={item} />
				</li>
			))}
		</ul>
	);
};
