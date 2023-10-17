import NavLink from "./NavLink";
import IconAnytime from "./icons/IconAnytime";
import IconInbox from "./icons/IconInbox";
import IconLogbook from "./icons/IconLogbook";
import IconSomeday from "./icons/IconSomeday";
import IconToday from "./icons/IconToday";
import IconTrash from "./icons/IconTrash";
import IconUpcoming from "./icons/IconUpcoming";

const NavDesign =[
    {
        icon : <IconInbox/>,
        label : "Inbox",
        href: "/",
        className: "mb-4 hover:bg-red-200 rounded-xl",
    },
    {
        icon : <IconToday/>,
        label : "Today",
        href: "/Today",
        className: "hover:bg-[#a7fa96] rounded-xl",
    },

    {
        icon : <IconUpcoming/>,
        label : "Upcoming",
        href: "/Upcoming",
        className: "hover:bg-[#a7fa96] rounded-xl",
    },
    {
        icon : <IconSomeday/>,
        label : "Someday",
        href: "/Someday",
        className: "mb-4 hover:bg-[#a7fa96] rounded-xl",
    },
    {
        icon : <IconLogbook/>,
        label : "Logbook",
        href: "/Logbook",
        className: "hover:bg-[#a7cbfa] rounded-xl",
        
    },
    {
        icon : <IconTrash/>,
        label : "Trash",
        href: "/Trash",
        className: "hover:bg-red-200 rounded-xl",
    },
]


export function Slidebar(){
    return(
    // main div 
    <div className=" w-56 bg-zinc-100 h-screen border-r flex flex-col">
        <ul className=" px-5 py-5 w-auto">
            {/* 1st */}
            {NavDesign.map( (link, id) =>{
                return( 
                    <li key={id} className={link.className}>
                        {/* <NavLink icon ={link.icon} label = {link.label} href = {link.href}/>  */}
                        {/* write it more easier, using prop means three dot  */}
                        <NavLink {...link}/>
                    </li>
                )
            })}
        </ul>

        
    </div>
    
    )
}