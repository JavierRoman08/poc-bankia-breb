import styles from "./bre-b.module.scss";
import Spacer from "@/components/atoms/spacer/spacer";
import Cardprompt from "@/ui-components/Cardprompt";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BreBLayout from "@/components/templates/breb.layout";
import { ChevronRight, DollarSign } from "react-feather";
import Seccion from "@/ui-components/Seccion";
import { IoSwapHorizontal } from "react-icons/io5";
import { MdClose, MdQrCodeScanner } from "react-icons/md";

function BreB() {
  const [isModalActive, setIsModalActive] = useState(false);
  const history = useNavigate();

  const handleTrasnfer = () => {
    setIsModalActive(!isModalActive);
  };

  const startTransfer = () => {
    history("/home/bre-b/transfer");
  };

  return (
    <>
      <section
        className={`${styles.homeBreB} ${isModalActive ? styles.blurred : ""}`}
      >
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
              label={"Mis Codigos QR"}
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
                <p>Con llave</p>
                <ChevronRight />
              </div>
            }
          />
          <Cardprompt
            className={styles.cardPrompt}
            cardprompt={
              <div className={`${styles.cardPrompt__content} row align-center`}>
                <p>Movimientos</p>
                <ChevronRight />
              </div>
            }
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
      {isModalActive ? (
        <div className={styles.modal}>
          <div className={styles.modal__close}>
            <MdClose onClick={handleTrasnfer} size={25} />
          </div>
          <h2 className="subtitle">Como deseas transferir?</h2>
          <Spacer height={10} />
          <p>Selecciona el medio que deseas Trasferir o pagar</p>
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
                <p>Leer codigo QR</p>
                <ChevronRight />
              </div>
            }
          />
        </div>
      ) : null}
    </>
  );
}

export default BreB;
