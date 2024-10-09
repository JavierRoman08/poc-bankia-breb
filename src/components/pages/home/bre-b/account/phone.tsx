import AccountTypeTemplate from "@/components/templates/account.type.template";
import { PhoneNumberField } from "@aws-amplify/ui-react";

function AccountPhone() {
  return (
    <AccountTypeTemplate
      imgURL={"/img-numero-celular.svg"}
      accountType={"Numero de celular"}
    >
      <p>Numero de celular</p>
      <PhoneNumberField
        defaultDialCode="+57"
        label=""
        descriptiveText=""
        placeholder="Numero de celular"
      />
    </AccountTypeTemplate>
  );
}

export default AccountPhone;
