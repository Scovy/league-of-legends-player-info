require('dotenv').config();
let express = require('express')
let cors = require('cors')
const axios = require('axios')
var app = express()
app.use(cors())

const API_KEY = process.env.API_KEY
console.log(API_KEY)

function getPUUID(playerName, route){
    return axios.get('https://'+ route + '/lol/summoner/v4/summoners/by-name/' + playerName + "?api_key=" + API_KEY)
    .then(response =>{
        console.log('Route inside getiPUUID', route)
        console.log(response.data)
        return response.data.puuid
    }).catch(err => err)

}
console.log()
app.get('/games', async (req,res) =>{
    const route = require('./routingValues.json')
    const playerName = req.query.nickname
    const region = req.query.region
    const PUUID = await getPUUID(playerName, route[region].PLATFORM_ROUTE)
    const API_CALL = "https://"+ route[region].REGIONAL_ROUTE + "/lol/match/v5/matches/by-puuid/" + PUUID + '/ids' + '?api_key=' + API_KEY
    console.log(region)
    const gameIDs = await axios.get(API_CALL)
        .then(response => response.data)
        .catch(err=>err)
    const gameIDsArray = Object.keys(gameIDs).map(key => gameIDs[key])
    let matchDataArray =[]
    //Getting last 10 games
    for(var i=0;i<gameIDsArray.length -10; i++){
        const matchID = gameIDsArray[i]
        const matchData = await axios.get('https://'+ route[region].REGIONAL_ROUTE +'/lol/match/v5/matches/' + matchID + '?api_key=' + API_KEY)
            .then(response => response.data)
            .catch(err => err)
        matchDataArray.push(matchData)
    }
    
    res.json(matchDataArray)
})
app.get('/summonerInfo', async(req,res)=>{
    const route = require('./routingValues.json')
    const playerName = req.query.nickname
    const region = req.query.region
    let summonerInfo = {}
    const summonerData = await axios.get('https://'+ route[region].PLATFORM_ROUTE + '/lol/summoner/v4/summoners/by-name/' + playerName + "?api_key=" + API_KEY)
    .then(response => {
        summonerInfo.summoner = response.data;
        return response.data.id;
    })
    .catch(err=>err)

    const leagueData = await axios.get('https://'+ route[region].PLATFORM_ROUTE +'/lol/league/v4/entries/by-summoner/'+ summonerData +'?api_key='+ API_KEY)
    .then(response => {
        summonerInfo.queue = response.data;
    })
    .catch(err=>err)

    res.send(summonerInfo)
})

app.listen(4003, ()=> console.log('server on port 4002'))
 