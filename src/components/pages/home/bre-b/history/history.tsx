import styles from "./history.module.scss";
import { useNavigate } from "react-router-dom";
import BreBLayout from "@/components/templates/breb.layout";
import Spacer from "@/components/atoms/spacer/spacer";
import Movement from "@/components/molecules/movement/movement";
import { ChevronDown } from "react-feather";
import { useState } from "react";
import CustomModal from "@/components/molecules/modal/modal";
import {
  Button,
  Input,
  Radio,
  RadioGroupField,
  SelectField,
  TextAreaField,
} from "@aws-amplify/ui-react";

function History() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [returnType, setReturnType] = useState("");
  const history = useNavigate();

  const handelModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const completeRequest = () => {
    history('/home/bre-b/history/request')
  }

  return (
    <>
      <section
        className={`${styles.homeBreB} ${isModalVisible ? "blurred" : ""}`}
      >
        <BreBLayout>
          <h2 className="body">Movimientos</h2>
          <div className={styles.account}>
            <h4>Llave</h4>
            <span
              className="row align-center"
              style={{ justifyContent: "flex-start" }}
            >
              Documento <ChevronDown />
            </span>
            <div className={`${styles.account__info} row`}>
              <div>
                <h4>Cuenta de ahorros</h4>
                <p className="bold">123-456-78-90</p>
              </div>
              <div>
                <p className="bold">Saldo</p>
                <span className="title">$1.384.700</span>
              </div>
            </div>
          </div>
          <h2 className="body">Movientos en los ultimos 30 dias</h2>
          <Spacer height={20} />
          <Movement
            date={"03 Oct 2024"}
            amount={"-45.300"}
            description={"Transferencia"}
            receiver={"LAURA GALLEGO"}
            onClickFn={handelModal}
          />
          <Movement
            date={"03 Oct 2024"}
            amount={"-45.300"}
            description={"Transferencia"}
            receiver={"LAURA GALLEGO"}
            onClickFn={handelModal}
          />
          <Movement
            date={"03 Oct 2024"}
            amount={"-45.300"}
            description={"Transferencia"}
            receiver={"LAURA GALLEGO"}
            onClickFn={handelModal}
          />
        </BreBLayout>
      </section>
      <CustomModal isOpen={isModalVisible} handleModal={handelModal}>
        <h2 className="subtitle">Solicitar devolucion</h2>
        <p>
          Para solicitar una devolución al comericio ingresa la siguiente
          información
        </p>
        <Spacer height={20} />
        <SelectField label="Motivo de devolucion">
          <option value="opcion1">Opcion 1</option>
          <option value="opcion2">Opcion 2</option>
          <option value="opcion3">Opcion 3</option>
          <option value="opcion4">Opcion 4</option>
        </SelectField>
        <Spacer height={10} />
        <RadioGroupField
          legend=""
          name="returnType"
          value={returnType}
          onChange={(e) => setReturnType(e.target.value)}
        >
          <Radio value="total">Devolucion total</Radio>
          <Radio value="partial">Devolucion parcial</Radio>
        </RadioGroupField>
        {returnType == "partial" ? (
          <Input
            variation="quiet"
            placeholder="Escribe el monto"
            type="number"
          />
        ) : null}
        <Spacer height={10} />
        <TextAreaField
          label=""
          placeholder="Observacion adicional"
          rows={3}
          className="body"
        />
        <Spacer height={10} />
        <span className="tiny">Recuerda que sólo puedes adjuntar archivos PDF, FPG, PNG con un máximo de 20 Mb</span>
        <Spacer height={20} />
        <div className={`col`}>
          <Button className={`btn-enabled`} onClick={completeRequest}>
            Solicitar devolucion
          </Button>
          <Spacer height={10}/>
          <Button className={`btn-outline`} onClick={handelModal}>Cancelar</Button>
        </div>
        <Spacer height={20}/>
      </CustomModal>
    </>
  );
}

export default History;
