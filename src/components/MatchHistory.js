import React from 'react';
import { useState, useEffect } from 'react';

const API_KEY = 'RGAPI-289bf4f0-ed7c-414b-8acc-58716a3e69f9';
const SUMMONER_NAME = 'COOKIEMONSTER123';

function MatchHistory() {
  const [matchHistory, setMatchHistory] = useState(null);

  useEffect(() => {
    async function fetchData() {
      // First, get the summoner's PUUID using their summoner name
      const summonerResponse = await fetch(
        "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + SUMMONER_NAME + "?api_key=" + API_KEY
      );
      const summonerData = await summonerResponse.json();
      const puuid = summonerData.puuid;


      // Then, use the PUUID to get the match history
      const matchHistoryResponse = await fetch(
        "https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/" + puuid + "/ids?start=0&count=20&api_key=" + API_KEY
      );
      const matchHistoryData = await matchHistoryResponse.json();


      // Retrieve the details for each match in the match history
      const matches = await Promise.all(
        matchHistoryData.map(async match => {
            console.log(match)
          const response = await fetch(
        
            "https://americas.api.riotgames.com/lol/match/v5/matches/" + match + "?api_key=" + API_KEY
          );
          return await response.json();
        })
      );
        
      setMatchHistory(matches);
    }
    fetchData();
  }, []);
  console.log(matchHistory)
  if (matchHistory === null) {
    return <p>Loading match history...</p>;
  }

  return (
    <ul>
      {matchHistory.map((match, idx)  => (
        <li key={idx}>{match.info.participants[0].assists}</li>
      ))}
    </ul>
  );
}


export default MatchHistory;