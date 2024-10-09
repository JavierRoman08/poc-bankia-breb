import styles from './input.module.scss';

function InputComponent({placeholder, type }: any) {
  return (
    <input type={type} placeholder={placeholder} className={styles.input} />
  )
}

export default InputComponent
