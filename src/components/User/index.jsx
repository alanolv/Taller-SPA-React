import styles from "./User.module.css";
import { Card } from "react-bootstrap";

function User(props) {
  const { pok } = props;

  return (
    <Card border="dark">
      <Card.Body className={`${styles.card} m-5 text-center`}>
        <p>
          <strong>Name:</strong>
        </p>
        <p>{`${pok.name}`}</p>
        <p>
          <strong>Email:</strong>
        </p>
        <p>{`${pok.url}`}</p>
      </Card.Body>
    </Card>
  );
}

export default User;