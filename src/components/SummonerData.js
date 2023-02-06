import { Box } from "@mui/material";
import "./styles/SummonerData.css";
function SummonerData() {
  const summonerInfoStorage = JSON.parse(window.localStorage.getItem('data'))
  const summonerInfo = summonerInfoStorage.summoner
  console.log(summonerInfo)

  if(Object.keys(JSON.parse(window.localStorage.getItem('data'))).length > 0){
  const profileIcon =
    "https://ddragon.leagueoflegends.com/cdn/12.12.1/img/profileicon/" +
    summonerInfo.profileIconId +
    ".png";
  return (
    <>
      <div className="flex justify-center">

        <Box className="profileInfo mb-6">
          <img
            className="profileIcon"
            src={profileIcon}
            alt="Profile Icon"
          ></img>
          <h1 className="profileLevel text-white text-sm pl-0.5 pr-0.5">
            {summonerInfo.summonerLevel}
          </h1>
        </Box>
        </div>
        <h2
          className=" text-slate-400 font-bold ">
          {summonerInfo.name}
        </h2>


    </>
  );
  }
}
export default SummonerData;
