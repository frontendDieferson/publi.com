import { GetStaticProps } from 'next'
import Head from 'next/head'
import { stripe } from '../services/stripe'
import { SubscribeButton } from '../components/SubscribeButton'


import styles from './home.module.scss'

interface HomeProps {
  product: {
    priceId: string,
    amount: number,
  }
}


export default function Home({ product }: HomeProps) {
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
        <span>por {product.amount} /mês</span>
        </p>
        <SubscribeButton priceId={product.priceId} />
      </section>

      <img src='/images/avatar.svg' alt='News World' />
     
    </main>
    </>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1KKrUeH5XimrPhN5ehYsePB7', {
   
  })

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price.unit_amount / 100),
  }

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, //24 Horas.
  }

}