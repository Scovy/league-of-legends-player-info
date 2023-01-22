import * as React from 'react';
import rankImages from './rankImages.json'
import {Card, CardActions, CardContent, CardMedia, Button, Typography, Grid, TextField, Container, Box} from '@mui/material'
//import { makeStyles, createTheme } from '@mui/styles';
//import { borderColor } from '@mui/system';
import styles from './/styles/SummonerCard.css';
import MatchHistory from './MatchHistory';
export default function SummonerCard(props){




const profileIcon = "https://ddragon.leagueoflegends.com/cdn/12.12.1/img/profileicon/" + props.summonerInfo.profileIconId +".png"

let tier = props.tier
let rankIcon = rankImages[tier]

console.log(props.summonerInfo , '<= summonerInfo prop passed from App.js')




    return(
      <Container className="container" fixed maxWidth='md' minWidth='xs'>

        <Grid container spacing={3}  paddingTop={10}>
          <Grid className="profileInfo__wrapper" container xs={12} alignContent="center" >
            <Box className="profileInfo">
              <img className="profileIcon" src={profileIcon} alt='Profile Icon'></img>
              <Typography  className="profileLevel" lineHeight={1.2} fontSize={12}>{props.summonerInfo.summonerLevel}</Typography>
            </Box>
            <Typography className="profileName" fontWeight={'bold'}>{props.summonerInfo.name}</Typography>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={4}>
              <div className='rankedCard'>This is the first container</div>
              <div className='rankedCard'>This is the first container</div>
          </Grid>
            <Grid item xs={8}>
              <div >
                <Grid item xs={6}>
                  <div className='matchHistoryCard'>Div 1</div>
            </Grid>
            <Grid item xs={6}>
                  <div>Div 2</div>
            </Grid>
            <Grid item xs={6}>
                  <div>Div 3</div>
            </Grid>
            <Grid item xs={6}>
                  <div>Div 4</div>
            </Grid>
              </div>
            </Grid>
          </Grid>
          <h1></h1>

        </Grid>
        
          <MatchHistory/>




      </Container>



    )
}
