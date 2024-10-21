import styles from './cover.module.scss'

function Cover() {
  return (
    <section className={`${styles.cover} gap container`}>
      <div className={styles.cover__text}>
        <h1 className={`${styles.title} row`}>BankIA</h1>
        <img src='/bypragma.svg' alt='bypragma_logo' />
      </div>
      <div className={styles.line} />
    </section>
  )
}

export default Cover
