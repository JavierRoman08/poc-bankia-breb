import AccountTypeTemplate from "@/components/templates/account.type.template";
import { useNavigate } from "react-router-dom";
import Spacer from "@/components/atoms/spacer/spacer";
import CustomModal from "@/components/molecules/modal/modal";
import styles from "./account-types.module.scss";
import { useState } from "react";
import InputTextComponent from "@/components/atoms/input/input";
import CustomButtonComponent from "@/components/atoms/button/custom.button";

function AccountCode({ route }: any) {
  const FIXED_CODE = "12345";
  const [isModalActive, setIsModalActive] = useState(false);
  const [code, setCode] = useState("");

  const navigate = useNavigate();

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    setCode(rawValue);
  };

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
          value={code}
        >
          <p>Código de establecimiento</p>
          <InputTextComponent
            value={code}
            onChange={onChangeValue}
            placeholder="00 Escribe el código"
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
            <CustomButtonComponent label={"Si, Continuar"} onClickFn={() => navigate("/home")} isEnabled={true} />
            <CustomButtonComponent label={"No, Cancelar"} onClickFn={() => setIsModalActive(false)} isEnabled={true} className={styles.buttons__cancel} />
          </div>
        </div>
      </CustomModal>
    </>
  );
}

export default AccountCode;
