import axios from "axios";
import { useState } from "react";
import "./App.css";
import SummonerCard from "./components/SummonerCard";
import { Button, TextField} from "@mui/material";
import MatchHistory from "./components/MatchHistory";
import {
  Route,
  Routes,
  Link,
} from "react-router-dom";
function App() {

  const [playerName, setPlayerName] = useState("")
  const [matchList, setMatchList] = useState([])  
  function playerSearch(){
    axios.get('http://localhost:4000/games', {params:{nickname:playerName}})
      .then((response)=> {
        setMatchList(response.data)
      }).catch((err)=>{
        console.log(err)
      })
  }

  return (
<Routes>        

<Route path='/' element={
   <div className="container">
    <img className="emoteImg" src={require("./emote.png")}></img>
    <div className="searchBar">
      <TextField
        variant="standard"
        className='searchbox'
        type="text"
        placeholder='Enter your Summoner Name'
        value={playerName}
        onChange={e => setPlayerName(e.target.value)}>
      </TextField>
      <Button
        component={Link} to="/info" variant='contained' position='center' className="search-player-button" onClick={playerSearch}>
        Search
      </Button>
    </div>
  </div>
}/>
   
    
      <Route path='/info' element={<SummonerCard  />}/>
    

      
</Routes>
  );
}

export default App;
