import Spacer from "@/components/atoms/spacer/spacer";
import styles from "./transfer.module.scss";
import BreBLayout from "@/components/templates/breb.layout";
import Cardprompt from "@/ui-components/Cardprompt";
import { ChevronRight } from "react-feather";
import { useNavigate } from "react-router-dom";

function AccountFrom() {
    const history = useNavigate()

    const goResumen = () => {
        history('/home/bre-b/transfer/resume')
    }

  return (
    <BreBLayout title="Seleccionar cuenta">
      <div className={styles.container}>
        <p>¿Desde dónde vas a transferir?</p>
        <Spacer />
        <h2 className="body">Cuenta de ahorro</h2>
        <Spacer />
        <div>
          <Cardprompt
            onClick={goResumen}
            backgroundColor={"#F2F2FF"}
            className={styles.cardPrompt}
            cardprompt={
              <div className={`${styles.cardPrompt__content} row align-center`}>
                <div className="row gap">
                    <img src="/icons-payment.svg" alt="" />
                    <div>
                        <p className="bold">Visa Classic Debito</p>
                        <p>****5450</p>
                    </div>
                </div>
                <ChevronRight />
              </div>
            }
          />
          <Spacer height={20} />
          <Cardprompt
            onClick={goResumen}
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
      </div>
    </BreBLayout>
  );
}

export default AccountFrom;
