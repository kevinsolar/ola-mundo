import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/home";
import SobreMim from "./pages/sobre";
import Menu from "./components/header";

function AppRoutes() {
	return (
		<BrowserRouter>
         <Menu />

			<Routes>
				<Route path="/" element={<Inicio />} />
				<Route path="/sobre" element={<SobreMim />} />
				<Route path="*" element={<div>Página não encontrada</div>} />
			</Routes>
		</BrowserRouter>
	);
}

export default AppRoutes;
