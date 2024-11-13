import { useState } from "react";
import styles from "./key.card.module.scss";
import { ChevronDown, ChevronUp, Edit, EyeOff, Share2 } from "react-feather";
import KeyType from "../key-type/key.type";
import { SwitchField } from "@aws-amplify/ui-react";
import Spacer from "@/components/atoms/spacer/spacer";
import Option from "@/components/atoms/option/option";

interface KeyCardProps {
  icon: any;
  title: string;
  label: string;
  onShareFn?: any;
  onEditFn?: any;
  isActive?: boolean;
}

const KeyCard = ({
  icon,
  title,
  label,
  onShareFn,
  onEditFn,
  isActive,
}: KeyCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isActiveKey, setIsActiveKey] = useState(isActive);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleActive = () => {
    setIsActiveKey(!isActiveKey);
  };

  return (
    <div className={`${styles.card} ${!isActiveKey ? styles.disabled : ''}`}>
      <div className="row align-center">
        <KeyType
          icon={icon}
          optionIcon={undefined}
          title={title}
          label={label}
          onClickFn={undefined}
        />
        <SwitchField
          fontSize={14}
          label={isActiveKey ? "Bloquear" : "Activar"}
          isChecked={isActiveKey}
          onChange={handleActive}
          trackCheckedColor={"#00BD81"}
          className={styles.switch}
        />
      </div>
      <div className={styles.card__content}>
        <p>CC 1203912313</p>
        <hr />
        <div className={styles.dropdown}>
          <div className="row">
            <Option icon={<Share2 size={15} onClick={onShareFn} />} label={"Compartir"} />
          </div>
          {isExpanded ? <ChevronUp onClick={toggleExpand} /> : <ChevronDown onClick={toggleExpand} />}
        </div>
        <div className={`${styles.content} ${isExpanded ? styles.expanded : ""}`}>
            <Spacer height={10}/>
            <h2 className="tiny">Cuenta asociada</h2>
            <p>BankIA</p>
            <div className="row">
                <span>Ahorros 213********</span>
                <Option icon={<EyeOff size={15} />} label={"Ver"} />
            </div>
            <h2 className="tiny">Estado</h2>
            <p>Apagado</p>
            <h2 className="tiny">Fecha de inscripcion</h2>
            <p>12 / Agosto / 2024</p>
            <Option icon={<Edit size={15} />} label={"Editar"} onClickFn={onEditFn} />
        </div>
      </div>
    </div>
  );
};

export default KeyCard;
