import Menulink from "../menuLink";

export default function Menu() {
	return (
		<header>
			<nav className="h-16 sm:h-28 flex justify-center items-center gap-12 bg-stone-700">
				<Menulink to="/">Inicio</Menulink>
				<Menulink to="/sobre">Sobre</Menulink>
			</nav>
		</header>
	);
}
