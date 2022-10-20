import * as React from 'react';
import rankImages from './rankImages.json'
import {Card, CardActions, CardContent, CardMedia, Button, Typography, Grid} from '@mui/material'
import { makeStyles } from '@mui/styles';
import { borderColor } from '@mui/system';
export default function SummonerCard(props){



const profileIcon = "https://ddragon.leagueoflegends.com/cdn/12.12.1/img/profileicon/" + props.summonerInfo.profileIconId +".png"

let tier = props.tier
let rankIcon = rankImages[tier]

const useStyles = makeStyles({
  cardStyle: {
    backgroundColor:"#1E5F74",
    borderRadius:50,
    margin:"auto"
  },
  containerStyle:{
    top:50,
    left:50,
    
    background:'#133B5C',
    color:'white',
    borderRadius:50,
    borderStyle: 'solid',
    borderWidth: 1
  },
  tier:{
    paddingLeft:5,
    justifyContent:'center',
    lineHeight:5,
    textAlign:'left',
    color:'white',
  }

})
const classes = useStyles()

    return(
      <Grid container sx={{maxWidth:500}} backgroundColor="#251B37" borderRadius={50} className={classes.containerStyle} alignItems='center'>

        <Grid item xs="auto">
          
          <CardMedia
          image={rankIcon}
          sx={{width:100, height:100}}
          className={classes.cardStyle}           /*Rank Image*/
          />
        </Grid>
        <Grid item sx={4} className={classes.tier}>
          <Typography variant='h5' fontWeight={500} >
              GOLD 4 
          </Typography>
          <Typography variant='h6'>45Lp</Typography>
        </Grid>
        <Grid item sx={6} textAlign='right' flex='1' paddingRight={5} >
          <Typography variant='h6'>
            156W 152P
          </Typography>
          <Typography variant='h6'>
            Win ratio 51%
          </Typography>
        </Grid>


        
      </Grid>

    )
}
