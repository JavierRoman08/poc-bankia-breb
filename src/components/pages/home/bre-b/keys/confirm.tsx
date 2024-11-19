import Spacer from "@/components/atoms/spacer/spacer";
import BreBLayout from "@/components/templates/breb.layout";
import { CreditCard } from "react-feather";
import { useNavigate } from "react-router-dom";
import DataResume from "@/components/molecules/data-resume/data.resume";
import { Button } from "@aws-amplify/ui-react";
import styles from './keys.module.scss';

function ConfirmKey() {
  const history = useNavigate();

  const saveKey = () => {
    history('finish')
  }

  return (
    <BreBLayout title="Confirmación">
      <main className={`${styles.container} tiny`}>
        <h2 className="body">Información de la llave</h2>
        <Spacer height={20} />
        <div className={styles.container__content}>
            <DataResume
                icon={<CreditCard size={20} />}
                title={"Llave Bre-B"}
                description={"Documento de identidad"}
                value={"1234567890"}
                onClickFn={undefined}
            />
            <DataResume
                imageUrl={'/icons-payment_mc.svg'}
                title={"Producto"}
                description={"Cuenta de ahorros"}
                value={"*****2013"}
                onClickFn={undefined}
            />
        </div>
        <Button className={`btn-enabled`} onClick={saveKey}>
            Crear llave
        </Button>
      </main>
    </BreBLayout>
  );
}

export default ConfirmKey;
