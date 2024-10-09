import Spacer from "@/components/atoms/spacer/spacer";
import styles from "./home.module.scss";
import {
  Bell,
  LogOut,
  Home,
  Search,
  Grid,
  Settings,
  Unlock,
  Send,
  CreditCard,
  DollarSign,
  FileText,
  Calendar,
} from "react-feather";
import { useNavigate } from "react-router-dom";
import Seccion from "@/ui-components/Seccion";
import Isotype from "@/ui-components/LogoB";

function HomePage() {
  const history = useNavigate();

  const goToBreB = () => {
    history("/home/bre-b");
  };

  return (
    <section className={`${styles.home} container`}>
      <nav className={`${styles.navbar} align-center`}>
        <Bell className="color-typo" />
        <h1 className={`color-principal row title align-center`}>BankIA</h1>
        <LogOut className="color-typo" />
      </nav>
      <Spacer height={30} />
      <img src="/cards.svg" alt="card_img" className="align-center" />
      <Spacer height={20} />
      <h2 className="subtitle">Realiza transacciones</h2>
      <Spacer height={20} />
      <div className={styles.optionsContainer}>
        <Seccion
          frame31304={<Send size={35} />}
          label={"Enviar dinero"}
          className={styles.optionsContainer__item}
        />
        <Seccion
          frame31304={<CreditCard size={35} />}
          label={"Pagar tarjetas"}
          className={styles.optionsContainer__item}
        />
        <Seccion
          frame31304={<DollarSign size={35} />}
          label={"Pagar creditos"}
          className={styles.optionsContainer__item}
        />
        <button onClick={goToBreB} className={`${styles.optionsContainer__breb} align-center`}>
          <Isotype
            property1="Positive"
            width={55}
            height={55}
            padding={15}
            borderRadius={'50%'}
            backgroundColor={"#00C3FF"}
          />
          <p>Bre-B</p>
        </button>

        <Seccion
          frame31304={<FileText size={35} />}
          label={"Consultar extractos"}
          className={styles.optionsContainer__item}
        />
        <Seccion
          frame31304={<Calendar size={35} />}
          label={"Proximos pagos"}
          className={styles.optionsContainer__item}
        />
      </div>
      <Spacer height={80} />
      <nav className={`${styles.navbar_bottom} align-center`}>
        <Home size={30} />
        <Search size={30} />
        <Grid size={30} />
        <Unlock size={30} />
        <Settings size={30} />
      </nav>
    </section>
  );
}

export default HomePage;
