
import Head from 'next/head'

import styles from './home.module.scss'


export default function Home() {
  return (
    <>
    <Head>
       <title>Início | publi.com</title>
    </Head>
    <main className={styles.contentContainer}>
      <section className={styles.hero}>
        <span>👏 Hey, bem-vindo</span>
        <h1>Notícias Sobre o
        <span> Mundo</span> em 2022</h1>
        <p>
        Tenha acesso a todas as publicações <br />
        <span>por R$9,90/mês</span>
        </p>
      </section>

      <img src='/images/avatar.svg' alt='News World' />
    </main>
    </>
  )
}
