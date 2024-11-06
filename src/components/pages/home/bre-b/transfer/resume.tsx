import Spacer from "@/components/atoms/spacer/spacer";
import styles from "./transfer.module.scss";
import BreBLayout from "@/components/templates/breb.layout";
import { Button } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CustomModal from "@/components/molecules/modal/modal";
import { ChevronRight } from "react-feather";

function Resume() {
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const history = useNavigate();

  const confirmTransfer = () => {
    history("/home/bre-b/transfer/verification");
  };

  const goToHome = () => {
    history("/home");
  };

  const handleCancelModal = () => {
    setIsCancelModalOpen(!isCancelModalOpen);
  };

  return (
    <div>
      <section className={`${isCancelModalOpen ? "blurred" : ""}`}>
        <BreBLayout>
          <div className={styles.container}>
            <p>Valida los datos de la transferencia</p>
            <Spacer height={20} />
            <div className={styles.container__content}>
              <h2 className="body">Origen</h2>
              <Spacer height={20} />
              <div>
                <p>Producto Origen</p>
                <p className="bold">Ahorros 123-456-78-90</p>
                <div className={styles.change}>
                  <p className="bold">BankIA</p>
                  <div className={`${styles.link} row`}>
                    <p>Cambiar</p>
                    <ChevronRight />
                  </div>
                </div>
              </div>
              <hr />
              <p>Valor a transferir</p>
              <div className={styles.change}>
                <p className="bold">$100.000</p>
                <div className={`${styles.link} row`}>
                  <p>Cambiar</p>
                  <ChevronRight />
                </div>
              </div>
              <Spacer />
              <h2 className="body">Llave destino</h2>
              <Spacer height={20} />
              <p>Nombre</p>
              <p className="bold">Dan**** Gar****</p>

              <hr />
              <div className={styles.change}>
                <p className="bold">********594</p>
                <div className={`${styles.link} row`}>
                  <p>Cambiar</p>
                  <ChevronRight />
                </div>
              </div>
            </div>
            <Spacer />
            <div className={`${styles.btn} ${styles.container__content} align-center`}>
              <Button className={`btn-enabled`} onClick={confirmTransfer}>
                Confirmar datos
              </Button>
              <Button className={`btn-outline`} onClick={handleCancelModal}>Cancelar</Button>
            </div>
            <Spacer/>
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
          <Button className={`btn-enabled`} onClick={goToHome}>
            Continuar
          </Button>
          <Button className={`btn-outline`} onClick={handleCancelModal}>Cancelar</Button>
        </div>
      </CustomModal>
    </div>
  );
}

export default Resume;
