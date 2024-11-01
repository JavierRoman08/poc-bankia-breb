import Spacer from "@/components/atoms/spacer/spacer";
import CustomModal from "@/components/molecules/modal/modal";
import AccountTypeTemplate from "@/components/templates/account.type.template";
import { Button, Input } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
import styles from "./account-types.module.scss";
import { useState } from "react";

function AccountKey({ route }: any) {
  const FIXED_KEY = "abc123";
  const [isModalActive, setIsModalActive] = useState(false);
  const [key, setKey] = useState("");

  const navigate = useNavigate();

  const handleClick = () => {
    if (key == FIXED_KEY) {
      setIsModalActive(true);
      return;
    }

    navigate(route); // Ruta predeterminada si no se proporciona una función
  };

  return (
    <>
      <section className={`${isModalActive ? "blurred" : ""}`}>
        <AccountTypeTemplate
          imgURL={"/img-clave-personalizada.svg"}
          accountType={"Clave personalizada"}
          onClickFn={handleClick}
        >
          <p>Clave personalizada</p>
          <Input
            variation="quiet"
            placeholder="Ingrese la clave personalizada"
            value={key}
            onChange={(e) => {
              setKey(e.target.value);
            }}
          />
        </AccountTypeTemplate>
      </section>
      <CustomModal
        isOpen={isModalActive}
        handleModal={() => setIsModalActive(false)}
      >
        <div className="col gap align-center">
          <h2 className="body">
            Esta llave ya se encuentra registrada en: Banco Banquo
          </h2>
          <img src="/banquo-logo.svg" alt="bank_logo" />
          <p>¿Deseas solicitar la portabilidad?</p>
          <Spacer height={10} />
          <div className={`${styles.buttons} col gap`}>
            <Button className={`btn-enabled`} onClick={() => navigate("/home")}>
              Si, Continuar
            </Button>
            <Button onClick={() => setIsModalActive(false)}>
              No, Cancelar
            </Button>
          </div>
        </div>
      </CustomModal>
    </>
  );
}

export default AccountKey;
