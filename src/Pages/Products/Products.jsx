import { json, useLoaderData } from "react-router-dom";

import { ProductList } from "../../Components/Products/ProductList/ProductList";
import { Search } from "../../Components/UI/Forms/Search/Search";
import { Button } from "../../Components/UI";

import { CLIENT_URL, PRODUCTS_URL } from "../../../config";

import styles from "./Products.module.css";

const Products = () => {
	const dataLoader = useLoaderData();

	// return <div>{JSON.stringify(dataLoader.data.products)}</div>;
	return (
		<>
			<Search />
			<ProductList products={dataLoader.data.products} />
		</>
	);
};

export default Products;

export const loader = async ({ request, params }) => {
	console.log("Product Loader");
	const url = new URL(request.url);
	const searchTitle = url.searchParams.get("search");

	let productsPath = "";

	if (searchTitle) {
		productsPath = `?search=${searchTitle}`;
	}

	const response = await fetch(CLIENT_URL + PRODUCTS_URL + productsPath, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (!response.ok) {
		return json({
			isError: true,
			msg: "Could not fetch products",
			status: response.status,
		});
	} else {
		return response;
	}
};
