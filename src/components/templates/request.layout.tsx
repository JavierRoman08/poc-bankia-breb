import { useNavigate } from "react-router-dom";
import styles from './request.layout.module.scss';
import CustomButtonComponent from "../atoms/button/custom.button";

interface RequestLayoutProps {
    title?: string;
    message: string;
}

const RequestLayout = ({title, message}: RequestLayoutProps) => {
  const history = useNavigate();

  const goToHome = () => {
    history("/home");
  };

  return (
    <section className={`${styles.container} col align-center`}>
      <img src="/bre-b-icon.svg" alt="logo_bre_b" />
      <div className="col">
        <img src="/check.svg" alt="request_check" />
        <p className="title">{title}</p>
        <p>
          {message}
        </p>
      </div>
      <CustomButtonComponent label={"Finalizar"} onClickFn={goToHome} isEnabled />
    </section>
  );
}

export default RequestLayout;
