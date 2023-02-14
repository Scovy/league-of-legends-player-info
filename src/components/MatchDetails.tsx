import {useState} from 'react' 
import { FaChevronDown, FaChevronLeft} from "react-icons/fa";

function MatchDetails(props :{matchData: any[], partIndex: number, matchIndex: number}){
    const matchIndex = props.matchIndex
    const [expandedIndex, setExpandedIndex] = useState(-1)
    const isExpanded = expandedIndex === props.matchIndex 


    const handleClick = (index: number) =>{
        if(expandedIndex === index){
            return setExpandedIndex(-1)
        } else {
            setExpandedIndex(index)
        }
    }
    const icon = <span>{isExpanded ? <FaChevronLeft/>:<FaChevronDown/>}</span>
    const match = props.matchData
    return (
        <div>
            <div onClick={() => handleClick(matchIndex)}>
            {icon}
            </div>
            {isExpanded && <div>{match[props.matchIndex].info.participants.map((player:any)=>{
                return <p>{player.summonerName} - {player.kills} / {player.deaths} / {player.assists}</p>
            })}</div>}
        </div>
    )

}

export default MatchDetails