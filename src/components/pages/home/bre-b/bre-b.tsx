import styles from "./bre-b.module.scss";
import Spacer from "@/components/atoms/spacer/spacer";
import Cardprompt from "@/ui-components/Cardprompt";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BreBLayout from "@/components/templates/breb.layout";
import { ChevronRight, DollarSign } from "react-feather";
import Seccion from "@/ui-components/Seccion";
import { IoSwapHorizontal } from "react-icons/io5";
import { MdQrCodeScanner } from "react-icons/md";
import CustomModal from "@/components/molecules/modal/modal";

function BreB() {
  const [isModalActive, setIsModalActive] = useState(false);
  const history = useNavigate();

  const handleTrasnfer = () => {
    setIsModalActive(!isModalActive);
  };

  const startTransfer = () => {
    history("/home/bre-b/transfer");
  };

  const goToHistory = () => {
    history("/home/bre-b/history");
  };

  const scanQrCode = () => {
    history("/home/bre-b/scan-qr");
  };

  const goMyKeys = () => {
    history("/home/bre-b/my-keys");
  };

  return (
    <>
      <section className={`${styles.homeBreB} ${isModalActive ? 'blurred' : ''}`}>
        <BreBLayout>
          <img src="/card-qr.svg" alt="card_qr_img" className="align-center" />
          <Spacer height={20} />
          <h2 className="subtitle">Transacciones</h2>
          <Spacer height={20} />

          <div className={styles.optionsContainer}>
            <Seccion
              frame31304={<IoSwapHorizontal size={35} />}
              label={"Transferir"}
              onClick={handleTrasnfer}
              className={styles.optionsContainer__item}
            />
            <Seccion
              frame31304={<MdQrCodeScanner size={35} />}
              label={"Mis Código QR"}
              className={styles.optionsContainer__item}
            />
            <Seccion
              frame31304={<DollarSign size={35} />}
              label={"Cobrar a alguien"}
              className={styles.optionsContainer__item}
            />
          </div>
          <Spacer />
          <h2 className="subtitle">Consultar</h2>
          <Spacer height={20} />
          <Cardprompt
            className={styles.cardPrompt}
            cardprompt={
              <div className={`${styles.cardPrompt__content} row align-center`}>
                <p>Mis llaves</p>
                <ChevronRight />
              </div>
            }
            onClick={goMyKeys}
          />
          <Cardprompt
            className={styles.cardPrompt}
            cardprompt={
              <div className={`${styles.cardPrompt__content} row align-center`}>
                <p>Movimientos</p>
                <ChevronRight />
              </div>
            }
            onClick={goToHistory}
          />
          <Cardprompt
            className={styles.cardPrompt}
            cardprompt={
              <div className={`${styles.cardPrompt__content} row align-center`}>
                <p>Peticiones, quejas y reclamos</p>
                <ChevronRight />
              </div>
            }
          />
        </BreBLayout>
      </section>
      <CustomModal isOpen={isModalActive} handleModal={handleTrasnfer}>
      <h2 className="subtitle">¿Cómo deseas transferir?</h2>
          <Spacer height={10} />
          <p>Selecciona el medio con el que deseas transferir o pagar</p>
          <Spacer height={20} />
          <Cardprompt
            className={styles.cardPrompt}
            cardprompt={
              <div className={`${styles.cardPrompt__content} row align-center`}>
                <p>Con llave</p>
                <ChevronRight />
              </div>
            }
            onClick={startTransfer}
          />
          <Cardprompt
            className={styles.cardPrompt}
            cardprompt={
              <div className={`${styles.cardPrompt__content} row align-center`}>
                <p>Leer código QR</p>
                <ChevronRight />
              </div>
            }
            onClick={scanQrCode}
          />
      </CustomModal>
    </>
  );
}

export default BreB;
