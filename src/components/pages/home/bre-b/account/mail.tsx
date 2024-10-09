import AccountTypeTemplate from "@/components/templates/account.type.template";
import { Input } from "@aws-amplify/ui-react";

function AccountMail() {
  return (
    <AccountTypeTemplate
      imgURL={"/img-correo-electronico.svg"}
      accountType={"Correo electronico"}
    >
      <p>Correo electronico</p>
      <Input variation="quiet" placeholder="Ingresa tu correo" />
      
    </AccountTypeTemplate>
  );
}

export default AccountMail;
