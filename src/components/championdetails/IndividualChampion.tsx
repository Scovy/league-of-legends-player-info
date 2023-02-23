import axios from "axios"
import { Suspense, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ChampionLore from "./ChampionLore"
import ChampionSkills from "./ChampionSkills"

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
        <div className="text-white h-screen w-2/3 mx-auto pt-20 bg-primary-bg">
            <div className="flex">
            <img className=" object-cover" alt='Champion splashart' src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${currentChampion.id}_0.jpg`}/>
            
                <div className="flex-col mt-20 pl-5">
                
                <h1 className="text-white font-bold text-4xl">{currentChampion.name}</h1>
                <h1 className="text-slate-300">{currentChampion.title}</h1>
                <div>
                    <ul className="flex gap-5">
                        <li onClick={()=> handleClick('lore')}>Lore</li>
                        <li onClick={()=> handleClick('skills')}>Skills</li>
                        <li onClick={()=> handleClick('Skins')}>Skins</li>
                    </ul>
                </div>
                <div className="pt-20">
                {selectedTab === 'lore' && <ChampionLore lore={currentChampion.lore}/>}
                {selectedTab === 'skills'&& <ChampionSkills skillsList={currentChampion.spells}/>}
                </div>
                </div>
            </div>
        </div>
        </>
    )

}

export default IndividualChampion