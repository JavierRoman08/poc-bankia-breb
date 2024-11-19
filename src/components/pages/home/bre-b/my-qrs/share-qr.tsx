import Spacer from "@/components/atoms/spacer/spacer";
import BreBLayout from "@/components/templates/breb.layout";
import { Button, Input, Radio, RadioGroupField } from "@aws-amplify/ui-react";
import { useState } from "react";
import { ChevronRight } from "react-feather";
import { useNavigate } from "react-router-dom";
import CustomModal from "@/components/molecules/modal/modal";

function ShareQR() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [codeType, setCodeType] = useState("withoutValue");
  const history = useNavigate();

  const handleCancelModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const generateQr = () => {
    history('code')
  }
  
  const changeQrCode = () => {
    history(-1)
  }

  const goToHome = () => {
    history("/home");
  };

  return (
    <div>
      <section className={`${isModalOpen ? "blurred" : ""}`}>
        <BreBLayout title="Compartir código QR">
          <div className="flex">
          <h2 className="body">Compartir código QR</h2>
          <p>Valida los datos ingresados</p>
          <Spacer />
          <h2 className="body">Detalle del QR</h2>
          <Spacer height={20} />
          <div>
            <p>Llave origen</p>
            <p>CC 1234567890</p>
            <div className={`row justify-between`}>
              <p className="bold">Ahorros 123-456-78-90</p>
              <button className={`link bold row`} onClick={changeQrCode}>
                <p>Cambiar</p>
                <ChevronRight />
              </button>
            </div>
            <p className="bold">BankIA</p>
            <hr />
          </div>
          <Spacer height={20} />
          <RadioGroupField
            legend=""
            name="codeType"
            value={codeType}
            onChange={(e) => setCodeType(e.target.value)}
          >
            <Radio value="withValue">Con valor</Radio>
            <Radio value="withoutValue">Sin valor</Radio>
          </RadioGroupField>
          <Spacer height={20} />
          {codeType == "withValue" ? (
            <Input
              variation="quiet"
              placeholder="Escribe el monto"
              type="number"
            />
          ) : null}
          </div>
          <div>
            <Button className={`btn-enabled`} onClick={generateQr}>
              Generar QR
            </Button>
            <Spacer height={10} />
            <Button className={`btn-outline`} onClick={handleCancelModal}>
              Cancelar
            </Button>
          </div>
        </BreBLayout>
      </section>
      <CustomModal isOpen={isModalOpen} handleModal={handleCancelModal}>
        <h2 className="body">¿Estás seguro de que deseas salir?</h2>
        <Spacer height={10} />
        <p>
          Si sales ahora, cualquier dato ingresado se perderá. ¿Te gustaría
          continuar o prefieres quedarte en la pantalla actual?
        </p>
        <Spacer />
        <div>
          <Button className={`btn-enabled`} onClick={goToHome}>
            Continuar
          </Button>
          <Spacer height={10} />
          <Button className={`btn-outline`} onClick={handleCancelModal}>
            Cancelar
          </Button>
        </div>
      </CustomModal>
    </div>
  );
}

export default ShareQR;
