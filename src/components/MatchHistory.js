import "./styles/MatchHistory.css";
/* {match.info.participants.slice(0, 5).map((data, participantIndex)=>
               <Typography><img alt='Champion Avatar' className='championAvatar' src={'https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/' + data.championName + '.png'}/> 
               {data.summonerName} - {data.championName} </Typography>
             )}
*/
/* {match.info.participants.slice(5).map((data, participantIndex)=>
               <Typography><img alt='Champion Avatar' className='championAvatar' src={'https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/' + data.championName + '.png'}/> 
               {data.summonerName} - {data.championName} </Typography>
*/

function MatchHistory({ matchData, playerName }) {
  const matchDataArray = matchData;

 

  return(
    <div>
        {matchDataArray.map((match)=> {
    const participantIndex = match.info.participants.findIndex(participant => participant.summonerName === playerName)

    return (
    <div className="mt-2 p-2 place-items-center w-96 h-28 bg-indigo-700 flex rounded-xl" >
          <div className="">
            <p className="">{match.info.gameMode}</p>
            <p className="text-justify">{match.info.participants[participantIndex].win ? <p>Win</p> : <p>Lose</p>}</p>
          </div>
          <div className="">
            <img className="h-14 w-14" src={'https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/' + match.info.participants[participantIndex].championName + '.png' } alt="Img"/>
            {/*Placeholders for summoner spells and runes */}
          </div>
          <div>
            <div className="h-7 w-7 bg-red-600"></div>
            <div className="h-7 w-7 bg-yellow-600"></div>
          </div>
          <div>
            <div className="h-7 w-7 bg-blue-600"></div>
          < div className="h-7 w-7 bg-green-600"></div>
          </div>
          <div className="pl-4 text-center">
          <h1 className=" ">{match.info.participants[participantIndex].kills} / {match.info.participants[participantIndex].assists} / {match.info.participants[participantIndex].deaths}</h1>
          <h2 className="">{Math.round(match.info.participants[participantIndex].challenges.kda * 100) /100 }</h2>
          <h3>CS {match.info.participants[participantIndex].totalMinionsKilled}</h3>
          <h4>Vision {match.info.participants[participantIndex].visionScore}</h4>
          </div>
    </div>
    )
          
  })}


    </div>
  )
}

export default MatchHistory;