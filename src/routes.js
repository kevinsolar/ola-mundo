import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/home";
import SobreMim from "./pages/sobre";
import Menu from "./components/header";
import Footer from "components/footer";
import PaginaPadrao from "components/PaginaPadrao";
import Post from "pages/Post";
import Page404 from "pages/404";

function AppRoutes() {
	return (
		<BrowserRouter>
			<Menu />

			<Routes>
				<Route path="/" element={<PaginaPadrao />}>
					{/* o path "/" pode ser substituido por index, para dizer que é o mesmo caminho do pai, ou seja, inicio */}
					<Route index element={<Inicio />} />
					<Route path="sobre" element={<SobreMim />} />
				</Route>

				{/* 
               Na rota "/", a estrutura a ser renderizada é:
               
               <PaginaPadrao>
               <Inicio />
               </PaginaPadrao>
               
               Na rota "/sobre", a estrutura a ser renderizada é:
               
               <PaginaPadrao>
               <SobreMim />
               </PaginaPadrao>
               
               Assim é o uso do recurso de rotas aninhadas, onde uma rota de torna pai de outras
               rotas, a rota pai vai escolher qual rota filha vai ser renderizada atráves do
               caminho passado pelo path
               */}

				<Route path="posts/:id" element={<Post />} />
				<Route path="*" element={<Page404 />} />
			</Routes>

			<Footer />
		</BrowserRouter>
	);
}

export default AppRoutes;
