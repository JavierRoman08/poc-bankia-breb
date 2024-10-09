import Spacer from "@/components/atoms/spacer/spacer";
import styles from "./login.form.module.scss";
import { PasswordField, TextField } from "@aws-amplify/ui-react";

function LoginForm() {
  return (
    <form action="" className={styles.formContainer}>
      <TextField
        placeholder="Ingresa tu usuario"
        label="Usuario"
        errorMessage="Ha ocurrido un error"
        className={styles.field}
      />
      <Spacer height={20} />
      <PasswordField
        label="Contraseña"
        name="password"
        size="small"
        placeholder="Ingresa tu contraseña"
        className={styles.field}
      />
    </form>
  );
}

export default LoginForm;
