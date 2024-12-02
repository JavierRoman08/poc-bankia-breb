import Spacer from "@/components/atoms/spacer/spacer";
import styles from "./auth.code.module.scss";
import BreBLayout from "@/components/templates/breb.layout";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import CustomButtonComponent from "@/components/atoms/button/custom.button";
import { TbAlertCircleFilled } from "react-icons/tb";

const VALID_CODE = "123456";
const MAX_ATTEMPS = 3;

interface AuthCodeProps {
  nextRoute: string;
}

const AuthCode = ({ nextRoute }: AuthCodeProps) => {
  const [counter, setCounter] = useState(0);
  const [code, setCode] = useState(new Array(6).fill(""));
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const history = useNavigate();

  const sendCode = () => {
    const isValidCode = code.join("") == VALID_CODE;

    if (isValidCode && counter < MAX_ATTEMPS) {
      history(nextRoute);
    } else {
      setCounter(counter + 1);
      resetCode();
    }
  };

  const handleInputChange = (index: number, newValue: string) => {
    if (newValue.length <= 1 && /^\d*$/.test(newValue)) {
      const updatedInputs = [...code];
      updatedInputs[index] = newValue;
      setCode(updatedInputs);

      // Mueve el foco al siguiente input si existe y si el valor no está vacío
      if (newValue !== "" && index < code.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    // Mueve el foco al anterior input al presionar Backspace en un campo vacío
    if (e.key === "Backspace" && code[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const resetCode = () => {
    setCode(new Array(6).fill("")); // Restablece los valores
    inputRefs.current[0]?.focus(); // Devuelve el foco al primer input
  };

  return (
    <BreBLayout title="Autenticación">
      <div className={"flex"}>
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
        <Spacer height={20} />
        <span className="bold align-center">
          Intento {Math.min(counter + 1, MAX_ATTEMPS)}/{MAX_ATTEMPS}
        </span>
        <Spacer height={20} />
        <div className={`${styles.code} row`}>
          {code.map((value, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el!)} // Asigna la referencia al arreglo
              type="text"
              value={value}
              onChange={(e) => handleInputChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              maxLength={1}
              disabled={counter >= MAX_ATTEMPS}
            />
          ))}
        </div>
        {counter > 0 && counter < MAX_ATTEMPS && (
          <div>
            <Spacer height={15} />{" "}
            <span className="align-center" color="#660000">
              El código que ingresaste es incorrecto
            </span>
          </div>
        )}
        <Spacer height={20} />
        {counter < MAX_ATTEMPS ? (
          <div>
            <p className="align-center">¿No has obtenido el código OTP?</p>
            <Spacer height={20} />
            <button className={`link align-center bold`}>
              Reenviar código
            </button>
          </div>
        ) : (
          <span className={`${styles.alertMessage} row align-center gap`}>
            <TbAlertCircleFilled size={40} />
            Ingresaste el máximo de intentos permitidos. Intenta nuevamente en 1
            Hora.
          </span>
        )}
        <div className={`${styles.btn} align-center flex`}>
          {counter < MAX_ATTEMPS ? (
            <CustomButtonComponent
              label={"Confirmar"}
              onClickFn={sendCode}
              isEnabled={code.every((value) => value !== "")}
            />
          ) : (
            <CustomButtonComponent
              label={"Continuar"}
              onClickFn={() => history("/home/bre-b")}
              isEnabled
            />
          )}
        </div>
      </div>
    </BreBLayout>
  );
};

export default AuthCode;
