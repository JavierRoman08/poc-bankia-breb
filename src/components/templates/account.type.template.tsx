import { Button } from "@aws-amplify/ui-react";
import Spacer from "../atoms/spacer/spacer";
import BreBLayout from "./breb.layout";
import { useNavigate } from "react-router-dom";

function AccountTypeTemplate({ imgURL, accountType, children }: any) {
  const history = useNavigate();

  const goTransfer = () => {
    history("/home/bre-b/transfer/amount");
  };

  return (
    <BreBLayout>
      <p>Haz seleccionado</p>
      <h2 className="subtitle">{accountType}</h2>
      <Spacer />
      <img
        src={imgURL}
        alt={accountType.split(" ").join("_")}
        className="align-center"
      />
      <Spacer />
      {children}
      <Spacer />
      <div className="align-center">
        <Button className={`btn-enabled`} onClick={goTransfer}>
          Continuar
        </Button>
      </div>
    </BreBLayout>
  );
}

export default AccountTypeTemplate;
