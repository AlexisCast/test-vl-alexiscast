import classNames from "classnames";
import styles from "./Buttonsl.module.css";

export const Button = ({ children, className, ...props }) => {
	return (
		<button className={classNames(styles.Button, className)} {...props}>
			{children}
		</button>
	);
};
