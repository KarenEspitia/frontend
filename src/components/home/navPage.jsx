const NavPage = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg color-principal">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Quienes Somos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Favoritos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contáctanos</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Servicios
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/cliente">Clientes</a></li>
            <li><a className="dropdown-item" href="/productos">Productos</a></li>
            <li><a className="dropdown-item" href="/facturas">Facturas</a></li>
            <li><a className="dropdown-item" href="/comentarios">Comentarios</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
export default NavPage