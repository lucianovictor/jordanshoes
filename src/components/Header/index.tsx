import styles from './styles.module.scss'

export const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.discount}>
        <p>Ganhe R$ 10,00 de desconto no frete</p>
      </div>
      <div className={styles.title}>
        <h1>JordanShoes</h1>
      </div>
    </header>
  )
}
