import * as React from 'react';
import rankImages from './rankImages.json'
import {Card, CardActions, CardContent, CardMedia, Button, Typography, Grid, TextField, Container, Box} from '@mui/material'
import { makeStyles } from '@mui/styles';
import { borderColor } from '@mui/system';
import styles from './/styles/SummonerCard.css';
export default function SummonerCard(props){



const profileIcon = "https://ddragon.leagueoflegends.com/cdn/12.12.1/img/profileicon/" + props.summonerInfo.profileIconId +".png"

let tier = props.tier
let rankIcon = rankImages[tier]

console.log(rankIcon)




    return(
      <Container className="container" fixed maxWidth='md' minWidth='xs'>

        <Grid container spacing={2} paddingTop={15}>
          <Grid className="playerName" container xs={12} alignContent="center" >
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
              <img className="profileIcon" src={profileIcon} alt='Profile Icon'></img>
            </Box>
              

          </Grid>



        </Grid>
        





      </Container>



    )
}
