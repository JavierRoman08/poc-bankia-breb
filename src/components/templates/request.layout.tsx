import { useNavigate } from "react-router-dom";
import { Button } from "@aws-amplify/ui-react";
import styles from './request.layout.module.scss';
import Spacer from "../atoms/spacer/spacer";

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
      <Button className={`btn-enabled`} onClick={goToHome}>
        Finalizar
      </Button>
    </section>
  );
}

export default RequestLayout;
