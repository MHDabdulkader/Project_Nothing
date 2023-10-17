
import { Slidebar } from "./Slidebar";

export function Layout({children}){
    return(
        <div className="flex">
            <Slidebar/>
            <div className=" flex-1 py-14 px-20">{children}</div>
        </div>
    )
}