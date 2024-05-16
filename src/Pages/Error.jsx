import { useRouteError } from "react-router-dom";
import DesktopNavBar from "../Components/Navigation/DesktopNavBar/DesktopNavBar";

const ErrorPage = () => {
	const error = useRouteError();

	let message = "Something went wrong!";

	if (error.status === 500) {
		message = error.data.msg;
	}

	return (
		<>
			<DesktopNavBar />
			<main>
				<h1>An Error occured!</h1>
				<p>{message}</p>
			</main>
		</>
	);
};

export default ErrorPage;
