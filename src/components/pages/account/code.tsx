import AccountTypeTemplate from "@/components/templates/account.type.template";
import { Button, Input } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
import Spacer from "@/components/atoms/spacer/spacer";
import CustomModal from "@/components/molecules/modal/modal";
import styles from "./account-types.module.scss";
import { useState } from "react";

function AccountCode({ route }: any) {
  const FIXED_CODE = "12345";
  const [isModalActive, setIsModalActive] = useState(false);
  const [code, setCode] = useState("");

  const navigate = useNavigate();

  const handleClick = () => {
    if (code == FIXED_CODE) {
      setIsModalActive(true);
      return;
    }
    navigate(route); // Ruta predeterminada si no se proporciona una función
  };

  return (
    <>
      <section className={`${isModalActive ? "blurred" : ""}`}>
        <AccountTypeTemplate
          imgURL={"/img-codigo-establecimiento.svg"}
          accountType={"Código de establecimiento"}
          onClickFn={handleClick}
          title={`Agregar nueva cuenta`}
        >
          <p>Código de establecimiento</p>
          <Input
            variation="quiet"
            placeholder="Escribe el código de establecimiento"
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
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
            <Button className={`btn-outline`} onClick={() => setIsModalActive(false)}>
              No, Cancelar
            </Button>
          </div>
        </div>
      </CustomModal>
    </>
  );
}

export default AccountCode;
