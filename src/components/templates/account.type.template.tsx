import Spacer from "../atoms/spacer/spacer";
import BreBLayout from "./breb.layout";

function AccountTypeTemplate({ imgURL, accountType, children }: any) {
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
    </BreBLayout>
  );
}

export default AccountTypeTemplate;
