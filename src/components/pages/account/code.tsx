import AccountTypeTemplate from "@/components/templates/account.type.template";
import { Input } from "@aws-amplify/ui-react";

function AccountCode({onNavigateTo}: any) {
  return (
    <AccountTypeTemplate
      imgURL={"/img-codigo-establecimiento.svg"}
      accountType={"Codigo de establecimiento"}
      onClickFn={onNavigateTo}
    >
      <p>Numero de establecimiento</p>
      <Input variation="quiet" placeholder="Escribe el codigo de establecimiento" />
    </AccountTypeTemplate>
  );
}

export default AccountCode;
