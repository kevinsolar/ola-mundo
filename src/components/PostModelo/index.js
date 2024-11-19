import styles from './postModelo.module.css'

export default function PostModelo({ fotoCapa, titulo, children }) {
   return (
      <article className={styles.postModeloContainer}>
         <div
            className={styles.fotoCapa}
            style={{ backgroundImage: `url(${fotoCapa})` }}
         >
         </div>

         <h2 className={`text-amber-600 ${styles.titulo}`}>
            {titulo}
         </h2>

         <div className={styles.postConteudoContainer}>
            {children}            
         </div>
      </article>
   )
}