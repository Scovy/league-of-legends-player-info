import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import SummonerCard from './components/SummonerCard';
import MatchHistory from './components/MatchHistory';
import { Button, TextField } from '@mui/material'
function App() {
  const API_KEY = "RGAPI-0bb7e954-18fd-4a20-a588-8130f6dc22b6"
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
  return(
      <div className="container">
      <div className='searchBar'>
      <TextField
      variant="standard"
      className='searchbox'
      type="text"
      placeholder='Enter your Summoner Name'
      value={playerName}
      onChange={e => setPlayerName(e.target.value)}>
      </TextField>
      <Button variant='contained' position='center' className="search-player-button" onClick={playerSearch}>Search Player</Button>
      </div>

      <SummonerCard {...summonerQueue[0]}
      summonerInfo = {summonerData}/>



      </div>
  );
}

export default App;