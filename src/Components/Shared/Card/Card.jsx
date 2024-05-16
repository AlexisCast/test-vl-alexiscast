import classNames from "classnames";

import styles from "./Card.module.css";

export const Card = ({ className, children, ...props }) => {
	return (
		<div className={classNames(styles.Card, className)} {...props}>
			{children}
		</div>
	);
};

export const CardContainer = ({ className, children, ...props }) => {
	return (
		<div className={classNames(styles.CardContainer, className)} {...props}>
			{children}
		</div>
	);
};
