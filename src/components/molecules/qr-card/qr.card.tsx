import styles from "./qr.card.module.scss";
import { EyeOff, Share2 } from "react-feather";
import KeyType from "../key-type/key.type";
import Option from "@/components/atoms/option/option";

interface QrCardProps {
  icon: any;
  title: string;
  label?: string;
  onShareFn?: any;
}

const QrCard = ({ icon, title, label, onShareFn }: QrCardProps) => {

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
              <span>Ahorros 213********</span>
              <Option icon={<EyeOff size={15} />} label={""} />
            </div>
          </div>
          <img src="/my-qr.png" alt="qr_code_key" className={styles.qrCode}/>
        </div>
        <hr />
        <div className={styles.dropdown}>
          <div className="row">
            <Option
              icon={<Share2 size={15} onClick={onShareFn} />}
              label={"Compartir"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QrCard;
