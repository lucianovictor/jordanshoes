import styles from './styles.module.scss'

export const Banner = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1>A melhor loja de Jordan</h1>
        <p>
          O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o
          jogador Michael Jordan.
        </p>
        <img src="/images/air-jordan-retro.png" alt="" />
      </div>
    </section>
  )
}
