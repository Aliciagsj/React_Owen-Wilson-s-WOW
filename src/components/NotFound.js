import { Link } from "react-router-dom";
import Img404 from "../images/Error404.jpg";
import "../styles/components/NotFound.scss";

const NotFound = () => (
  <div className="notFound">
    <img className="notFound__img" src={Img404} alt="Foto error 404" />
    <Link className="btn" to="/">
      Inicio
    </Link>
  </div>
);

export default NotFound;
