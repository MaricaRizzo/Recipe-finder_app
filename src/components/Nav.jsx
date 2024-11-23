import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav>
        <h1>What's for dinner?</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
