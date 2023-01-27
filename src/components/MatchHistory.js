import './styles/MatchHistory.css'
import { Grid, Paper, Typography } from '@mui/material'
function MatchHistory({ matchData }) {


  const matchDataArray = matchData
  console.log(matchData)
  return (
    <Grid container spacing={3} className="matchhistory--wrapper">
      {matchDataArray.map((match, index)=>
       <Grid item xs={12}>
       <Paper style={{width: '50%'}}>  {/*add width here*/}
         <Typography variant="h5">Game {index + 1}</Typography>
         <Grid container >
           <Grid item xs={6}>
             {match.info.participants.slice(0, 5).map((data, participantIndex)=>
               <Typography><img alt='Champion Avatar' className='championAvatar' src={'https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/' + data.championName + '.png'}/> 
               {data.summonerName} - {data.championName} </Typography>
             )}
           </Grid>
           <Grid item xs={6}>
             {match.info.participants.slice(5).map((data, participantIndex)=>
               <Typography><img alt='Champion Avatar' className='championAvatar' src={'https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/' + data.championName + '.png'}/> 
               {data.summonerName} - {data.championName} </Typography>
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