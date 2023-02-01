require('dotenv').config();
let express = require('express')
let cors = require('cors')
const axios = require('axios')



var app = express()

app.use(cors())

const API_KEY = process.env.API_KEY
console.log(API_KEY)

function getPUUID(playerName){
    return axios.get('https://eun1.api.riotgames.com' + '/lol/summoner/v4/summoners/by-name/' + playerName + "?api_key=" + API_KEY)
    .then(response =>{
        console.log(response.data)
        return response.data.puuid
    }).catch(err => err)

}

app.get('/games', async (req,res) =>{
    const playerName = req.query.nickname
    const PUUID = await getPUUID(playerName)
    

    const API_CALL = "https://europe.api.riotgames.com" + "/lol/match/v5/matches/by-puuid/" + PUUID + '/ids' + '?api_key=' + API_KEY

    const gameIDs = await axios.get(API_CALL)
        .then(response => response.data)
        .catch(err=>err)
    const gameIDsArray = Object.keys(gameIDs).map(key => gameIDs[key])
    let matchDataArray =[]
    //Getting last 10 games
    for(var i=0;i<gameIDsArray.length -17; i++){
        const matchID = gameIDsArray[i]
        const matchData = await axios.get('https://europe.api.riotgames.com/lol/match/v5/matches/' + matchID + '?api_key=' + API_KEY)
            .then(response => response.data)
            .catch(err => err)
        matchDataArray.push(matchData)
    }
    
    res.json(matchDataArray)
})
app.get('/summonerInfo', async(req,res)=>{
    const playerName = req.query.nickname
    let summonerInfo = {}
    const summonerData = await axios.get('https://eun1.api.riotgames.com' + '/lol/summoner/v4/summoners/by-name/' + playerName + "?api_key=" + API_KEY)
    .then(response => {
        summonerInfo.summoner = response.data;
        return response.data.id;
    })
    .catch(err=>err)

    const leagueData = await axios.get('https://eun1.api.riotgames.com/lol/league/v4/entries/by-summoner/'+ summonerData +'?api_key='+ API_KEY)
    .then(response => {
        summonerInfo.queue = response.data;
    })
    .catch(err=>err)

    res.send(summonerInfo)
})

app.listen(4000, ()=> console.log('server on port 4000'))
 