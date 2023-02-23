interface Props{
    skillsList : any
}

function ChampionSkills(props: Props){

    return (
        <>
    <div className="flex gap-3">
            {props.skillsList.map((skill:any)=>{
                return <img alt='Champion skill' src={`https://ddragon.leagueoflegends.com/cdn/13.4.1/img/spell/${skill.id}.png`}  />    
            })}
    </div>
    </>
    )
}
export default ChampionSkills