import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear } from "@fortawesome/free-solid-svg-icons";

function NotFound() {
  return (
    <div className="container text-center my-5">
      <FontAwesomeIcon icon={faFaceSadTear} size="6x" className="text-secondary mb-4" />
      <h1 className="display-4">404 - Page Not Found</h1>
      <p className="lead">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn btn-primary mt-4">
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;