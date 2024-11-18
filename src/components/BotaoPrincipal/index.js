import styles from './botaoPrincipal.module.css'

export default function BotaoPrincipal({ children, tamanho }) {
   return (
      <button className={`bg-stone-50 text-stone-800 border-2 hover:border-amber-500
         ${styles.botaoPrincipal} 
         ${styles[tamanho]}
      `}>{children}</button>
   )
}