import styles from "./inicio.module.css";
import PostCard from "components/PostCard";

import posts from "json/posts.json";

export default function Inicio() {
   return (
      <div className="container max-w-[1920px] mx-auto">
         <div className={`${styles.posts} flex flex-wrap pb-12 justify-center gap-8 2xl:-mt-10`}>
            {posts.map((post) => (
               <PostCard key={post.id} post={post} />
            ))}
         </div>
      </div>
   );
}
