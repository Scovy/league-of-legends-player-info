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

        <Box className="profileInfo mb-6 ">
          <img
            className="profileIcon"
            src={profileIcon}
            alt="Profile Icon"
          ></img>
          <h1 className="profileLevel">
            {summonerInfo.summonerLevel}
          </h1>
        </Box>
        <Typography
          className="profileName text-center"
          fontWeight={"bold"}
          fontSize="1.2em"
        >
          {summonerInfo.name}
        </Typography>


    </>
  );
}
export default SummonerData;
