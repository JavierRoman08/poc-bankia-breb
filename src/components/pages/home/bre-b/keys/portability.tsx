import Spacer from "@/components/atoms/spacer/spacer";
import BreBLayout from "@/components/templates/breb.layout";
import { CreditCard } from "react-feather";
import { useNavigate } from "react-router-dom";
import DataResume from "@/components/molecules/data-resume/data.resume";
import styles from './keys.module.scss';
import CustomButtonComponent from "@/components/atoms/button/custom.button";

function Portability() {
  const history = useNavigate();

  const verifyPortability = () => {
    history('/home/bre-b/my-keys/portability/security-code')
  }

  return (
    <BreBLayout title="Solicitud de portabilidad">
      <main className={`${styles.container} tiny`}>
        <div className={styles.container__content}>
            <DataResume
                icon={<CreditCard size={20} />}
                title={"Llave Bre-B"}
                description={"Documento de identidad"}
                value={"1234567890"}
            />        
            <h3>Banco origen</h3>
            <Spacer height={15} />
            <div className={`row gap`}>
                <picture className={`${styles.bankIcon} ${styles.bankIcon__banquo} circle bold`}>
                    <p className={`title`}>B</p>
                </picture>
                <p className={styles.bankName}>Banquo</p>
            </div>
            <hr />
            <h3>Banco destino</h3>
            <Spacer height={15} />
            <div className={`row gap`}>
                <picture className={`${styles.bankIcon} ${styles.bankIcon__bankia} circle bold`}>
                    <p className={`title`}>B</p>
                </picture>
                <p className={styles.bankName}>BankIA</p>
            </div>
            <Spacer height={15} />
            <h3>Producto destino</h3>
            <p>Cuenta de ahorro: ********8301</p>
            <Spacer height={15} />
            <h3>Fecha de Solicitud</h3>
            <p>Agosto 21 2024 - 12:19 PM</p>
            <hr />
        </div>
        <CustomButtonComponent label={"Continuar"} onClickFn={verifyPortability} isEnabled />
      </main>
    </BreBLayout>
  );
}

export default Portability;
