import "./landing.css"
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
function Landing(){
    return(
    <div>
        <div class="landing-page">
  <div class="container">
    <div class="info">
      <h1>Taller React</h1>
      <strong><p>Pagina creada para el taller de creacion de una SPA con React y Reduc, En esta pagina se pueden visualizar y crear nuevos pokemones. </p></strong>
      <br></br>
      <NavLink to="/dashboard" className="btn btn-success">
        Ver Pokemons
      </NavLink>
    </div>
   
  </div>
</div>

    </div>
    )
}
export default Landing;