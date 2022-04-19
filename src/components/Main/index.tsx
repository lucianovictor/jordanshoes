import styles from './styles.module.scss'

export const Main = () => {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h2>Destaques</h2>
        <p>
          Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado.{' '}
        </p>
      </div>
    </main>
  )
}
