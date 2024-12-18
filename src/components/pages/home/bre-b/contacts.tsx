import Spacer from "@/components/atoms/spacer/spacer";
import { SearchField } from "@aws-amplify/ui-react";
import Contact from "@/components/molecules/contact/contact";
import { useNavigate } from "react-router-dom";
import BreBLayout from "@/components/templates/breb.layout";
import CustomButtonComponent from "@/components/atoms/button/custom.button";

function Contacts() {
  const history = useNavigate();

  const selectAccount = () => {
    history("/home/bre-b/transfer/select-account");
  };

  return (
    <BreBLayout title="Mis contactos">
      <div className="flex">
        <p className="body">Lista de favoritos</p>
        <Spacer height={20} />
        <SearchField label="Search" placeholder="Buscar contacto" />
        <Spacer height={20} />
        <Contact name={'Carlos sanabria rios'} accountNumber={'***********6940'} />
        <Contact name={'Carlos sanabria rios'} accountNumber={'***********6940'} />
        <Contact name={'Carlos sanabria rios'} accountNumber={'***********6940'} />
        <Contact name={'Carlos sanabria rios'} accountNumber={'***********6940'} />
        <Contact name={'Carlos sanabria rios'} accountNumber={'***********6940'} />
        <Spacer />
      </div>
      <CustomButtonComponent label="Nuevo contacto" onClickFn={selectAccount} isEnabled />
    </BreBLayout>
  );
}

export default Contacts;
