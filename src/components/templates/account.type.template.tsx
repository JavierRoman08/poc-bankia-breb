import { Button } from "@aws-amplify/ui-react";
import Spacer from "../atoms/spacer/spacer";
import BreBLayout from "./breb.layout";

function AccountTypeTemplate({ imgURL, accountType, title, onClickFn, children, value }: any) {

  return (
    <BreBLayout title={title}>
      <div className="flex">
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
      </div>
      <Button className={`btn align-center ${value ? 'btn-enabled' : 'btn-disabled'}`} onClick={onClickFn}>
        Continuar
      </Button>
    </BreBLayout>
  );
}

export default AccountTypeTemplate;
