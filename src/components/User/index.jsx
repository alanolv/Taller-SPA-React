import styles from "./User.module.css";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
function User(props) {
  const { user } = props;

  return (
    <Card classname="tarjeta">
      <Card.Body className={`${styles.card} m-5 text-center`}>
        <p>
          <strong>Name:</strong>
        </p>
        <p>{`${user.name}`}</p>
        <p>
          <strong>Base Experience:</strong>
        </p>
        <p>{`${user.base_experience}`}</p>
        <p>
          <strong>Height:</strong>
        </p>
        <p>{`${user.height}`}</p>
        <div>
          <Button variant="primary">Editar</Button>
          <Button variant="danger">Eliminar</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default User;
