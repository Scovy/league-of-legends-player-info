/* eslint-disable array-callback-return */
import MatchDetails from "./MatchDetails";
import {useState} from 'react'
import "./styles/MatchHistory.css";
import { FaChevronDown, FaChevronLeft } from "react-icons/fa";


function MatchHistory(element: { matchData: any[], playerName: string }) {
  
  const [expandedIndex, setExpandedIndex] = useState(-1)
  const matchDataArray = element.matchData;

  const itemPlaceholderWin = <div className="w-8 h-8 bg-item-win shrink-0"></div>
  const itemPlaceholderLoss = <div className="w-8 h-8 bg-item-loss shrink-0"></div>

  const itemCDNUrl = 'https://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/'
  const championAvatarCDNUrl = 'https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/'

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
        const currentPlayer = match.info.participants[participantIndex]
        if (participantIndex > -1) {
          return (
            <div>
            <div className={`mt-2 p-2 place-items-center justify-between h-28 w-full flex rounded-md text-white ${currentPlayer.win ? 'bg-[#1E2B5E]' : 'bg-[#3E223B]'}`} >
              <div className="">
                <p className="">{match.info.gameMode}</p>
                <p className="text-justify">{currentPlayer.win ? <p className="font-bold text-blue-700">Win</p> : <p className="font-bold text-red-600">Loss</p>}</p>
              </div>
              <div className="flex">
                <img className="h-14 w-14" src={championAvatarCDNUrl + (currentPlayer.championName === 'FiddleSticks' ? 'Fiddlesticks' : currentPlayer.championName) + '.png'} alt="Img" />
                
                {/*Placeholders for summoner spells and runes */}
                <div>
                  <div className="h-7 w-7 bg-red-600"></div>
                  <div className="h-7 w-7 bg-yellow-600"></div>
                </div>
              </div>
            

              <div className="pl-10 text-center">
                <h1 className=" ">{currentPlayer.kills} /<span className="text-red-600 font-bold"> {currentPlayer.deaths} </span> /  {currentPlayer.assists}</h1>
                <h2 className="">{Math.round((currentPlayer.kills + currentPlayer.assists) / currentPlayer.deaths * 100) / 100}</h2>
                <h3>CS {currentPlayer.totalMinionsKilled + currentPlayer.neutralMinionsKilled}</h3>
                <h4>Vision {currentPlayer.visionScore}</h4>
              </div>
              <div className="flex flex-col gap-2 pl-10 m-2 ">

                
                <div className="flex gap-1">
                {[currentPlayer.item0, currentPlayer.item1, currentPlayer.item2, currentPlayer.item6].map((item) => (           
                      item === 0 ? (currentPlayer.win ? itemPlaceholderWin : itemPlaceholderLoss)  :
                        <img className="w-8 h-8 rounded-sm" alt="Item" key={item} src={itemCDNUrl + item + '.png'} />
                      ))}
                </div>
                <div className="flex gap-1">
                {[currentPlayer.item3, currentPlayer.item4, currentPlayer.item5].map((item) => (  
                      item === 0 ? (currentPlayer.win ? itemPlaceholderWin : itemPlaceholderLoss)  :
                        <img className="w-8 h-8 rounded-sm" alt="Item" key={item} src={itemCDNUrl + item + '.png'} />
                      
                      ))}
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