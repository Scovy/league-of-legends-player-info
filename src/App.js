import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import SummonerCard from './components/SummonerCard';
import MatchHistory from './components/MatchHistory';
function App() {
  const API_KEY = "RGAPI-f2f83da2-d01a-44b3-92f5-946c90bf1423"
  const API_ROUTE = "https://eun1.api.riotgames.com"

  const [playerName, setPlayerName] = useState("")
  const [summonerData, setSummonerData] = useState("")
  const [summonerQueue, setSummonerQueue] = useState([])




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
  return(
      <div className="container">
      
      <input 
      type="text" 
      value={playerName}
      onChange={e => setPlayerName(e.target.value)}>
      </input>
      <button className="search-player-button" onClick={playerSearch}></button>

      <SummonerCard
      />



      </div>
  );
}
/*console.log(playerName)
        function playerSearch(){
          let API_CALL = (API_ROUTE + "/lol/summoner/v4/summoners/by-name/" + playerName + "?api_key=" + API_KEY)
          fetch(API_CALL)
           .then(response=>{
            setSummonerData(response.data)
            fetch(API_ROUTE + "/lol/league/v4/entries/by-summoner/" + summonerData.id + "?api_key=" + API_KEY)
              .then(response=>{
                setSummonerQueue(response.data)
              }).catch(err=>console.log("error queue"))
           }).catch(err=>console.log("Error data"))


        }*/

export default App;