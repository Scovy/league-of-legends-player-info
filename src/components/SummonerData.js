import { Box, Grid, Typography, Card } from "@mui/material";
import "./styles/SummonerData.css";
function SummonerData({ summonerInfo }) {
  const profileIcon =
    "https://ddragon.leagueoflegends.com/cdn/12.12.1/img/profileicon/" +
    summonerInfo.profileIconId +
    ".png";

  console.log(summonerInfo);
  return (
    <>

        <Box className="profileInfo">
          <img
            className="profileIcon"
            src={profileIcon}
            alt="Profile Icon"
          ></img>
          <Typography className="profileLevel" lineHeight={1.6} fontSize={12}>
            {summonerInfo.summonerLevel}
          </Typography>
        </Box>
        <Typography
          className="profileName"
          fontWeight={"bold"}
          fontSize="1.2em"
        >
          {summonerInfo.name}
        </Typography>


    </>
  );
}
export default SummonerData;
