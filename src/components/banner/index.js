import styles from './banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png'

export default function Banner() {
   return (
      <section className={`pt-12 px-32 pb-24 bg-amber-500 flex flex-wrap overflow-hidden text-stone-800`}>
         <div className={`w-full sm:w-1/2`}>
            <h1 className={styles.titulo}>Olá mundo</h1>

            <p className={styles.paragrafo}> 
               olá, me chamo Kevin, sou Desenvolvedor Wordpress Jr e estou buscando conhecimentos em React para migrar de técnologia. Aqui vou compartilhar meus projetos, tanto os antigos, quanto novos e qualquer progresso com React!
            </p>
         </div>

         <div className={`w-full sm:w-1/2 relative ${styles.imagens}`}>
            <img
               className={`absolute right-5 bottom-0 w-auto ${styles.circuloColorido}`}
               src={circuloColorido}
               aria-hidden={true}
               alt='xx'
            />
            <img
               className={`absolute right-0 bottom-0 h-full w-auto ${styles.minhaFoto}`}
               src='https://github.com/kevinsolar.png'
               alt='Minha Foto'
            />
         </div>
      </section>
   )
}