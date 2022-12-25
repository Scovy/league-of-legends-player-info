const express = require('express')
const cors = require('cors')
const axios = require('axios')
const { response } = require('express')


const playerName = 'Fr4ggz'
const API_SERVER_ROUTE = 'https://eun1.api.riotgames.com'
const API_REGION_ROUTE = 'europe.api.riotgames.com'
const API_ROUTE_BY_NAME = '/lol/summoner/v4/summoners/by-name/'
const API_KEY = 'RGAPI-3b85a22a-2c28-4fd2-a4f2-07a63e18c6a0'



const app = express()
app.use(cors())

function playerPUUID(playerName){
    return axios.get(API_SERVER_ROUTE + API_ROUTE_BY_NAME + playerName + '?api_key=' + API_KEY)
        .then(response => {
            console.log(response.data)
            return response.data.puuid
        })
}

app.get('/lastGames', async(req, res)=>{
    console.log(playerName)
    const PUUID = await playerPUUID(playerName)
    const API_MATCH_HISTORY = API_REGION_ROUTE + "/lol/match/v5/matches/by-puuid/" + PUUID + "/ids?api_key=" +API_KEY
    const gameIDs = await axios.get(API_MATCH_HISTORY)
        .then(response => response.data)
        .catch(err => err)
    var matchArr = []
    for(let i=0 ; i < gameIDs.length -15; i++){
        const matchID = gameIDs[i];
        const matchData = await axios.get(API_REGION_ROUTE + " /lol/match/v5/matches/" + matchID + '?api_key=' + API_KEY)
        matchArr.push(matchData)
    }
    res.json(matchID)
})



app.listen(8000, () => console.log('Server started at port 8000'))