import Spacer from "@/components/atoms/spacer/spacer";
import styles from "./amount.module.scss";
import BreBLayout from "@/components/templates/breb.layout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CustomButtonComponent from "@/components/atoms/button/custom.button";
import InputTextComponent from "@/components/atoms/input/input";

function Amount() {
  const [inputValue, setInputValue] = useState("");
  const history = useNavigate();
  const MAX_VALUE = 10000000;

  const selectAccountFrom = () => {
    history("/home/bre-b/transfer/from");
  };

  const formatNumber = (num: string) => {
    const cleanedValue = num.replace(/\D/g, "");
    return new Intl.NumberFormat("es-ES").format(parseInt(cleanedValue || "0"));
  };

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    setInputValue("$" + formatNumber(rawValue));
  };

  const numericValue = parseInt(inputValue.replace(/\D/g, "") || "0");

  return (
    <BreBLayout title="Ingresar monto">
      <div className={styles.container}>
        <p className="align-center">Ingresa el monto que vas a transferir</p>
        <div className={`flex`}>
          <Spacer height={100} />
          <InputTextComponent
            value={inputValue}
            onChange={onChangeValue}
            placeholder="$0"
            className={'input-basic align-center'}
          />
          <Spacer />
          {numericValue > MAX_VALUE ? (
            <span className={styles.errorMessage}>
              El valor supera el monto máximo permitido
            </span>
          ) : (
            <span className={`${styles.alertMessage}`}>
              El monto máximo permitido por día es de $10’000.000 COP
            </span>
          )}
        </div>
        <CustomButtonComponent
              label={"Continuar"}
              onClickFn={selectAccountFrom}
              isEnabled={numericValue !== 0 && numericValue < MAX_VALUE}
            />
      </div>
    </BreBLayout>
  );
}

export default Amount;
