import CustomModal from "@/components/molecules/modal/modal";
import AccountTypeTemplate from "@/components/templates/account.type.template";
import { Button, PhoneNumberField } from "@aws-amplify/ui-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./account-types.module.scss";
import Spacer from "@/components/atoms/spacer/spacer";

function AccountPhone({ route }: any) {
  const FIXED_NUMBER = "3100000000";
  const [isModalActive, setIsModalActive] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

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
          accountType={"Numero de celular"}
          onClickFn={handleClick}
        >
          <p>Numero de celular</p>
          <PhoneNumberField
            type="tel"
            defaultDialCode="+57"
            label=""
            descriptiveText=""
            placeholder="Numero de celular"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
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

export default AccountPhone;
