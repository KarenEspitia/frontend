import LogPage from "../home/logPage";
import NavPage from "../home/navPage";

const ListFactura = () => {
  return (
    <div>
      <LogPage />
      <NavPage />
      <div class="card m-2">
        <div class="card-header categoria text-center">
          <h5 className="m-2">Gestión de facturas</h5>
        </div>
        <div class="card-body">
          <div className="row">
            <div className="col-5">
              <input
                type="search"
                className="form-control"
                placeholder="Digite un nombre"
              />
            </div>
            <div className="col-1">
              <button
                type="button"
                class="btn btn-outline-secondary"
                title="Buscar"
              >
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            <div className="col-6 text-end">
              <button
                type="button"
                class="btn btn-outline-secondary"
                title="Agregar"
              >
                <i class="fa-solid fa-user-plus"></i>
              </button>
            </div>
          </div>
          <hr />

          <table class="table table-hover table-bordered">
            <thead className="color-principal align-self-center">
              <tr>
                <th scope="col">Numero de la factura</th>
                <th scope="col">Fecha</th>
                <th scope="col">Cliente</th>
                <th scope="col">Total</th>
                <th scope="col">Opciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td className="text-center">
                  <button type="button" class="btn btn-outline-success mx-3 boton-tabla" title="Editar">
                    <i class="fa-regular fa-pen-to-square"></i>
                  </button>
                  <button type="button" class="btn btn-outline-danger boton-tabla" title="Eliminar">
                    <i class="fa-solid fa-trash-can"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListFactura;
