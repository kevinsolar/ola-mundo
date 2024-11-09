import styles from './banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png'

export default function Banner() {
   return (
      <section className={styles.banner}>
         <div className={styles.apresentacao}>
            <h1 className={styles.titulo}>Olá mundo</h1>

            <p className={styles.paragrafo}> 
               olá, me chamo Kevin, sou Desenvolvedor Wordpress Jr e estou buscando conhecimentos em React para migrar de técnologia. Aqui vou compartilhar meus projetos, tanto os antigos, quanto novos e qualquer progresso com React!
            </p>
         </div>

         <div className={styles.imagens}>
            <img
               className={styles.circuloColorido}
               src={circuloColorido}
               aria-hidden={true}
               alt='xx'
            />
            <img
               className={styles.minhaFoto}
               src='https://github.com/kevinsolar.png'
               alt='Minha Foto'
            />
         </div>
      </section>
   )
}