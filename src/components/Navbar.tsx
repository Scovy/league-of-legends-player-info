import { useState } from "react";

function Navbar(inp: {onSubmit: any}){
  const [player, setPlayer] = useState('')
  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    inp.onSubmit(player);
  };
  const handleChange = (event: any) =>{
    setPlayer(event.target.value)
  }
  

    return(
        <nav className="fixed top-0 z-10 bg-primary-bg w-full px-4 py-3 flex justify-center shadow border-b-2 border-[#0D0D28]">
        <form onSubmit={handleFormSubmit}>
        <input onChange={handleChange} value={player} type="text" className=" flex  rounded-sm p-2 bg-tertiary-bg focus:outline-none focus:shadow-outline text-white" placeholder="Player search"/>
        </form>
      </nav>
    )


}

export default Navbar