import Spacer from "@/components/atoms/spacer/spacer";
import styles from "@components/pages/home/bre-b/transfer/transfer.module.scss";
import BreBLayout from "@/components/templates/breb.layout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CustomButtonComponent from "@/components/atoms/button/custom.button";

interface AuthCodeProps {
  nextRoute: string;
}

const AuthCode = ({nextRoute}: AuthCodeProps) =>  {
  const [code, setCode] = useState(new Array(6).fill(""));
  const history = useNavigate();

  const sendCode = () => {
    history(nextRoute);
  };

  const handleInputChange = (index: number, newValue: string) => {
    if (newValue.length <= 1 && /^\d*$/.test(newValue)) {
      const updatedInputs = [...code];
      updatedInputs[index] = newValue;      
      setCode(updatedInputs);
    }
  };

  return (
    <BreBLayout title="Autenticación">
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
        <button className={`${styles.link} align-center bold`}>
          Reenviar código
        </button>
        <div className={`${styles.btn} align-center flex`}>
          <CustomButtonComponent label={"Confirmar"} onClickFn={sendCode} isEnabled={code.every((value) => value !== '') }/>
        </div>
      </div>
    </BreBLayout>
  );
}

export default AuthCode;
