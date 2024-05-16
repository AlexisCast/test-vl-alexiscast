import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { RootLayout } from "./Pages/Root/Root";

import Home, { loader as homeLoader } from "./Pages/Home/Home";

import Products, { loader as productsLoader } from "./Pages/Products/Products";
import ProductDetails, {
	loader as productDetailLoader,
} from "./Pages/Products/ProductDetails";

import ErrorPage from "./Pages/Error";

import CheckoutPage from "./Pages/Checkout/Checkout";

const router = createBrowserRouter([
	{
		path: "/",
		errorElement: <ErrorPage />,
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <Home />,
				loader: homeLoader,
			},
			{
				path: "products",
				children: [
					{
						index: true,
						element: <Products />,
						loader: productsLoader,
					},
					{
						path: ":productId",
						id: "product-detail",
						loader: productDetailLoader,
						children: [
							{
								index: true,
								element: <ProductDetails />,
							},
						],
					},
				],
				// loader: teamLoader,
			},
			{
				path: "checkout",
				element: <CheckoutPage />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
