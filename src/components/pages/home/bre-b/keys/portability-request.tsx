import RequestLayout from "@/components/templates/request.layout";

function PortabilityRequest() {
  return (
    <RequestLayout
      title="Solicitud cambio de portabilidad exitosa"
      message="Para completar la portabilidad debes confirmarla en la app o web de la entidad bancaria origen dentro de lo próximos 5 días."
    />
  );
}

export default PortabilityRequest;
