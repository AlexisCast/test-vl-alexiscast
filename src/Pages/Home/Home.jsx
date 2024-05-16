import { redirect } from "react-router-dom";

const Home = () => {
	return <div>This is the Home Page</div>;
};

export default Home;

export const loader = async ({ request, params }) => {
	return redirect("/Products");
};
