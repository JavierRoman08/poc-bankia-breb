import Spacer from "@/components/atoms/spacer/spacer";
import BreBLayout from "@/components/templates/breb.layout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./my-qrs.module.scss";
import CustomButtonComponent from "@/components/atoms/button/custom.button";

function GeneratedQR() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const history = useNavigate();

  const handleCancelModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const completeShare = () => {
    history("/home/bre-b/my-qrs/completed");
  };

  return (
    <BreBLayout title="Compartir código QR">
      <h2 className="body">Mi código QR</h2>
      <img src="/my-qr.svg" alt="my_qr_code" className={styles.qrCode} />
      <h2 className="body">Origen</h2>
      <Spacer height={20} />
      <div>
        <p className="tiny">Producto origen</p>
        <p className="bold tiny">Ahorros 123-456-78-90</p>
        <p className="bold tiny">BankIA</p>
        <hr />
      </div>
      <Spacer />
      <div>
        <CustomButtonComponent
          label={"Compartir"}
          onClickFn={completeShare}
          isEnabled
        />
        <Spacer height={10} />
        <CustomButtonComponent
          label={"Modificar"}
          onClickFn={handleCancelModal}
          isEnabled
          className={`btn-outline`}
        />
      </div>
    </BreBLayout>
  );
}

export default GeneratedQR;
