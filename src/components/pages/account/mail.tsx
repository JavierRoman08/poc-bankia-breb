import Spacer from "@/components/atoms/spacer/spacer";
import CustomModal from "@/components/molecules/modal/modal";
import AccountTypeTemplate from "@/components/templates/account.type.template";
import { Input } from "@aws-amplify/ui-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./account-types.module.scss";
import CustomButtonComponent from "@/components/atoms/button/custom.button";
import InputTextComponent from "@/components/atoms/input/input";

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
          value={email}
        >
          <p>Correo electrónico</p>
          <InputTextComponent
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Ingresa tu correo"
            className={styles.inputBasic}
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
            <CustomButtonComponent
              label={"Si, Continuar"}
              onClickFn={() => navigate("/home")}
              isEnabled={true}
            />
            <CustomButtonComponent
              label={"No, Cancelar"}
              onClickFn={() => setIsModalActive(false)}
              isEnabled={true}
              className={styles.buttons__cancel}
            />
          </div>
        </div>
      </CustomModal>
    </>
  );
}

export default AccountMail;
