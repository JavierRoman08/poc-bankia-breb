import styles from "./qr.card.module.scss";
import { Eye, EyeOff, Share2 } from "react-feather";
import KeyType from "../key-type/key.type";
import Option from "@/components/atoms/option/option";
import { useState } from "react";

interface QrCardProps {
  icon: any;
  title: string;
  label?: string;
  onShareFn?: any;
}

const QrCard = ({ icon, title, label, onShareFn }: QrCardProps) => {
  const [showData, setShowData] = useState(false)

  const handleShowData = () => {
    setShowData(!showData)
  }

  return (
    <div className={`${styles.card}`}>
      <div className="row align-center">
        <KeyType
          icon={icon}
          optionIcon={undefined}
          title={title}
          label={label ?? 'Registrar llave'}
          onClickFn={undefined}
        />
      </div>
      <div className={styles.card__content}>
        <div className="row">
          <div className={`${styles.content}`}>
            <p>CC 1203912313</p>
            <h2 className="tiny">Cuenta asociada</h2>
            <p>BankIA</p>
            <div className="row gap">
              <span>Ahorros {showData ? '21359123832' : '213********'} </span>
              <Option icon={showData ? <EyeOff size={15} /> : <Eye size={15} /> } label={""} onClickFn={handleShowData} />
            </div>
          </div>
          <img src="/my-qr.png" alt="qr_code_key" className={styles.qrCode}/>
        </div>
        <hr />
        <div className={styles.dropdown}>
          <div className="row">
            <Option
              onClickFn={onShareFn} 
              icon={<Share2 size={15} />}
              label={"Compartir"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QrCard;
