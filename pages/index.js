import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Welcome from "../components/organisms/Welcome/component";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

export default function Home() {
    const router = useRouter();
    const toLogin = () => {
        router.push('/login');
    }
  return (
    <div className={styles.container}>
      <Head>
        <title>Jukte.kz</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <Welcome toLogin={toLogin} />

      </main>
    </div>
  )
}
