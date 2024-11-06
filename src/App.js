import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./components/home";
import SobreMim from "./components/sobre";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Inicio />} />
				<Route path="/sobre" element={<SobreMim />} />
				<Route path="*" element={<div>Página não encontrada</div>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
