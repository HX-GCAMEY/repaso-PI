import {Link} from "react-router-dom";
import "./card.styles.css";

function Card({user}) {
  const {name, email, phone, id} = user;

  return (
    <div className="card-container">
      <Link to={`/home/${id}`}>
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{phone}</p>
      </Link>
    </div>
  );
}

export default Card;
