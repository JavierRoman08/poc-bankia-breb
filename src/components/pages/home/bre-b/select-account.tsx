import styles from "./bre-b.module.scss";
import Spacer from "@/components/atoms/spacer/spacer";
import BreBLayout from "@/components/templates/breb.layout";
import { useNavigate } from "react-router-dom";
import Seccion from "@/ui-components/Seccion";
import { CreditCard, Lock, Mail, Smartphone } from "react-feather";
import { BiBuilding } from "react-icons/bi";

function SelectAccount() {
  const history = useNavigate();

  const goDocument = () => {
    history("/home/bre-b/transfer/select-account/document");
  };

  const goCode = () => {
    history("/home/bre-b/transfer/select-account/code");
  };

  const goPhone = () => {
    history("/home/bre-b/transfer/select-account/phone");
  };

  const goEmail = () => {
    history("/home/bre-b/transfer/select-account/email");
  };

  const goKey = () => {
    history("/home/bre-b/transfer/select-account/key");
  };

  return (
    <BreBLayout>
      <h2 className="subtitle align-center">Selecciona el tipo de cuenta</h2>
      <Spacer />
      <div className={`${styles.accountOptionsContainer} gap`}>
        <Seccion
          frame31304={<CreditCard size={35} />}
          label={"Documento de identidad"}
          className={styles.accountOptionsContainer__item}
          onClick={goDocument}
        />
        <Seccion
          frame31304={<Smartphone size={35} />}
          label={"Numero de celular"}
          className={styles.accountOptionsContainer__item}
          onClick={goPhone}
        />
        <Seccion
          frame31304={<Mail size={35} />}
          label={"Correo electronico"}
          className={styles.accountOptionsContainer__item}
          onClick={goEmail}
        />
        <Seccion
          frame31304={<Lock size={35} />}
          label={"Clave Personalizada"}
          className={styles.accountOptionsContainer__item}
          onClick={goKey}
        />
        <Seccion
          frame31304={<BiBuilding size={35} />}
          label={"Codigo de establecimiento"}
          className={styles.accountOptionsContainer__item}
          onClick={goCode}
        />
      </div>
    </BreBLayout>
  );
}

export default SelectAccount;
