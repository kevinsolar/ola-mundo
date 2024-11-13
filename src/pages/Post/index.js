import "./post.css";
import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "components/PostModelo";
import ReactMarkdown from "react-markdown";
import PaginaPadrao from "components/PaginaPadrao";
import Page404 from "pages/404";

export default function Post() {
	const parametros = useParams();

	const post = posts.find((post) => {
		return post.id === Number(parametros.id);
	});

	if (!post) {
		return <Page404 />;
	}

	return (
		<Routes>
			<Route path="*" element={<PaginaPadrao />}>

				<Route
					index
					element={
						<PostModelo
							fotoCapa={`/assets/posts/${post.id}/capa.png`}
							titulo={post.titulo}
						>
							<div className="post-markdown-container">
								<ReactMarkdown>{post.texto}</ReactMarkdown>
							</div>
						</PostModelo>
					}
				/>
            
			</Route>
		</Routes>
	);
}
