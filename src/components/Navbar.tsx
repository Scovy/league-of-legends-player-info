import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

function Navbar() {

  const navigate = useNavigate()


  return (
    <nav className="sticky top-0 z-10 bg-primary-bg w-full px-4 py-3 flex justify-center shadow border-b-2 border-[#0D0D28] text-white">
      <SearchBar/>
      <button className="ml-3" onClick={()=>navigate('/champions')}>Champion List</button>
    </nav>
  )


}

export default Navbar