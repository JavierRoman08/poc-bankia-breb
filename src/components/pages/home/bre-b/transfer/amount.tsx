import Spacer from "@/components/atoms/spacer/spacer";
import styles from "./amount.module.scss";
import BreBLayout from "@/components/templates/breb.layout";
import { Button, Input } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Amount() {
  const [inputValue, setInputValue] = useState("")
  const history = useNavigate();

  const selectAccountFrom = () => {
    history("/home/bre-b/transfer/from");
  };

  const formatNumber = (num: string) => {
    const cleanedValue = num.replace(/\D/g, "");
    return new Intl.NumberFormat("es-ES").format(parseInt(cleanedValue || "0"));
  };

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    setInputValue('$' + formatNumber(rawValue));
  };

  return (
    <BreBLayout title="Ingresar monto">
      <div className={styles.container}>
        <p className="align-center">Ingresa el monto que vas a transferir</p>
        <div className={`${styles.container__content}`}>
          <Spacer />
          <Input variation="quiet" placeholder="$0" type="text" value={inputValue} onChange={onChangeValue} className={styles.inputValue}/>
          <Spacer />
        </div>
        <div className={`${styles.btn} align-center`}>
          <Button className={`btn-enabled`} onClick={selectAccountFrom}>Continuar</Button>
        </div>
        <Spacer/>
      </div>
    </BreBLayout>
  );
}

export default Amount;
