import Card from "../card/card.component";
import "./cards.styles.css";

function Cards({allUsers}) {
  const usersList = allUsers;

  return (
    <div className="card-list">
      {usersList?.map((user) => (
        <Card user={user} />
      ))}
    </div>
  );
}

export default Cards;
