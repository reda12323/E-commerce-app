import { Link } from "react-router-dom";
import "./emplacement.css";
import { FaHome } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";


const Emplacement = ({category, name, title}) => {
    return (
        <div style={{marginTop:"25px"}}>
                <div className="flex" style={{textTransform:"capitalize",gap:"10px",flexWrap:"wrap"}}>
                    <Link to="/"><FaHome style={{fontSize:"15px",cursor:"pointer"}}/></Link>

                    <p> <FaAngleRight style={{fontSize:"10px"}}/>  </p>

                    {title && (<Link to={`/category/${title}`} style={{cursor:"pointer"}}>{title}</Link>)}

                    {title && (<p> <FaAngleRight style={{fontSize:"10px"}}/>  </p>)}

                    {category && (<Link to={`/category/${title}/${category}`} style={{cursor:"pointer"}}>{category}</Link>)}

                    {category && (<p> <FaAngleRight style={{fontSize:"10px"}}   /> </p>)}

                    {name && (<Link style={{cursor:"inherit"}}>{name}</Link>)}
                </div>
        </div>
    );
}
 
export default Emplacement;