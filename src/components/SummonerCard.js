import axios from "axios"

export default function SummonerCard(props){


const profileIcon = "https://ddragon.leagueoflegends.com/cdn/12.12.1/img/profileicon/" + props.profileIconId +".png"
//const soloQ = props.soloQueue
console.log(profileIcon)
    return(
        <div>
            <p>{props.summonerName}</p>
            <p>{props.summonerLevel}</p>
{/*           <p>{soloQ[0].tier +" "+ soloQ[0].rank}</p>
            <p>Wins {soloQ[0].wins} Losses {soloQ[0].losses}</p>*/}
            <img src={profileIcon}></img>
        </div>
    )
}