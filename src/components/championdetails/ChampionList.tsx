import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ChampionList(){
const [championList, setChampionList] = useState({} as any)
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get("https://ddragon.leagueoflegends.com/cdn/13.3.1/data/en_US/champion.json")
        .then(response => setChampionList(response.data.data))
        .catch(error => console.log(error))
    },[])


    const transformedData = Object.keys(championList).map(key => {
        return {
          id: key,
          ...championList[key]
        };
      });

      const handleClick = (championName: string) => {
        navigate(`/champions/${championName}`);
      }

    return (
        <div className='bg-primary-bg'>
        <div className='w-full mx-auto bg-secondary-bg md:w-2/3'>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 text-white gap-2 p-2">
            {transformedData.map((champion : any)=>(
                <div onClick={() => handleClick(champion.id)} className='flex flex-col items-center'>
                <img className="w-20 h-20" alt='champion' src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${champion.key}.png`} />
                <h1>{champion.name}</h1>
                </div>
                ))}

            </div>
            
        </div>
        </div>
    )
}


export default ChampionList