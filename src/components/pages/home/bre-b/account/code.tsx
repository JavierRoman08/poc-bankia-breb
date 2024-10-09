import AccountTypeTemplate from "@/components/templates/account.type.template";
import { Input } from "@aws-amplify/ui-react";

function AccountCode() {
  return (
    <AccountTypeTemplate
      imgURL={"/img-codigo-establecimiento.svg"}
      accountType={"Codigo de establecimiento"}
    >
      <p>Numero de establecimiento</p>
      <Input variation="quiet" placeholder="Baggins" />
      
    </AccountTypeTemplate>
  );
}

export default AccountCode;
