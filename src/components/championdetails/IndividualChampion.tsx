import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ChampionLore from "./ChampionLore"
import ChampionSkills from "./ChampionSkills"
import ChampionSkins from "./ChampionSkins"

interface Champion {
  data?: any
}

function IndividualChampion(){
    const [champion, setChampion] = useState<Champion>({})
    const [selectedTab, setSelectedTab] = useState('lore')
    const [loading, setLoading] = useState(true)
    const {championName} = useParams()


    useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.get(`http://ddragon.leagueoflegends.com/cdn/13.3.1/data/en_US/champion/${championName}.json`);
            setChampion(response.data);
            setLoading(false);
          } catch (error) {
            console.error('Failed to fetch data', error);
          }
        }
        fetchData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      const handleClick = (tab:string) =>{
        setSelectedTab(tab)
      }
    const name = championName
    const currentChampion = name && champion?.data?.[name]
    if (loading) {
        return <div className="bg-primary-bg">Loading...</div>;
      }
    
      if (!champion) {
        return <div>Failed to fetch data</div>;
      }
      
    return (
        <>
        <div className="text-white bg-primary-bg mx-auto min-h-screen md:w-2/3 l:w-2/5 ">
            <div className="flex flex-col md:flex-row">
            <img className="w-full absolute opacity-20 md:static md:opacity-100 md:w-auto" alt='Champion splashart' src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${currentChampion.id}_0.jpg`}/>
            
                <div className="z-2 relative p-7">
                <div>
                  <h1 className="text-red font-bold text-4xl">{currentChampion.name}</h1>
                  <h1 className="text-slate-300">{currentChampion.title}</h1>
                </div>
                <div>
                    <ul className="flex gap-5">
                        <li onClick={()=> handleClick('lore')}>Lore</li>
                        <li onClick={()=> handleClick('skills')}>Skills</li>
                        <li onClick={()=> handleClick('skins')}>Skins</li>
                    </ul>
                </div>
                <div className="pt-20">
                {selectedTab === 'lore' && <ChampionLore lore={currentChampion.lore}/>}
                {selectedTab === 'skills'&& <ChampionSkills skillsList={currentChampion.spells}/>}
                {selectedTab === 'skins' && <ChampionSkins skinList={currentChampion.skins} championName={name}/>}
                </div>
                </div>
            </div>
        </div>
        </>
    )

}

export default IndividualChampion