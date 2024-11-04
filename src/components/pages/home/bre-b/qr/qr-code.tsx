import { useNavigate } from "react-router-dom";
import styles from "./qr-code.module.scss";
import { ChevronLeft, Image } from "react-feather";
import Seccion from "@/ui-components/Seccion";
import { PiFlashlight } from "react-icons/pi";
import Spacer from "@/components/atoms/spacer/spacer";

function QrCode() {
  const history = useNavigate();

  const goBack = () => {
    history(-1);
  };

  const continueTransfer = () => {
    history('/home/bre-b/transfer/from')
  }

  return (
    <section className={`${styles.container} col`}>
      <nav className={`${styles.navbar}`}>
        <ChevronLeft className={styles.arrow} size={30} onClick={goBack} />
        <h1 className="subtitle  bold">Escanea Qr</h1>
      </nav>
      <div className={styles.content}>
        
          <div>
          <h2 className="subtitle align-center">Pagar con Qr</h2>
          <Spacer />
          <button className="align-center" onClick={continueTransfer}>
            <img
              src="/qr-code.png"
              alt="qr-code"
              className={`${styles.qrImage} `}
            />
          </button>
          </div>
          <div className={styles.optionsContainer}>
          <div>
            <Seccion
              frame31304={<PiFlashlight size={35} />}
              color={"black"}
              label={"Linterna"}
              className={styles.optionsContainer__item}
            />
          </div>
          <div>
            <Seccion
              frame31304={<Image size={35} />}
              color={"black"}
              label={"Imagen"}
              className={styles.optionsContainer__item}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default QrCode;
