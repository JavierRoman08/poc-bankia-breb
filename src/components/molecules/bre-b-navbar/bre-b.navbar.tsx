import { ChevronLeft } from "react-feather";
import styles from "./bre-b.navbar.module.scss";
import LogoBWithText from "@/ui-components/LogoBWithText";
import Spacer from "@/components/atoms/spacer/spacer";
import { useNavigate } from "react-router-dom";

interface BreBNavbarProps {
  title?: string;
}

const BreBNavbar = ({title}: BreBNavbarProps) => {
  const history = useNavigate();

  const goBack = () => {
    history(-1);
  };

  return (
    <nav className={`${styles.navbar} align-center`}>
      <ChevronLeft className={styles.arrow} size={30} onClick={goBack} />
      <LogoBWithText className={styles.icon} />
      <Spacer height={10} />
      <p className="body">{title ?? 'Pagos inmediatos' }</p>
    </nav>
  );
}

export default BreBNavbar;
