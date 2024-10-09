import { Input } from "@aws-amplify/ui-react";
import AccountTypeTemplate from "@/components/templates/account.type.template";

function AccountDocument() {
  return (
    <AccountTypeTemplate 
      imgURL={"/img-documento-identidad.svg"}
      accountType={"Documento de identidad"}
    >
      <p>Numero de documento</p>
      <Input variation="quiet" placeholder="Escriba el numero de documento" />
    </AccountTypeTemplate>
  );
}

export default AccountDocument;
