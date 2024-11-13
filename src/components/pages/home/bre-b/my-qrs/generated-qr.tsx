import Spacer from "@/components/atoms/spacer/spacer";
import BreBLayout from "@/components/templates/breb.layout";
import { Button } from "@aws-amplify/ui-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./my-qrs.module.scss";

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
            <Button className={`btn-enabled`} onClick={completeShare}>
              Compartir
            </Button>
            <Spacer height={10} />
            <Button className={`btn-outline`} onClick={handleCancelModal}>
              Modificar
            </Button>
          </div>
        </BreBLayout>
  );
}

export default GeneratedQR;
