import axios from "axios";
import { useState } from "react";
export default function SummonerCard(){

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
        <div className="card--wrapper">
        
        <input 
        type="text" 
        value={playerName}
        onChange={e => setPlayerName(e.target.value)}>
        </input>
        <button className="search-player-button" onClick={playerSearch}></button>
        <h1 className="summoner_name">{summonerData.name}</h1>
        <h2>{summonerData.summonerLevel}</h2>
        <h3>{currentPUUID}</h3>

        </div>
    );
}