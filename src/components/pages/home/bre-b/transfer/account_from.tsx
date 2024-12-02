import Spacer from "@/components/atoms/spacer/spacer";
import styles from "./transfer.module.scss";
import BreBLayout from "@/components/templates/breb.layout";
import { useNavigate } from "react-router-dom";
import CardPrompt from "@/components/atoms/card-prompt/card.prompt";

function AccountFrom() {
  const history = useNavigate();

  const goResumen = () => {
    history("/home/bre-b/transfer/resume");
  };

  return (
    <BreBLayout title="Seleccionar cuenta">
      <div className={styles.container}>
        <p>¿Desde dónde vas a transferir?</p>
        <Spacer />
        <h2 className="body">Cuenta de ahorro</h2>
        <Spacer />
        <div>
          <CardPrompt
            id={1}
            onClickFn={goResumen}
            classNames="bg-color-secondary"
          >
            <div className={`${styles.cardPrompt__content} row align-center`}>
              <div className="row gap">
                <img src="/icons-payment.svg" alt="image_payment_method" />
                <div>
                  <p className="bold">Visa Classic Debito</p>
                  <p>****9123</p>
                </div>
              </div>
            </div>
          </CardPrompt>
          <CardPrompt
            id={2}
            onClickFn={goResumen}
            classNames="bg-color-secondary"
          >
            <div className={`${styles.cardPrompt__content} row align-center`}>
              <div className="row gap">
                <img src="/icons-payment_mc.svg" alt="image_payment_method" />
                <div>
                  <p className="bold">Mastercard Gold</p>
                  <p>****5450</p>
                </div>
              </div>
            </div>
          </CardPrompt>
        </div>
      </div>
    </BreBLayout>
  );
}

export default AccountFrom;
