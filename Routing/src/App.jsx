import { Slidebar } from "./components/Slidebar"
import {Routes, Route} from "react-router-dom"
import PageInbox from "./pages/PageInbox"
import PageToday from "./pages/PageToday"
import PageUpcoming from "./pages/PageUpcoming"
import PageSomeday from "./pages/PageSomeday"
import PageLogbook from "./pages/PageLogbook"
import PageTrash from "./pages/PageTrash"

function App() {
  

  return (
    <div className=" text-black">
      <Routes>
        {/* path and element */}
        {/* <Route path="/" element={</>}/> */}
        <Route path="/" element={<PageInbox/>}/>
        <Route path="/Today" element={<PageToday/>}/>
        <Route path="/Upcoming" element={<PageUpcoming/>}/>
        <Route path="/Someday" element={<PageSomeday/>}/>
        <Route path="/Logbook" element={<PageLogbook/>}/>
        <Route path="/Trash" element={<PageTrash/>}/>
      </Routes>
    </div>
  )
}

export default App
