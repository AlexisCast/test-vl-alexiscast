import { Outlet, useNavigation } from "react-router-dom";

import DesktopNavBar from "../../Components/Navigation/DesktopNavBar/DesktopNavBar";

import styles from "./Root.module.css";

export const RootLayout = () => {
	const navigation = useNavigation();
	return (
		<>
			<DesktopNavBar />
			<div>
				<p>{navigation.state === "loading" && "Loading..."}</p>
			</div>
			<main className={styles.Main}>
				<Outlet />
			</main>
		</>
	);
};
