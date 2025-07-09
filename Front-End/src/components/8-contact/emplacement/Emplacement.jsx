import { FaHome } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./emplacement.css";



const Emplacement = () => {
    return (
        <div style={{ marginTop: "25px" }}>
            <div className="flex" style={{ textTransform: "capitalize", gap: "10px", flexWrap: "wrap" }}>
                <Link to="/"><FaHome style={{ fontSize: "15px", cursor: "pointer" }} /></Link>

                <p> <FaAngleRight style={{ fontSize: "10px" }} />  </p>

                <Link to="/contact" style={{ cursor: "pointer" }}>Contacte</Link>
            </div>
        </div>
    );
}

export default Emplacement;