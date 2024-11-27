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
        <CircleOption onClickFn={goDocument} icon={<CreditCard size={30} />} label={"Documento de identidad"} />
        <CircleOption onClickFn={goPhone} icon={<Smartphone size={30} />} label={"Número de celular"} />
        <CircleOption onClickFn={goEmail} icon={<Mail size={30} />} label={"Correo electrónico"} />
        <CircleOption onClickFn={goKey} icon={<Lock size={30} />} label={"Clave personalizada"} />
        <CircleOption onClickFn={goCode} icon={<BiBuilding size={30} />} label={"Código de establecimiento"} />
      </div>
    </BreBLayout>
  );
}

export default SelectAccount;
