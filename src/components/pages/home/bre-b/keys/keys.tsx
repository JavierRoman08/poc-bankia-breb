import Spacer from "@/components/atoms/spacer/spacer";
import KeyType from "@/components/molecules/key-type/key.type";
import BreBLayout from "@/components/templates/breb.layout";
import { ArrowRight, CreditCard, Lock, Mail, Smartphone } from "react-feather";
import { BiBuilding } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function Keys() {
  const history = useNavigate();

  const goSelectAccount = () => {
    history("/home/bre-b/my-keys/select-account");
  };

  return (
    <BreBLayout>
      <div className={`tiny`}>
        <p>
          Con tus llaves puede recibir pagos y tranferencias a través de códigos
          QR o enlaces para identificarte rápidamente
        </p>
        <Spacer />
        <div className="col gap">
          <KeyType
            icon={<CreditCard size={25} />}
            optionIcon={<ArrowRight size={20} />}
            title={"Documento de identidad"}
            label={"Registrar llave"}
            onClickFn={goSelectAccount}
          />
          <KeyType
            icon={<Smartphone size={25} />}
            optionIcon={<ArrowRight size={20} />}
            title={"Número de celular"}
            label={"Registrar llave"}
            onClickFn={goSelectAccount}
          />
          <KeyType
            icon={<Mail size={25} />}
            optionIcon={<ArrowRight size={20} />}
            title={"Correo electrónico"}
            label={"Registrar llave"}
            onClickFn={goSelectAccount}
          />
          <KeyType
            icon={<Lock size={25} />}
            optionIcon={<ArrowRight size={20} />}
            title={"Clave personalizada"}
            label={"Registrar llave"}
            onClickFn={goSelectAccount}
          />
          <KeyType
            icon={<BiBuilding size={25} />}
            optionIcon={<ArrowRight size={20} />}
            title={"Código de establecimiento"}
            label={"Registrar llave"}
            onClickFn={goSelectAccount}
          />
        </div>
      </div>
    </BreBLayout>
  );
}

export default Keys;
