import styles from "./bre-b.module.scss";
import Spacer from "@/components/atoms/spacer/spacer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BreBLayout from "@/components/templates/breb.layout";
import { Eye, EyeOff } from "react-feather";
import { IoSwapHorizontal } from "react-icons/io5";
import { MdQrCodeScanner } from "react-icons/md";
import CustomModal from "@/components/molecules/modal/modal";
import CircleOption from "@/components/atoms/circle-option/circle.option";
import CardPrompt from "@/components/atoms/card-prompt/card.prompt";

function BreB() {
  const [isModalActive, setIsModalActive] = useState(false);
  const [showData, setShowData] = useState(false);
  const history = useNavigate();

  const handleTransfer = () => {
    setIsModalActive(!isModalActive);
  };

  const startTransfer = () => {
    history("transfer");
  };

  const goToHistory = () => {
    history("history");
  };

  const scanQrCode = () => {
    history("scan-qr");
  };

  const goToMyQRs = () => {
    history("my-qrs");
  };

  const goMyKeys = () => {
    history("my-keys");
  };

  const handleShowData = () => {
    setShowData(!showData);
  };

  return (
    <>
      <section
        className={`${styles.homeBreB} ${isModalActive ? "blurred" : ""}`}
      >
        <BreBLayout>
          <div className={`${styles.keyData} row`}>
            <img src="/my-qr.svg" alt="" />
            <div className={styles.keyData__info}>
              <p className="tiny">Gabriel molina cardona</p>
              <p>Llave principal</p>
              <p>{showData ? "123456789" : "*********"}</p>
              <div className={`${styles.keyData__showKey} row`}>
                <p>Ver llave</p>
                <button className="circle" onClick={handleShowData}>
                  {showData ? <EyeOff size={12} /> : <Eye size={12} />}
                </button>
              </div>
            </div>
          </div>
          <Spacer height={20} />
          <h2 className="subtitle">Transacciones</h2>
          <Spacer height={20} />
          <div className={styles.optionsContainer}>
            <CircleOption
              onClickFn={handleTransfer}
              icon={<IoSwapHorizontal size={30} />}
              label={"Transferir"}
            />
            <CircleOption
              onClickFn={goToMyQRs}
              icon={<MdQrCodeScanner size={30} />}
              label={"Mis Códigos QR"}
            />
            <CircleOption imageUrl="/cobrar.svg" label={"Cobrar a alguien"} />
          </div>
          <Spacer />
          <h2 className="subtitle">Consultar</h2>
          <Spacer height={20} />
          <CardPrompt id={1} onClickFn={goMyKeys}>
            <p>Mis llaves</p>
          </CardPrompt>
          <CardPrompt id={2} onClickFn={goToHistory}>
            <p>Movimientos</p>
          </CardPrompt>
          <CardPrompt id={3} onClickFn={undefined}>
            <p>Peticiones, quejas y reclamos</p>
          </CardPrompt>
        </BreBLayout>
      </section>
      <CustomModal isOpen={isModalActive} handleModal={handleTransfer}>
        <h2 className="subtitle">¿Cómo deseas transferir?</h2>
        <Spacer height={10} />
        <p>Selecciona el medio con el que deseas transferir o pagar</p>
        <Spacer height={20} />
        <CardPrompt id={3} onClickFn={startTransfer}>
          <p>Con llave</p>
        </CardPrompt>
        <CardPrompt id={3} onClickFn={scanQrCode}>
          <p>Leer código QR</p>
        </CardPrompt>
      </CustomModal>
    </>
  );
}

export default BreB;
