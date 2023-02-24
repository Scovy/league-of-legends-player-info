interface Props{
    lore : string
}

function ChampionLore(props: Props){


    return (
        <div className="w-2/3 ">
            <h1 className="tracking-wider">{props.lore}</h1>
        </div>
    )

}
export default ChampionLore