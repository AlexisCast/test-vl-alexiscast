import { useState } from "react";

import styles from "./Search.module.css";
import { useNavigate } from "react-router-dom";
import { Button } from "../../Button/Button";

export const Search = () => {
	const navigate = useNavigate();
	const [search, setSearch] = useState("");

	const searchHandler = (e) => {
		e.preventDefault();
		if (search) {
			navigate(`/products?search=${search}`);
		}
	};

	return (
		<form className={styles.Search} onSubmit={searchHandler}>
			<input
				className={styles.Input}
				type="text"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				placeholder="Search..."
			/>
			<Button className={styles.Button}>Search</Button>
			<Button
				as="button"
				onClick={() => setSearch("")}
				className={styles.Button}
			>
				Clear
			</Button>
		</form>
	);
};
