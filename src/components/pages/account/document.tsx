import { Input } from "@aws-amplify/ui-react";
import AccountTypeTemplate from "@/components/templates/account.type.template";
import { useNavigate } from "react-router-dom";

function AccountDocument({route}: any) {
  const navigate = useNavigate();

  const handleClick = () => {
  
      navigate(route); // Ruta predeterminada si no se proporciona una función
    
  };

  return (
    <AccountTypeTemplate 
      imgURL={"/img-documento-identidad.svg"}
      accountType={"Documento de identidad"}
      onClickFn={handleClick}
    >
      <p>Numero de documento</p>
      <Input variation="quiet" placeholder="Escriba el numero de documento" />
    </AccountTypeTemplate>
  );
}

export default AccountDocument;
