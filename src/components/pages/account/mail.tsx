import Spacer from "@/components/atoms/spacer/spacer";
import CustomModal from "@/components/molecules/modal/modal";
import AccountTypeTemplate from "@/components/templates/account.type.template";
import { Button, Input } from "@aws-amplify/ui-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./account-types.module.scss";

function AccountMail({ route }: any) {
  const FIXED_EMAIL = "admin@pragma.com.co";
  const [isModalActive, setIsModalActive] = useState(false);
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleClick = () => {
    if (email == FIXED_EMAIL) {
      setIsModalActive(true);
      return;
    }

    navigate(route); // Ruta predeterminada si no se proporciona una función
  };

  return (
    <>
      <section className={`${isModalActive ? "blurred" : ""}`}>
    <AccountTypeTemplate
      imgURL={"/img-correo-electronico.svg"}
      accountType={"Correo electrónico"}
      onClickFn={handleClick}
      title={`Agregar nueva cuenta`}
    >
      <p>Correo electrónico</p>
      <Input
        variation="quiet"
        placeholder="Ingresa tu correo"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
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

export default AccountMail;
