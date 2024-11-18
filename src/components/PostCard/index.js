import { Link } from 'react-router-dom';
import BotaoPrincipal from 'components/BotaoPrincipal';

export default function PostCard({ post }) {
   return (
      <Link className='w-full md:w-1/2 lg:w-1/3 2xl:w-1/4' to={`posts/${post.id}`}>
         <div className={`bg-stone-700 text-center w-auto shadow-lg shadow-stone-600 transition-transform duration-300 rounded-2xl overflow-hidden hover:-translate-y-4 pb-8 h-full`}>
            <div className="h-3/5 relative overflow-hidden w-full">
               <img
                  className="w-full h-full object-cover"
                  src={`/assets/posts/${post.id}/capa.png`}
                  alt='Imagem de capa'
               />
            </div>

            <div className='h-2/5 flex flex-col items-center justify-between'>
               <h2 className={`text-amber-500 text-xl my-7 mx-10`}>{post.titulo}</h2>

               <BotaoPrincipal> Ver </BotaoPrincipal>
            </div>
         </div>
      </Link>
   )
}