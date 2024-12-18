import styles from "./bre-b.module.scss";
import Spacer from "@/components/atoms/spacer/spacer";
import BreBLayout from "@/components/templates/breb.layout";
import { useNavigate } from "react-router-dom";
import { CreditCard, Lock, Mail, Smartphone } from "react-feather";
import { BiBuilding } from "react-icons/bi";
import CircleOption from "@/components/atoms/circle-option/circle.option";

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
        <CircleOption
          onClickFn={goDocument}
          icon={<CreditCard size={30} />}
          label={"Documento de identidad"}
          className={`colorIconSecondary`}
        />
        <CircleOption
          onClickFn={goPhone}
          icon={<Smartphone size={30} />}
          label={"Número de celular"}
          className={`colorIconSecondary`}
        />
        <CircleOption
          onClickFn={goEmail}
          icon={<Mail size={30} />}
          label={"Correo electrónico"}
          className={`colorIconSecondary`}
        />
        <CircleOption
          onClickFn={goKey}
          icon={<Lock size={30} />}
          label={"Clave personalizada"}
          className={`colorIconSecondary`}
        />
        <CircleOption
          onClickFn={goCode}
          icon={<BiBuilding size={30} />}
          label={"Código de establecimiento"}
          className={`colorIconSecondary`}
        />
      </div>
    </BreBLayout>
  );
}

export default SelectAccount;
