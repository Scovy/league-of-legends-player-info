import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';

function MatchHistory() {
  const [matchHistory, setMatchHistory] = useState([]);

      function getSummonerGames(){
        axios.get("http://localhost:4000/games")
          .then((response)=>{
            setMatchHistory(response.data)
          })
      }
      getSummonerGames()

 return(
  <div></div>


 )
 }
export default MatchHistory;