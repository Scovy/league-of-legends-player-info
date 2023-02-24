import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import SummonerData from "./components/SummonerData";
import MatchHistory from "./components/MatchHistory";
import RankedSideBar from "./components/RankedSideBar";
import { Route, Routes, useNavigate } from "react-router-dom";
import Details from "./components/Details/Details";
import ChampionList from "./components/ChampionList";

function App() {
  const [playerName, setPlayerName] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (event: any) => {
    event.preventDefault();
    navigate(`/info/${playerName}`);
  };
  const handlePlayerSubmit = async (player: string) => {
    navigate(`/info/${player}`);
  }
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="container bg-primary-bg mx-auto">
            <img className="emoteImg" src={require("./emote.png")} alt=""></img>
            <div className="searchBar">
              <form onSubmit={handleSubmit} className="flex items-center">
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>

                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text"
                    required
                    placeholder="Enter Summoner Name"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                  ></input>
                </div>

                <button
                  type="submit"
                  className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </form>
            </div>
          </div>
        }
      />

      <Route
        path='/info/:playerName'
        element={
          <>
            <Navbar onSubmit={handlePlayerSubmit} />
            <Details></Details>
          </>
        }
      />
      <Route
      path='/champions'
      element= {
        <>
        <Navbar onSubmit={handlePlayerSubmit}/>
        <ChampionList/>
        </>
    
    }
      />
    </Routes>
  );
}

export default App;
