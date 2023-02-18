import { useParams } from "react-router-dom";
import MatchDetails from "./MatchDetails";
import {useState} from 'react'
import "./styles/MatchHistory.css";
import { FaChevronDown, FaChevronLeft } from "react-icons/fa";


function MatchHistory(element: { matchData: any[], playerName: string }) {
  const { playerName } = useParams();
  const [expandedIndex, setExpandedIndex] = useState(-1)
  const matchDataArray = element.matchData;

  const handleClick = (index: number) =>{
    if(expandedIndex === index){
        return setExpandedIndex(-1)
    } else {
        setExpandedIndex(index)
    }
}

  return (
    <div className="flex flex-col bg-tertiary-bg p-5 rounded-sm grow">
      {matchDataArray.length > 0 && matchDataArray.map((match, index) => {
        const isExpanded = expandedIndex === index
        /*participants index pointing to searched player */
        const participantIndex = match.info.participants.findIndex((participant: any) => participant.summonerName === element.playerName)
        if (participantIndex > -1) {
          return (
            <div>
            <div className={`mt-2 p-2 place-items-center justify-between h-28 w-full flex rounded-md text-white ${match.info.participants[participantIndex].win ? 'bg-[#1E2B5E]' : 'bg-[#3E223B]'}`} >
              <div className="">
                <p className="">{match.info.gameMode}</p>
                <p className="text-justify">{match.info.participants[participantIndex].win ? <p className="font-bold text-blue-700">Win</p> : <p className="font-bold text-red-600">Loss</p>}</p>
              </div>
              <div className="flex">
                <img className="h-14 w-14" src={'https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/' + match.info.participants[participantIndex].championName + '.png'} alt="Img" />
                {/*Placeholders for summoner spells and runes */}
                <div>
                  <div className="h-7 w-7 bg-red-600"></div>
                  <div className="h-7 w-7 bg-yellow-600"></div>
                </div>
              </div>


              <div className="pl-10 text-center">
                <h1 className=" ">{match.info.participants[participantIndex].kills} /<span className="text-red-600 font-bold"> {match.info.participants[participantIndex].deaths} </span> /  {match.info.participants[participantIndex].assists}</h1>
                <h2 className="">{Math.round((match.info.participants[participantIndex].kills + match.info.participants[participantIndex].assists) / match.info.participants[participantIndex].deaths * 100) / 100}</h2>
                <h3>CS {match.info.participants[participantIndex].totalMinionsKilled + match.info.participants[participantIndex].neutralMinionsKilled}</h3>
                <h4>Vision {match.info.participants[participantIndex].visionScore}</h4>
              </div>
              <div className="flex flex-col gap-2 pl-10 m-2 ">
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
              
            <span onClick={() => handleClick(index)}>{isExpanded ? <FaChevronLeft/>:<FaChevronDown/>}</span>
            </div>
           <div className="text-white">
          {isExpanded && <MatchDetails matchData={element.matchData} partIndex={participantIndex} matchIndex={index}/>}
          </div>
          </div>
          )
        }
      }
    )
  }   
    </div>

    
  )

}

export default MatchHistory;