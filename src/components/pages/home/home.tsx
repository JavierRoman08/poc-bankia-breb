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
import CircleOption from "@/components/atoms/circle-option/circle.option";

function HomePage() {
  const history = useNavigate();

  const goToBreB = () => {
    history("onboarding");
  };

  return (
    <section className={`${styles.home} container`}>
      <nav className={`${styles.navbar} align-center justify-between`}>
        <Bell className="color-typo" />
        <h1 className={`color-principal row title align-center`}>BankIA</h1>
        <LogOut className="color-typo" />
      </nav>
      <Spacer height={30} />
      <img src="/cards.svg" alt="card_img" className="align-center" />
      <Spacer />
      <h2 className="subtitle">Transacciones</h2>
      <Spacer height={20} />
      <div className={styles.optionsContainer}>
        <CircleOption icon={<Send size={30} />} label={"Enviar dinero"} />
        <CircleOption icon={<CreditCard size={30} />} label={"Pagar tarjetas"} />
        <CircleOption icon={<DollarSign size={30} />} label={"Pagar creditos"} />
        <CircleOption imageUrl="breb-isotype.svg" label={"Bre-B"} onClickFn={goToBreB} className={styles.buttonBreb}/>
        <CircleOption icon={<FileText size={30} />} label={"Consultar extractos"} />
        <CircleOption icon={<Calendar size={30} />} label={"Próximos pagos"} />
      </div>
      <Spacer height={80} />
      <footer className={`${styles.footer} align-center justify-between`}>
        <Home size={30} />
        <Search size={30} />
        <Grid size={30} />
        <Unlock size={30} />
        <Settings size={30} />
      </footer>
    </section>
  );
}

export default HomePage;
