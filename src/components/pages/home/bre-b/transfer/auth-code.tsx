import Spacer from "@/components/atoms/spacer/spacer";
import styles from "./transfer.module.scss";
import BreBLayout from "@/components/templates/breb.layout";
import { Button } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AuthCode() {
  const [code, setCode] = useState(new Array(6).fill(""));
  const history = useNavigate();

  const completeTransfer = () => {
    history("/home/bre-b/transfer/completed");
  };

  const handleInputChange = (index: number, newValue: string) => {
    
    if (newValue.length <= 1 && /^\d*$/.test(newValue)) {
      const updatedInputs = [...code];
      updatedInputs[index] = newValue;      
      setCode(updatedInputs);
    }
  };

  return (
    <BreBLayout>
      <div className={styles.container}>
        <img
          src="/img-clave-personalizada.svg"
          alt="verification_key_image"
          className="align-center"
        />
        <Spacer height={20} />
        <p className="bold align-center">Código de verificación</p>
        <p className="align-center">
          Ingresa el código que enviamos a tu celular 322****9898 y correo
          ce****@gmail.com.
        </p>
        <Spacer />
        <div className={`${styles.code} row`}>
        {code.map((value, index) => (
          <input
            key={index}
            type="number"
            value={value}
            onChange={(e) => handleInputChange(index, e.target.value)}
            maxLength={1}
          />
        ))}
        </div>
        <Spacer />
        <p className="align-center">¿No has obtenido el código OTP?</p>
        <Spacer />
        <div className={`${styles.link} align-center bold`}>
          Reenviar código
        </div>
        <div className={`${styles.btn} ${styles.container__content} align-center`}>
          <Button className={code.every((value) => value !== '') ? `btn-enabled` : `btn-disabled`} onClick={completeTransfer}>
            Confirmar
          </Button>
        </div>
        <Spacer />
      </div>
    </BreBLayout>
  );
}

export default AuthCode;
