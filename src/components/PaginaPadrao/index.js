import Banner from "components/banner";
import { Outlet } from "react-router-dom";

export default function PaginaPadrao({ children }) {
	return (
		<main className="bg-stone-900">
			<Banner />

			<Outlet />
         {children}
		</main>
	);
}
