import { useNavigate } from "react-router-dom";
import styles from "./request.module.scss";
import LogoBWithText from "@/ui-components/LogoBWithText";
import { Button } from "@aws-amplify/ui-react";

function Request() {
  const history = useNavigate();

  const goToHome = () => {
    history("/home");
  };

  return (
    <section className={`${styles.container} col align-center`}>
      <LogoBWithText />
      <div className="col">
        <img src="/check.svg" alt="request_check" />
        <p className="title">Solicitud exitosa</p>
        <p>
          Validaremos la información que nos diste para poder hacer la
          devolución.
        </p>
      </div>
      <Button className={`btn-enabled`} onClick={goToHome}>
        Finalizar
      </Button>
    </section>
  );
}

export default Request;
