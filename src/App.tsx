import "./App.css";
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Details from "./components/Details/Details";
import ChampionList from "./components/championdetails/ChampionList";
import IndividualChampion from "./components/championdetails/IndividualChampion";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

function App() {
  const [playerName, setPlayerName] = useState("");
  const [toggled, isToggled] = useState(false);
  const [region, setRegion] = useState();
  const navigate = useNavigate();
  const handleSubmit = (event: any) => {
    event.preventDefault();
    navigate(`/info/${playerName}`);
  };
  const handlePlayerSubmit = async (player: string) => {
    navigate(`/info/${player}`);
  };
  const handleChange = (e: any) => {
    setRegion(e.target.value);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="container bg-primary-bg mx-auto text-white">
            <img className="emoteImg" src={require("./emote.png")} alt=""></img>
            <div className="searchBar">
              <form onSubmit={handleSubmit}>
                <div className="flex">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={region}
                      label="Age"
                      onChange={handleChange}
                    >
                      <MenuItem value={'eun1'}>EUNE</MenuItem>
                      <MenuItem value={'euw'}>EUW</MenuItem>
                      <MenuItem value={'na'}>NA</MenuItem>
                    </Select>
                  </FormControl>
                  <div className="relative w-full">
                    <TextField
                      sx={{ input: { color: 'white' } }}
                      id="outlined-controlled"
                      label="Controlled"
                      value={playerName}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setPlayerName(event.target.value);
                      }}
                    />
                    <button
                      type="submit"
                      className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                      </svg>
                      <span className="sr-only">Search</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        }
      />

      <Route
        path="/info/:playerName"
        element={
          <>
            <Navbar onSubmit={handlePlayerSubmit} />
            <Details region={region}></Details>
          </>
        }
      />
      <Route
        path="/champions/"
        element={
          <>
            <Navbar onSubmit={handlePlayerSubmit} />
            <ChampionList />
          </>
        }
      />
      <Route
        path="/champions/:championName"
        element={
          <>
            <Navbar onSubmit={handlePlayerSubmit} />
            <IndividualChampion />
          </>
        }
      />
    </Routes>
  );
}

export default App;
