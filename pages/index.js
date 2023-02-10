import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Featured from '../components/Featured'
import PizzaList from '../components/PizzaList'

const inter = Inter({ subsets: ['latin'] })

export default function Home({pizzaList}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza resturant in Lagos..</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="Best pizza in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      <PizzaList pizzaList={pizzaList}/>
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: res.data,
    }
  }
}