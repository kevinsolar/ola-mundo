import Banner from "components/banner";
import styles from './inicio.module.css';
import Post from "components/Post";

import posts from 'json/posts.json';

export default function Inicio() {
   return (
      <main>
         <Banner />

         <ul className={styles.posts}>
            {posts.map((post) => (
               <li key={post.id}>
                  <Post post={post} />
               </li>
            ))}
         </ul>

      </main>
   )
}