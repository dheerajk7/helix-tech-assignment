import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
function Navbar(props) {
  return (
    <div className="navbar-container">
      <div className="left-navbar">
        <Link to="/">
          <span className="page-heading">Home</span>
        </Link>
      </div>

      <ul className="right-navbar">
        <li>
          <Link to="/add-course">Add Course</Link>
        </li>
        <li>
          <Link to="/add-topic">Add Topic</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
