import axios from "axios"

export default function SummonerCard(props){


const profileIcon = "https://ddragon.leagueoflegends.com/cdn/12.12.1/img/profileicon/" + props.profileIconId +".png"

console.log(profileIcon)
    return(
        <div>
            <p>{props.summonerName}</p>
            <p>{props.summonerLevel}</p>
            <p>{props.lpAmount}</p>
            <p>{props.tier +" "+ props.rank}</p>
            <p>Wins {props.wins} Losses {props.losses}</p>
            <img src={profileIcon}></img>
        </div>
    )
}