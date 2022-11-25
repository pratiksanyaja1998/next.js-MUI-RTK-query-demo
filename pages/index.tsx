import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button } from '@mui/material';

export default function Home() {
  return (
    <div className={styles.container}>
      <Button variant="contained" color='primary' >Hello</Button>
    </div>
  )
}
