import RequestLayout from "@/components/templates/request.layout";

function DeleteRequest() {
  return (
    <RequestLayout
      title="Solicitud de cancelación exitosa"
      message="La llave será cancelada dentro de los próximos 15 días."
    />
  );
}

export default DeleteRequest;
