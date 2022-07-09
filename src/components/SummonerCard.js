export default function SummonerCard(props){


const profileIcon = "https://ddragon.leagueoflegends.com/cdn/12.12.1/img/profileicon/" + props.profileIconId +".png"

console.log(profileIcon)
    return(
        <div>
            <p>{props.summonerName}</p>
            <p>{props.summonerLevel}</p>
            <img src={profileIcon}></img>
        </div>
    )
}