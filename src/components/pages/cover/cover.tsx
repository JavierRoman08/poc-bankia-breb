import styles from './cover.module.scss'

function Cover() {
  return (
    <section className={`${styles.cover} gap container`}>
      <div className={styles.cover__text}>
        <h1 className={`${styles.title} row`}>BankIA</h1>
        <span>by Pragma</span>
      </div>
      <div className={styles.line} />
    </section>
  )
}

export default Cover
