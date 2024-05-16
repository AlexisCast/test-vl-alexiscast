import { json, useLoaderData, useRouteLoaderData } from "react-router-dom";

import { CLIENT_URL, PRODUCTS_URL } from "../../../config";
import { ProductDetailCard } from "../../Components/Products/ProductDetailCard/ProductDetailCard";

const ProductDetails = () => {
	const dataLoader = useRouteLoaderData("product-detail");
	console.log({ dataLoader });
	return (
		<>
			<h2>Details Page</h2>
			{/* {JSON.stringify(dataLoader.data.product)} */}
			<ProductDetailCard product={dataLoader.data.product} />
		</>
	);
};

export default ProductDetails;

export const loader = async ({ request, params }) => {
	console.log("ProductDetail Loader");

	const id = params.productId;

	const response = await fetch(CLIENT_URL + PRODUCTS_URL + "/" + id, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (!response.ok) {
		return json({
			isError: true,
			msg: `Could not fetch ${id}`,
			status: response.status,
		});
	} else {
		return response;
	}
};
