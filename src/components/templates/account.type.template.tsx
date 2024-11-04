import { Button } from "@aws-amplify/ui-react";
import Spacer from "../atoms/spacer/spacer";
import BreBLayout from "./breb.layout";

function AccountTypeTemplate({ imgURL, accountType, title, onClickFn, children }: any) {

  return (
    <BreBLayout title={title}>
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
        <Button className={`btn-enabled`} onClick={onClickFn}>
          Continuar
        </Button>
      </div>
    </BreBLayout>
  );
}

export default AccountTypeTemplate;
