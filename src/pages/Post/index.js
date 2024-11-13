import "./post.css";
import { useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "components/PostModelo";
import ReactMarkdown from "react-markdown";
import PaginaPadrao from "components/PaginaPadrao";
import Page404 from "pages/404";
import PostCard from "components/PostCard";

export default function Post() {
	const parametros = useParams();

	const post = posts.find((post) => {
		return post.id === Number(parametros.id);
	});

	if (!post) {
		return <Page404 />;
	}

	const postsRecomendados = posts //Recebe a const posts, mas...
		.filter((post) => post.id !== Number(parametros.id)) //filtra para excluir o post atual.
		.sort((a, b) => b.id - a.id) //ordena, mas invertendo os valores para ser decrescente.
		.slice(0, 4); //limita o tamanho da array, iniciando no i[0] e indo até 4 posições

	return (
		<PaginaPadrao>
			<PostModelo
				fotoCapa={`/assets/posts/${post.id}/capa.png`}
				titulo={post.titulo}
			>
				<div className="post-markdown-container">
					<ReactMarkdown>{post.texto}</ReactMarkdown>
				</div>

				<h2 className="tituloOutrosPosts">
					Outros posts que você pode gostar:
				</h2>

				<ul className="postsRecomendados">
					{postsRecomendados.map((card) => (
						<li key={card.id}>
							<PostCard post={card} />
						</li>
					))}
				</ul>
			</PostModelo>
		</PaginaPadrao>
	);
}
