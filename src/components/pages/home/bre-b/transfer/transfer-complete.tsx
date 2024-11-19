import Spacer from "@/components/atoms/spacer/spacer";
import styles from "./transfer.module.scss";
import { Button, TextField } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
import { FaCircleCheck } from "react-icons/fa6";
import { FiInfo } from "react-icons/fi";
import Seccion from "@/ui-components/Seccion";
import { FileText, RotateCw, Star } from "react-feather";

function TransferCompleted() {
  const history = useNavigate();

  const goToHome = () => {
    history("/home");
  };

  return (
    <div className={`${styles.transferContainer} col`}>
      <div className={`${styles.transferCompleted} align-center col`}>
        <FaCircleCheck size={80} className={styles.link} />
        <Spacer height={20} />
        <img src="/logo-transfer.svg" alt="logo-bre-b" />
        <Spacer height={20} />
        <h4>Transferencia existosa</h4>
        <h2 className="bold">$100.000</h2>
        <p className="tiny">Comprobante No. 0000000061577</p>
        <p className="tiny">Completada, 27 Octubre 3:42 p.m.</p>
      </div>
      <section className={`${styles.transferContainer__resume} container`}>
        <h4 className={`${styles.transferCompleted__detail} row`}>
          <FiInfo /> Detalles de la operación
        </h4>
        <Spacer height={20} />
        <TextField
          label="Producto origen"
          variation="quiet"
          defaultValue={"Cuenta de ahorros BankIA"}
        />
        <Spacer height={20} />
        <TextField
          label="Recibe"
          variation="quiet"
          defaultValue={"Pedrito Perez"}
        />
        <Spacer />
        <div className={styles.optionsContainer}>
          <Seccion
            frame31304={<FileText size={35} />}
            label={"Compartir soporte"}
            className={styles.optionsContainer__item}
          />
          <Seccion
            frame31304={<Star size={35} />}
            label={"Agregar a favoritos"}
            className={styles.optionsContainer__item}
          />
          <Seccion
            frame31304={<RotateCw size={35} />}
            label={"Realizar otro pago"}
            className={styles.optionsContainer__item}
          />
        </div>
      </section>
      <Button className={`btn-enabled`} onClick={goToHome}>
        Finalizar
      </Button>
      <Spacer  />
    </div>
  );
}

export default TransferCompleted;
