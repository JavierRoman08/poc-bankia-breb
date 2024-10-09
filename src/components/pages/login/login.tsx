import Spacer from '@/components/atoms/spacer/spacer';
import styles from './login.module.scss';
import LoginForm from '@/components/organisms/login-form/login.form';

function Login() {
  return (
    <section className={`${styles.login} container`}>
        <h1 className={`color-principal row title align-center`}>BankIA</h1>
        <aside className={styles.login__subtitle}>
          <h2>Hola, nos alegra mucho que estés aquí</h2>
          <p className={`body`}>Para continuar, inicia sesión con tu usuario y contraseña</p>
          <Spacer />
        <LoginForm />
        </aside>
        <a href='/home' className={`${styles.btn} align-center body`}>Continuar</a>
    </section>
  )
}

export default Login
