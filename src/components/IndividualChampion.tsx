import axios from "axios"
import { Suspense, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

interface Champion {
  data?: any
}

function IndividualChampion(){
    const [champion, setChampion] = useState<Champion>({})
    const [loading, setLoading] = useState(true)
    const {championName} = useParams()

    useEffect(()=>{
        axios.get(`http://ddragon.leagueoflegends.com/cdn/13.3.1/data/en_US/champion/${championName}.json`)
        .then(response => setChampion(response.data))
        .catch(error => console.log(error))
    },[])

    const name = championName
    const currentChampion = name && champion?.data?.[name]
    if(!champion){
        return <div>Loading</div>
    }


    return (
        <>
            <h1 className="text-white">{currentChampion.lore}</h1>
            <img src={`https://ddragon.leagueoflegends.com/cdn/13.4.1/img/spell/${currentChampion.spells[2].id}.png`}/>
        </>
    )

}

export default IndividualChampion