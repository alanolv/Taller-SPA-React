import Table from 'react-bootstrap/Table'

function Poke(props) {
  return (
    <>
<Table striped bordered hover variant="dark" id="lista_pokemon">
  <thead>
    <tr>
      <th>Pokedex</th>
      <th>Pokemon Name</th>
      <th>Pokemon Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{props.id}</td>
      <td>{props.Name}</td>
      <td>{props.type}</td> 
    </tr>
  </tbody>
</Table>
    </>
  );
}


export default Poke;