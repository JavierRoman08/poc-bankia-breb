import Spacer from "@/components/atoms/spacer/spacer";
import styles from "./login.form.module.scss";
import InputTextComponent from "@/components/atoms/input/input";
import { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <form action="" className={styles.formContainer}>
      <InputTextComponent label="Usuario" value={username} onChange={handleChangeUsername} placeholder="Ingresa tu usuario" />
      <Spacer height={10} />
      <InputTextComponent label="Contraseña" type="password" value={password} onChange={handleChangePassword} placeholder="Ingresa tu contraseña" />
    </form>
  );
}

export default LoginForm;
