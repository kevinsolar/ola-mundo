import styles from "./Header.module.css";
import Menulink from "../menuLink";

export default function Menu() {
	return (
		<header>
			<nav className={styles.navegacao}>
				<Menulink to="/">Inicio</Menulink>
				<Menulink to="/sobre">Sobre</Menulink>
			</nav>
		</header>
	);
}
