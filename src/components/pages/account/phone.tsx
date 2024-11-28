import CustomModal from "@/components/molecules/modal/modal";
import AccountTypeTemplate from "@/components/templates/account.type.template";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./account-types.module.scss";
import Spacer from "@/components/atoms/spacer/spacer";
import CustomButtonComponent from "@/components/atoms/button/custom.button";
import InputTextComponent from "@/components/atoms/input/input";

function AccountPhone({ route }: any) {
  const FIXED_NUMBER = "3100000000";
  const [isModalActive, setIsModalActive] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+57");

  const navigate = useNavigate();

  const handleClick = () => {
    if (phoneNumber == FIXED_NUMBER) {
      setIsModalActive(true);
      return;
    }

    navigate(route); // Ruta predeterminada si no se proporciona una función
  };

  return (
    <>
      <section className={`${isModalActive ? "blurred" : ""}`}>
        <AccountTypeTemplate
          imgURL={"/img-numero-celular.svg"}
          accountType={"Número de celular"}
          onClickFn={handleClick}
          title={`Agregar nueva cuenta`}
          value={phoneNumber}
        >
          <p>Número de celular</p>
          <div className={styles.inputCountryCode}>
            <select
              className={styles.inputCountryCode__picker}
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
            >
              <option value="+1">+1</option>
              <option value="+7">+7</option>
              <option value="+52">+52</option>
              <option value="+57">+57</option>
              <option value="+91">+91</option>
            </select>
            <InputTextComponent
            type="number"
              value={phoneNumber}
              onChange={(e: any) => {
                setPhoneNumber(e.target.value);
              }}
              placeholder="Número de celular"
              className={styles.inputCountryCode__field}
            />
          </div>
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

export default AccountPhone;
