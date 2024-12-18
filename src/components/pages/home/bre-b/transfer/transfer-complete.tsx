import Spacer from "@/components/atoms/spacer/spacer";
import styles from "./transfer.module.scss";
import { useNavigate } from "react-router-dom";
import { FaCircleCheck } from "react-icons/fa6";
import { FiInfo } from "react-icons/fi";
import { FileText, RotateCw, Star } from "react-feather";
import CustomButtonComponent from "@/components/atoms/button/custom.button";
import CircleOption from "@/components/atoms/circle-option/circle.option";

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
        <div className={styles.detailContainer}>
          <label htmlFor="origin_product">Producto origen</label>
          <p>Cuenta de ahorros BankIA</p>
        </div>
        <Spacer height={15} />
        <div className={styles.detailContainer}>
          <label htmlFor="receiver">Recibe</label>
          <p>Pedro Perez</p>
        </div>
        <Spacer />
        <div className={styles.optionsContainer}>
          <CircleOption
            icon={<FileText size={30} />}
            label={"Compartir soporte"}
            className={`colorIconSecondary`}
          />
          <CircleOption
            icon={<Star size={30} />}
            label={"Agregar a favoritos"}
            className={`colorIconSecondary`}
          />
          <CircleOption
            icon={<RotateCw size={30} />}
            label={"Realizar otro pago"}
            className={`colorIconSecondary`}
          />
        </div>
      </section>
      <Spacer/>
      <CustomButtonComponent
        label={"Finalizar"}
        onClickFn={goToHome}
        isEnabled
      />
      <Spacer />
    </div>
  );
}

export default TransferCompleted;
