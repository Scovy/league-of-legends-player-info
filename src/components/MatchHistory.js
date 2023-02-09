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

 console.log(matchData)

  return(
    <div className="flex flex-col bg-tertiary-bg p-5 rounded-sm">
        {matchDataArray.map((match)=> {
        /*participants index pointing to searched player */ 
    const participantIndex = match.info.participants.findIndex(participant => participant.summonerName === playerName)
          console.log(participantIndex)
    return (
    <div className={`mt-2 p-2 place-items-center h-28  flex rounded-md text-white ${match.info.participants[participantIndex].win ? 'bg-[#1E2B5E]' : 'bg-[#3E223B]'}`} >
          <div className="">
            <p className="">{match.info.gameMode}</p>
            <p className="text-justify">{match.info.participants[participantIndex].win ? <p className="font-bold text-blue-700">Win</p> : <p className="font-bold text-red-600">Loss</p>}</p>
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
            <h1 className=" ">{match.info.participants[participantIndex].kills} /<span className="text-red-600 font-bold"> {match.info.participants[participantIndex].deaths} </span> /  {match.info.participants[participantIndex].assists}</h1>
            <h2 className="">{Math.round((match.info.participants[participantIndex].kills + match.info.participants[participantIndex].assists) /  match.info.participants[participantIndex].deaths * 100) /100 }</h2>
            <h3>CS {match.info.participants[participantIndex].totalMinionsKilled}</h3>
            <h4>Vision {match.info.participants[participantIndex].visionScore}</h4>
          </div>
          <div className="flex flex-col gap-2 p-5 m-2">
          <div className="flex gap-1">
              <img className="w-8 h-8" alt='sprite' src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/${match.info.participants[participantIndex].item0}.png`}></img>
              <img className="w-8 h-8" alt='sprite' src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/${match.info.participants[participantIndex].item1}.png`}></img>
              <img className="w-8 h-8" alt='sprite' src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/${match.info.participants[participantIndex].item2}.png`}></img>
              <img className="w-8 h-8" alt='sprite' src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/${match.info.participants[participantIndex].item6}.png`}></img>
          </div>
          <div className="flex gap-1">
              <img className="w-8 h-8" alt='sprite' src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/${match.info.participants[participantIndex].item3}.png`}></img>
              <img className="w-8 h-8" alt='sprite' src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/${match.info.participants[participantIndex].item4}.png`}></img>
              <img className="w-8 h-8" alt='sprite' src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/${match.info.participants[participantIndex].item5}.png`}></img>
          </div>
          </div>
    </div>
    )
          
  })}


    </div>
  )
}

export default MatchHistory;