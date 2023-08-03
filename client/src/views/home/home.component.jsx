import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getByName, getUsers} from "../../redux/actions";

import Navbar from "../../components/navbar/navbar.component";
import Cards from "../../components/cards/cards.component";

import "./home.styles.css";

function Home() {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUsers);
  const [searchString, setSearchString] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setSearchString(e.target.value);
  }

  //* Filtro con el backend

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getByName(searchString));
  }

  //* Filtro sobre el estado

  // const [filtered, setFiltered] = useState(allUsers);
  // const [searchString, setSearchString] = useState("");

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const filtered = allUsers.filter((user) =>
  //     user.name.includes(searchString)
  //   );
  //   setFiltered(filtered);
  // }

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="home">
      <h2 className="home-title">Home</h2>
      <Navbar handleChange={handleChange} handleSubmit={handleSubmit} />
      <Cards allUsers={allUsers} />
    </div>
  );
}

export default Home;
