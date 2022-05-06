import { Link } from "react-router-dom";
import Img404 from "../images/Error404.jpg";

const NotFound = () => (
  <div className="">
    <img src={Img404} alt="Foto error 404" />
    <Link to="/">Back to Home</Link>
  </div>
);

export default NotFound;
