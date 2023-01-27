import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import SummonerData from "./components/SummonerData";
import MatchHistory from "./components/MatchHistory";
import RankedSideBar from "./components/RankedSideBar";
import { Route, Routes, Link } from "react-router-dom";


function App() {
  const [playerName, setPlayerName] = useState("");
  const [matchList, setMatchList] = useState([{}]);
  const [summonerData, setSummonerData] = useState([]);

  localStorage.setItem("playerName", playerName);
  localStorage.setItem("matchList", JSON.stringify(matchList));
  localStorage.setItem("summonerData", JSON.stringify(summonerData));

  useEffect(() => {
    playerSearch();
  }, [playerName]);

  const playerSearch = async () => {
    try {
      const summonerResponse = await axios.get(
        "http://localhost:4000/summonerInfo",
        { params: { nickname: playerName } }
      );
      setSummonerData(summonerResponse.data);

      const matchResponse = await axios.get(
        "http://localhost:4000/games",
        { params: { nickname: playerName } }
      );
      setMatchList(matchResponse.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(summonerData)
console.log(summonerData.length)
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="container">
            <img className="emoteImg" src={require("./emote.png")}></img>
            <div className="searchBar">
              <TextField
                variant="standard"
                className="searchbox"
                type="text"
                placeholder="Enter your Summoner Name"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
              ></TextField>
              <Button
                component={Link}
                to="/info"
                variant="contained"
                position="center"
                className="search-player-button"
              >
                Search
              </Button>
            </div>
          </div>
        }
      />
      
      
        
       
      <Route
            path="/info"
            element={<>
            {Object.keys(summonerData).length > 0 && <SummonerData summonerInfo={summonerData.summoner}/> }
            {Object.keys(summonerData).length > 0 && <RankedSideBar queueInfo={summonerData.queue}/>}
            {matchList.length > 0 && <MatchHistory matchData={matchList} /> }
            </>}
          />

        
    </Routes>
  );
}

export default App