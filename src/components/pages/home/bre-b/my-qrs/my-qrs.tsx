import Spacer from "@/components/atoms/spacer/spacer";
import QrCard from "@/components/molecules/qr-card/qr.card";
import BreBLayout from "@/components/templates/breb.layout";
import {
  CreditCard,
  Smartphone,
} from "react-feather";
import { useNavigate } from "react-router-dom";

function MyQRs() {
  const history = useNavigate();

  const shareQr = () => {
    history('share-qr')
  };

  return (
        <BreBLayout title="Mis códigos QR">
          <div className={`tiny`}>
            <div className="col gap">
              <QrCard
                icon={<CreditCard size={25} />}
                title={"Documento de identidad"}
                onShareFn={shareQr}
              />
              <QrCard
                icon={<Smartphone size={25} />}
                title={"Número de celular"}
                onShareFn={shareQr}
              />
            </div>
          </div>
          <Spacer/>
        </BreBLayout>
  );
}

export default MyQRs;
