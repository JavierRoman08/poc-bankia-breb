import { Button, Input } from "@aws-amplify/ui-react";
import AccountTypeTemplate from "@/components/templates/account.type.template";
import { useNavigate } from "react-router-dom";
import Spacer from "@/components/atoms/spacer/spacer";
import CustomModal from "@/components/molecules/modal/modal";
import styles from "./account-types.module.scss";
import { useState } from "react";

function AccountDocument({ route }: any) {
  const FIXED_DOCUMENT = "1234567890";
  const [isModalActive, setIsModalActive] = useState(false);
  const [document, setDocument] = useState("");

  const navigate = useNavigate();

  const handleClick = () => {
    if (document == FIXED_DOCUMENT) {
      setIsModalActive(true);
      return;
    }
    navigate(route); // Ruta predeterminada si no se proporciona una función
  };

  return (
    <>
      <section className={`${isModalActive ? "blurred" : ""}`}>
        <AccountTypeTemplate
          imgURL={"/img-documento-identidad.svg"}
          accountType={"Documento de identidad"}
          onClickFn={handleClick}
        >
          <p>Numero de documento</p>
          <Input
            variation="quiet"
            placeholder="Escriba el numero de documento"
            value={document}
            onChange={(e) => {
              setDocument(e.target.value);
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

export default AccountDocument;
