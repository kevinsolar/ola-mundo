import { Link, useLocation } from "react-router-dom";
import styles from "./menuLink.module.css";

export default function Menulink({ children, to }) {
	const localizacao = useLocation();

	return (
		<Link
			className={`${styles.link} ${
				localizacao.pathname === to ? styles.linkDestacado : ""
			}`}
			to={to}
		>
			{children}
		</Link>

		// <NavLink
		// 	to={to}
      //    style={({ isActive, isPending }) => {
      //       return {
      //          textDecoration: isActive ? "underline" : "",
      //       }
      //    }}
		// >
		// 	{children}
		// </NavLink>
	);
}
