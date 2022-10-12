import * as React from 'react';
import rankImages from './rankImages.json'
import {Card, CardActions, CardContent, CardMedia, Button, Typography, Grid} from '@mui/material'
import { positions } from '@mui/system';
export default function SummonerCard(props){



const profileIcon = "https://ddragon.leagueoflegends.com/cdn/12.12.1/img/profileicon/" + props.summonerInfo.profileIconId +".png"

let tier = props.tier
let rankIcon = rankImages[tier]


    return(

        <Card sx={{ maxWidth: 600 } } justify="center">
        <CardMedia
          component="img"
          height="300"
          width="300"
          image={profileIcon}
          alt="green iguana"
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div" align="center">
            {props.summonerInfo.name}
          </Typography>
          <Typography gutterBottom variant="h6" component='div' align='center'>Player Solo Queue Statistics</Typography>

          <Grid container direction='row'>
          <Grid container spacing='2' direction="row"
          justifyContent="left"
          alignItems="left">
            
            <Grid item >
              <CardMedia
              sx={{ width: 128, height: 128 }}
              image={rankIcon}
              >              </CardMedia>
            </Grid>
            </Grid>
            <Grid container direction='column' justifyContent='right' alignItems="right">
              <Grid item>
                {props.tier} {props.rank}  {props.leaguePoints} LP
                
            </Grid>
            <Grid item>
            <Grid item>
              Losses:{props.losses} | Wins:{props.wins}
              
            </Grid>
            </Grid>
           
            </Grid>


            </Grid>



        </CardContent>
      </Card>
    )
}
