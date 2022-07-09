import axios from 'axios';
import { useState } from 'react';
import './App.css';
import SummonerCard from './components/SummonerCard';
import MatchHistory from './components/MatchHistory';
function App() {
  const API_KEY = "RGAPI-27f017e4-f515-4019-83b9-569489c735ec"
  const API_ROUTE = "https://eun1.api.riotgames.com"

  const [playerName, setPlayerName] = useState("")
  const [summonerData, setSummonerData] = useState("")
  const [currentPUUID, setCurrentPUUID] = useState("")


  function playerSearch(event){
      let API_CALL = (API_ROUTE + "/lol/summoner/v4/summoners/by-name/" + playerName + "?api_key=" + API_KEY)
      console.log(API_CALL)
      axios.get(API_CALL)
      .then(function(response){
          setSummonerData(response.data)
          setCurrentPUUID(response.data.puuid)
      })
      .catch(error => console.log("error"))
  }
  console.log(summonerData)
  return(
      <div className="container">
      
      <input 
      type="text" 
      value={playerName}
      onChange={e => setPlayerName(e.target.value)}>
      </input>
      <button className="search-player-button" onClick={playerSearch}></button>

      <SummonerCard
      summonerName={summonerData.name}
      summonerLevel={summonerData.summonerLevel}
      puuid={currentPUUID}
      profileIconId={summonerData.profileIconId}
      
      />

      

      
      
      
      <MatchHistory></MatchHistory>
      </div>
  );
}

export default App;
