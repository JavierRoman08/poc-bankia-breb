import AccountTypeTemplate from "@/components/templates/account.type.template";
import { Input } from "@aws-amplify/ui-react";

function AccountKey() {
  return (
    <AccountTypeTemplate
      imgURL={"/img-clave-personalizada.svg"}
      accountType={"Clave personalizada"}
    >
      <p>Clave personalizada</p>
      <Input variation="quiet" placeholder="Ingrese la clave personalizada" />
      
    </AccountTypeTemplate>
  );
}

export default AccountKey;
