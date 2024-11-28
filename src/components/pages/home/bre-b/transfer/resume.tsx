import Spacer from "@/components/atoms/spacer/spacer";
import styles from "./transfer.module.scss";
import BreBLayout from "@/components/templates/breb.layout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CustomModal from "@/components/molecules/modal/modal";
import { ChevronRight } from "react-feather";
import CustomButtonComponent from "@/components/atoms/button/custom.button";

function Resume() {
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const history = useNavigate();

  const confirmTransfer = () => {
    history("/home/bre-b/transfer/verification");
  };

  const goToHome = () => {
    history("/home");
  };

  const changeProduct = () => {
    history(-1)
  }

  const changeAmount = () => {
    history(-2)
  }

  const changeKey = () => {
    history('/home/bre-b/transfer/select-account')
  }

  const handleCancelModal = () => {
    setIsCancelModalOpen(!isCancelModalOpen);
  };

  return (
    <div>
      <section className={`${isCancelModalOpen ? "blurred" : ""}`}>
        <BreBLayout title="Validación de datos">
          <div className={`${styles.container}`}>
            <p>Valida los datos de la transferencia</p>
            <Spacer height={20} />
            <div className={`flex`}>
              <h2 className="body">Origen</h2>
              <Spacer height={20} />
              <div>
                <p>Producto Origen</p>
                <p className="bold">Ahorros 123-456-78-90</p>
                <div className={styles.change}>
                  <p className="bold">BankIA</p>
                  <button className={`${styles.link} bold row`} onClick={changeProduct}>
                    <p>Cambiar</p>
                    <ChevronRight />
                  </button>
                </div>
              </div>
              <hr />
              <p>Valor a transferir</p>
              <div className={styles.change}>
                <p className="bold">$100.000</p>
                <button className={`${styles.link} bold row`} onClick={changeAmount}>
                  <p>Cambiar</p>
                  <ChevronRight />
                </button>
              </div>
              <Spacer />
              <h2 className="body">Llave destino</h2>
              <Spacer height={20} />
              <p>Nombre</p>
              <p className="bold">Dan**** Gar****</p>

              <hr />
              <div className={styles.change}>
                <p className="bold">********594</p>
                <button className={`${styles.link} bold row`} onClick={changeKey}>
                  <p>Cambiar</p>
                  <ChevronRight />
                </button>
              </div>
            </div>
            <div className={`${styles.btn} ${styles.container__content} align-center`}>
              <CustomButtonComponent label={"Confirmar datos"} onClickFn={confirmTransfer} isEnabled />          
              <CustomButtonComponent label={"Cancelar"} onClickFn={handleCancelModal} isEnabled className={`btn-outline`} />
            </div>
          </div>
        </BreBLayout>
      </section>
      <CustomModal isOpen={isCancelModalOpen} handleModal={handleCancelModal}>
        <h2 className="body">¿Estás seguro de que deseas salir?</h2>
        <Spacer height={10} />
        <p>
          Si sales ahora, cualquier dato ingresado se perderá. ¿Te gustaría
          continuar o prefieres quedarte en la pantalla actual?
        </p>
        <Spacer height={10} />
        <div className={`${styles.btn} ${styles.container__content} align-center`}>
          <CustomButtonComponent label={"Continuar"} onClickFn={goToHome} isEnabled />          
          <CustomButtonComponent label={"Cancelar"} onClickFn={handleCancelModal} isEnabled className={`btn-outline`} />
        </div>
      </CustomModal>
    </div>
  );
}

export default Resume;
