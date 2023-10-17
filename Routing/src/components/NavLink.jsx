import { Link } from "react-router-dom";

export default function NavLink ({icon, label, href}){
    return(
        <Link to={href}>
            <div className=" flex gap-2 items-center  px-2 py-1 rounded-sm cursor-pointer"> 
                {/* img for side icon */}
                {icon}
                <span className=" text-gray-500 font-normal text-sm">{label}</span>
               
            </div>
        </Link>
        
    )
}
