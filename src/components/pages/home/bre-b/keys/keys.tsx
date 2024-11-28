import CustomButtonComponent from "@/components/atoms/button/custom.button";
import Spacer from "@/components/atoms/spacer/spacer";
import KeyCard from "@/components/molecules/key-card/key.card";
import KeyType from "@/components/molecules/key-type/key.type";
import CustomModal from "@/components/molecules/modal/modal";
import BreBLayout from "@/components/templates/breb.layout";
import { Button } from "@aws-amplify/ui-react";
import { useState } from "react";
import {
  ArrowRight,
  CreditCard,
  Key,
  Lock,
  Mail,
  Smartphone,
} from "react-feather";
import { BiBuilding, BiQr } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function Keys() {
  const [isModalBlockActive, setIsModalBlockActive] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);
  const [keyActive, setKeyActive] = useState(true);
  const history = useNavigate();

  const handleShareModal = () => {
    setIsModalActive(!isModalActive);
  };

  const handleBlockModal = () => {
    setIsModalBlockActive(!isModalBlockActive);
  };

  const confirmKeyBlock = () => {
    setKeyActive(!keyActive);
    handleBlockModal();
  };

  // const goDocument = () => {
  //   history("create-key/document");
  // };

  const goCode = () => {
    history("create-key/code");
  };

  const goPhone = () => {
    history("create-key/phone");
  };

  const goEmail = () => {
    history("create-key/email");
  };

  const goKey = () => {
    history("create-key/key");
  };

  return (
    <>
      <section
        className={`${isModalActive || isModalBlockActive ? "blurred" : ""}`}
      >
        <BreBLayout title="Mis llaves">
          <div className={`tiny`}>
            <p>
              Con tus llaves puede recibir pagos y tranferencias a través de
              códigos QR o enlaces para identificarte rápidamente
            </p>
            <Spacer />
            <div className="col gap">
              <KeyCard
                icon={<CreditCard size={25} />}
                title={"Documento de identidad"}
                label={"Registrar llave"}
                onBlockFn={handleBlockModal}
                onShareFn={handleShareModal}
                isActive={keyActive}
              />
              <KeyType
                icon={<Smartphone size={25} />}
                optionIcon={<ArrowRight size={20} />}
                title={"Número de celular"}
                label={"Registrar llave"}
                onClickFn={goPhone}
              />
              <KeyType
                icon={<Mail size={25} />}
                optionIcon={<ArrowRight size={20} />}
                title={"Correo electrónico"}
                label={"Registrar llave"}
                onClickFn={goEmail}
              />
              <KeyType
                icon={<Lock size={25} />}
                optionIcon={<ArrowRight size={20} />}
                title={"Clave personalizada"}
                label={"Registrar llave"}
                onClickFn={goKey}
              />
              <KeyType
                icon={<BiBuilding size={25} />}
                optionIcon={<ArrowRight size={20} />}
                title={"Código de establecimiento"}
                label={"Registrar llave"}
                onClickFn={goCode}
              />
            </div>
          </div>
          <Spacer />
        </BreBLayout>
      </section>
      <CustomModal isOpen={isModalActive} handleModal={handleShareModal}>
        <h2 className="subtitle">Compartir llave</h2>
        <p>Selecciona el medio que deseas transferir o pagar</p>
        <Spacer height={20} />
        <KeyType
          icon={<Key size={25} />}
          title={"Información de llave"}
          label={""}
          onClickFn={undefined}
        />
        <Spacer height={10} />
        <KeyType
          icon={<BiQr size={25} />}
          title={"QR de llave"}
          label={""}
          onClickFn={undefined}
        />
      </CustomModal>
      <CustomModal isOpen={isModalBlockActive} handleModal={handleBlockModal}>
        <h2 className="subtitle">
          {keyActive
            ? "¿Quieres desactivar esta llave temporalmente?"
            : "¿Quieres activar esta llave?"}
        </h2>
        <Spacer height={10} />
        <p>
          {keyActive
            ? "Quedará inhabilitada para todas las transacciones y pagos que realices."
            : "Quedará activa para todas las transacciones y pagos que realices."}
        </p>
        <Spacer height={20} />
        <div>
          <CustomButtonComponent label={keyActive ? "Bloquear" : "Activar"} onClickFn={confirmKeyBlock} isEnabled={true} />
          <Spacer height={10} />
          <CustomButtonComponent label={"Cancelar"} onClickFn={handleBlockModal} isEnabled={true} className="btn-outline"/>
        </div>
      </CustomModal>
    </>
  );
}

export default Keys;
