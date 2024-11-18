import styles from './footer.module.css';
import { ReactComponent as MarcaRegistrada } from 'assets/marca_registrada.svg';

export default function Footer() {
   return (
      <footer className={`bg-stone-700 text-amber-50 ${styles.rodape}`}>
         <MarcaRegistrada />

         Desenvolvido por Kevin
      </footer>
   )
}