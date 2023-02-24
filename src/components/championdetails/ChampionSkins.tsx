import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
interface Props{
    skinList : any
    championName: any
}
function ChampionSkins(props: Props){
    console.log(props.championName)
    console.log(props.skinList)

     props.skinList.map((skin:any)=>{
        console.log(skin.num)
    }) 

    return (
        <div>
    {/* <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${props.championName}_${props.skinList[2].num}.jpg`}/> */}
    <Carousel className="md:w-1/2 md:h-1/2">
        {props.skinList.map((skin:any)=>{
        return (<div>
            <img alt={skin.name} className=" " src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${props.championName}_${skin.num}.jpg`}/>
        </div>)
    }) }

    </Carousel>
    </div>
    )
}
export default ChampionSkins