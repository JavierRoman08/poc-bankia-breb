import Spacer from "../atoms/spacer/spacer";
import BreBLayout from "./breb.layout";
import CustomButtonComponent from "@components/atoms/button/custom.button";

function AccountTypeTemplate({
  imgURL,
  accountType,
  title,
  onClickFn,
  children,
  value,
}: any) {
  return (
    <BreBLayout title={title}>
      <div className="flex">
        <p>Haz seleccionado</p>
        <h2 className="subtitle">{accountType}</h2>
        <Spacer />
        <img
          src={imgURL}
          alt={accountType.split(" ").join("_")}
          className="align-center"
        />
        <Spacer />
        {children}
        <Spacer />
      </div>
      <CustomButtonComponent
        label={"Continuar"}
        onClickFn={onClickFn}
        isEnabled={value}
      />
    </BreBLayout>
  );
}

export default AccountTypeTemplate;
