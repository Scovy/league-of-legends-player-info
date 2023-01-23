import './styles/MatchHistory.css'
import { Grid, Paper, Typography } from '@mui/material'
function MatchHistory({ matchData }) {
  const matchDataArray = matchData
  console.log(matchData)
  return (
    <Grid container spacing={3}>
      {matchDataArray.map((match, index)=>
        <Grid item xs={12}>
          <Paper>
            <Typography variant="h5">Game {index + 1}</Typography>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                {match.info.participants.slice(0, 5).map((data, participantIndex)=>
                  <Typography>Player {participantIndex + 1}: {data.summonerName} - {data.championName} <img alt='Champion Avatar' className='championAvatar' src={'https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/' + data.championName + '.png'}/></Typography>
                )}
              </Grid>
              <Grid item xs={6}>
                {match.info.participants.slice(5).map((data, participantIndex)=>
                  <Typography>Player {participantIndex + 1}: {data.summonerName} - {data.championName} <img alt='Champion Avatar' className='championAvatar' src={'https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/' + data.championName + '.png'}/></Typography>
                )}
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      )}
    </Grid>
  );
}

export default MatchHistory;