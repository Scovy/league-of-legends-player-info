import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Navbar(inp: { onSubmit: any }) {
  const [player, setPlayer] = useState('');
  const [isInit, setInit] = useState(true);
  const { playerName } = useParams();
  const navigate = useNavigate()
  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    inp.onSubmit(player);
  };

  if (isInit) {
    setPlayer(playerName || '');
    setInit(false);
  }

  const handleChange = (event: any) => {
    setPlayer(event.target.value);
  }


  return (
    <nav className="fixed top-0 z-10 bg-primary-bg w-full px-4 py-3 flex justify-center shadow border-b-2 border-[#0D0D28] text-white">
      <form onSubmit={handleFormSubmit}>
        <input onChange={handleChange} value={player} type="text" className=" flex  rounded-sm p-2 bg-tertiary-bg focus:outline-none focus:shadow-outline text-white" placeholder="Player search" />
      </form>
      <button onClick={()=>navigate('/champions')}>hehe</button>
    </nav>
  )


}

export default Navbar