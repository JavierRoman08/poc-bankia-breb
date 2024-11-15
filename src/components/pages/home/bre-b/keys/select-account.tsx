import Spacer from "@/components/atoms/spacer/spacer";
import styles from "./keys.module.scss";
import BreBLayout from "@/components/templates/breb.layout";
import Cardprompt from "@/ui-components/Cardprompt";
import { ChevronRight } from "react-feather";
import { useNavigate } from "react-router-dom";

function KeysSelectAccount() {
  const history = useNavigate();

  const confirmKey = () => {
    history('confirm')
  }

  return (
    <BreBLayout title="Seleccionar cuenta">
      <div className={`tiny`}>
        <h2 className="body">¿Qué cuenta vas a asociar a la llave?</h2>
        <Spacer height={10} />
        <p>
          Selecciona la cuenta desde la cual deseas depositar o retirar dinero
          utilizando la llave.
        </p>
        <Spacer height={20} />
        <h2 className="body">Cuentas de ahorro</h2>
        <Spacer height={20} />
        <Cardprompt
            onClick={confirmKey}
          backgroundColor={"#F2F2FF"}
          className={styles.cardPrompt}
          cardprompt={
            <div className={`${styles.cardPrompt__content} row align-center`}>
              <div className="row gap">
                <img src="/icons-payment.svg" alt="" />
                <div>
                  <p className="bold">Visa Classic Debito</p>
                  <p>****9123</p>
                </div>
              </div>
              <ChevronRight />
            </div>
          }
        />
        <Spacer height={20} />
        <Cardprompt
            onClick={confirmKey}
          backgroundColor={"#F2F2FF"}
          className={styles.cardPrompt}
          cardprompt={
            <div className={`${styles.cardPrompt__content} row align-center`}>
              <div className="row gap">
                <img src="/icons-payment_mc.svg" alt="" />
                <div>
                  <p className="bold">Mastercard Gold</p>
                  <p>****5450</p>
                </div>
              </div>
              <ChevronRight />
            </div>
          }
        />
      </div>
    </BreBLayout>
  );
}

export default KeysSelectAccount;
