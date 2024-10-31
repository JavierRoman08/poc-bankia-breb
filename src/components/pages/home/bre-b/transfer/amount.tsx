import Spacer from "@/components/atoms/spacer/spacer";
import styles from "./transfer.module.scss";
import BreBLayout from "@/components/templates/breb.layout";
import { Button, Input } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";

function Amount() {

  const history = useNavigate();

  const selectAccountFrom = () => {
    history("/home/bre-b/transfer/from");
  };

  return (
    <BreBLayout>
      <div className={styles.container}>
        <p className="align-center">Ingresa el monto que vas a transferir</p>
        <div className={styles.container__content}>
          <Spacer />
          <Input variation="quiet" placeholder="$0" type="number" />
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
