import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/home";
import SobreMim from "./pages/sobre";
import Menu from "./components/header";
import Footer from "components/footer";

function AppRoutes() {
	return (
		<BrowserRouter>
         <Menu />

			<Routes>
				<Route path="/" element={<Inicio />} />
				<Route path="/sobre" element={<SobreMim />} />
				<Route path="*" element={<div>Página não encontrada</div>} />
			</Routes>

         <Footer />
		</BrowserRouter>
	);
}

export default AppRoutes;
