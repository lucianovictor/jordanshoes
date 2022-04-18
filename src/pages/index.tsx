import Head from 'next/head'

import styles from 'styles/home.module.scss'
import { Header } from 'components/Header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS Boilerplate</title>
      </Head>
      <Header />
    </div>
  )
}
