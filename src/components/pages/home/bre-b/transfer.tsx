import Spacer from "@/components/atoms/spacer/spacer";
import { Button, SearchField } from "@aws-amplify/ui-react";
import Contact from "@/components/molecules/contact/contact";
import { useNavigate } from "react-router-dom";
import BreBLayout from "@/components/templates/breb.layout";

function Transfer() {
  const history = useNavigate();

  const selectAccount = () => {
    history("/home/bre-b/transfer/select-account");
  };

  return (
    <BreBLayout>
      <h2 className="subtitle">Contactos Pin</h2>
      <Spacer height={20} />
      <SearchField label="Search" placeholder="Buscar contacto" />
      <Spacer height={20} />
      <Contact name={'Carlos sanabria rios'} accountNumber={'***********6940'} />
      <Contact name={'Carlos sanabria rios'} accountNumber={'***********6940'} />
      <Contact name={'Carlos sanabria rios'} accountNumber={'***********6940'} />
      <Contact name={'Carlos sanabria rios'} accountNumber={'***********6940'} />
      <Contact name={'Carlos sanabria rios'} accountNumber={'***********6940'} />
      <Spacer />
      <div className="align-center">
        <Button backgroundColor={'#00BD81'} color={'white'} onClick={selectAccount}>
          Llave nueva
        </Button>
      </div>
    </BreBLayout>
  );
}

export default Transfer;
