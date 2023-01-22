function MatchHistory({ matchData }) {
const matchDataArray = matchData
return (
  <div>
    {matchDataArray.map((match, index)=>
    <>
    <h2>Game {index + 1}</h2>
    <div>
      {match.info.participants.map((data, participantIndex)=>
      <div>Player {participantIndex + 1}: {data.summonerName} - {data.championName} <img alt='Champion Avatar' src={'https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/' + data.championName + '.png'}/></div>)
      
      }
    </div>

    </>
    )
    
    
    }
  </div>
);
}

export default MatchHistory;