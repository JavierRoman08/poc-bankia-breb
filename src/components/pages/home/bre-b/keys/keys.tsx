import Spacer from "@/components/atoms/spacer/spacer";
import KeyCard from "@/components/molecules/key-card/key.card";
import KeyType from "@/components/molecules/key-type/key.type";
import CustomModal from "@/components/molecules/modal/modal";
import BreBLayout from "@/components/templates/breb.layout";
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
  const [isModalActive, setIsModalActive] = useState(false);
  const history = useNavigate();

  const handleModal = () => {
    setIsModalActive(!isModalActive);
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
      <section className={`${isModalActive ? "blurred" : ""}`}>
        <BreBLayout>
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
                onShareFn={handleModal}
                isActive={true}
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
          <Spacer/>
        </BreBLayout>
      </section>

      <CustomModal isOpen={isModalActive} handleModal={handleModal}>
        <h2>Compartir llave</h2>
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
    </>
  );
}

export default Keys;
