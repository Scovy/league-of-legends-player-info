import { Box } from "@mui/material";
import "./styles/SummonerData.css";
function SummonerData(element: {summonerInfo: any}) {


  const profileIcon =
    "https://ddragon.leagueoflegends.com/cdn/13.4.1/img/profileicon/" +
    element.summonerInfo.profileIconId +
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
            {element.summonerInfo.summonerLevel}
          </h1>
        </Box>
        </div>
        <h2
          className=" text-slate-400 font-bold ">
          {element.summonerInfo.name}
        </h2>


    </>
  );
  
}
export default SummonerData;
