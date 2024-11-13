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
    history("document");
  };

  const goCode = () => {
    history("code");
  };

  const goPhone = () => {
    history("phone");
  };

  const goEmail = () => {
    history("email");
  };

  const goKey = () => {
    history("key");
  };

  return (
    <BreBLayout title="Nuevo contacto">
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
          label={"Número de celular"}
          className={styles.accountOptionsContainer__item}
          onClick={goPhone}
        />
        <Seccion
          frame31304={<Mail size={35} />}
          label={"Correo electrónico"}
          className={styles.accountOptionsContainer__item}
          onClick={goEmail}
        />
        <Seccion
          frame31304={<Lock size={35} />}
          label={"Clave personalizada"}
          className={styles.accountOptionsContainer__item}
          onClick={goKey}
        />
        <Seccion
          frame31304={<BiBuilding size={35} />}
          label={"Código de establecimiento"}
          className={styles.accountOptionsContainer__item}
          onClick={goCode}
        />
      </div>
    </BreBLayout>
  );
}

export default SelectAccount;
