import { Box } from "@mui/material";
import "./styles/SummonerData.css";
function SummonerData({ summonerInfo }) {
  const profileIcon =
    "https://ddragon.leagueoflegends.com/cdn/12.12.1/img/profileicon/" +
    summonerInfo.profileIconId +
    ".png";

  console.log(summonerInfo);
  return (
    <>
      <div className="flex justify-center">

        <Box className="profileInfo mb-6 ">
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
export default SummonerData;
