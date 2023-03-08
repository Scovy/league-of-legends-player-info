import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Details from "./components/Details/Details";
import ChampionList from "./components/championdetails/ChampionList";
import IndividualChampion from "./components/championdetails/IndividualChampion";

import SearchBar from "./components/SearchBar";

function App() {


  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="container bg-primary-bg mx-auto text-white">
            <img className="emoteImg" src={require("./emote.png")} alt=""></img>
            <div className="searchBar">
              <SearchBar/>
            </div>
          </div>
          
        }
      />

      <Route
        path="/info/:region/:playerName"
        element={
          <>
            <Navbar/>
            <Details/>
          </>
        }
      />
      <Route
        path="/champions/"
        element={
          <>
            <Navbar/>
            <ChampionList/>
          </>
        }
      />
      <Route
        path="/champions/:championName"
        element={
          <>
            <Navbar/>
            <IndividualChampion />
          </>
        }
      />
    </Routes>
  );
}

export default App;