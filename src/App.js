import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import SummonerCard from "./components/SummonerCard";
import { Button, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {
  Route,
  Routes,
} from "react-router-dom";
function App() {
  const API_KEY = "RGAPI-acde74a5-d58e-40cd-b2dd-b2434d29d24d"
  const API_ROUTE = "https://eun1.api.riotgames.com"

  const [playerName, setPlayerName] = useState("")
  const [summonerData, setSummonerData] = useState("")
  const [summonerQueue, setSummonerQueue] = useState([{}])




function playerSearch(){
  let API_CALL = (API_ROUTE + "/lol/summoner/v4/summoners/by-name/" + playerName + "?api_key=" + API_KEY)
  axios.get(API_CALL)
  .then(function(response){
    setSummonerData(response.data)  
  })
}
       


    useEffect(()=>{
      axios.get(API_ROUTE + "/lol/league/v4/entries/by-summoner/" + summonerData.id + "?api_key=" + API_KEY)
      .then(function(response){
        setSummonerQueue(response.data)
      })
    },[summonerData])


  


  console.log(summonerData)
  console.log(summonerQueue)
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
       variant='contained' href='/info' position='center' className="search-player-button" onClick={playerSearch}>
       Search
     </Button>
   </div>
 </div>
}/>
   
    
      <Route path='/info' element={<SummonerCard {...summonerQueue[0]} summonerInfo={summonerData} />}/>
    

        
</Routes>
  );
}

export default App;
