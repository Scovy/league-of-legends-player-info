let express = require('express')
let cors = require('cors')
const axios = require('axios')
const { PlaceTwoTone } = require('@mui/icons-material')
const { response } = require('express')


var app = express()

app.use(cors())

const API_KEY = 'RGAPI-d0e490fb-5e11-47e4-87dd-b206891715ab'

function getPUUID(playerName){
    return axios.get('https://eun1.api.riotgames.com' + '/lol/summoner/v4/summoners/by-name/' + playerName + "?api_key=" + API_KEY)
    .then(response =>{
        console.log(response.data)
        return response.data.puuid
    }).catch(err => err)
}
app.get('/games', async (req,res) =>{
    const playerName = 'Fr4ggz'
    const PUUID = await getPUUID(playerName)
    const API_CALL = "https://europe.api.riotgames.com" + "/lol/match/v5/matches/by-puuid/" + PUUID + '/ids' + '?api_key=' + API_KEY

    const gameIDs = await axios.get(API_CALL)
        .then(response => response.data)
        .catch(err=>err)
    const gameIDsArray = Object.keys(gameIDs).map(key => gameIDs[key])
    console.log(gameIDsArray)
    console.log(typeof(gameIDsArray))
    let matchDataArray =[]

    for(var i=0;i<gameIDsArray.length -15; i++){
        const matchID = gameIDsArray[i]
        const matchData = await axios.get('https://europe.api.riotgames.com/lol/match/v5/matches/' + matchID + '?api_key=' + API_KEY)
            .then(response => response.data)
            .catch(err => err)
        matchDataArray.push(matchData)
    }
    
    res.json(matchDataArray)
})

app.listen(4000, ()=> console.log('server started on port 4000'))
 