import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import MatchHistory from "../MatchHistory";
import MatchHistorySkeleton from "../MatchHistorySkeleton";
import SummonerData from "../SummonerData";

function Details() {
  const [matchList, setMatchList] = useState([]);
  const [summonerData, setSummonerData] = useState({} as any);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const { playerName } = useParams();

  const [loadedUser, setLoadedUser] = useState(playerName);


  useEffect(() => {
    const loadData = async () => {
      if (isLoaded && loadedUser === playerName) return;
      setIsLoading(true);
      try {
        Promise.all(
          [
            axios.get(
              "http://localhost:4002/summonerInfo",
              { params: { nickname: playerName } }
            ),
            axios.get("http://localhost:4002/games", {
              params: { nickname: playerName },
            })
          ]
        )
          .then(
            ([summoner, match]) => {
              setSummonerData(summoner.data);
              setMatchList(match.data);
              setIsLoaded(true);
              setLoadedUser(playerName);
            }
          )
          .then(
            () => (setIsLoading(false), console.log('finished'))
          )
      } catch (error) {
        return Promise.reject(error)
      }
    }

    loadData()
      .catch((e) => console.error(e))
  }, [playerName, isLoading, isLoaded, loadedUser])

  let content;

  if (isLoading) {
    content =
      <div className="flex content-center justify-center w-2/3 mx-auto">
          <MatchHistorySkeleton/>
      </div>

  } else if (!isLoading && isLoaded) {
    content =
      <div className="flex flex-row justify-center mx-auto mt-3 gap-x-6">
        <div>
          {Object.keys(summonerData).length > 0 && (
            <SummonerData summonerInfo={summonerData.summoner} />
          )}
        </div>

        {
          Object.keys(summonerData).length === 0 && <p className="text-white">Nie znaleziono zadnych wynikow</p>
        }

        {
          Object.keys(summonerData).length > 0 && matchList.length === 0 && <p className="text-white">Znaleziono przywolywacza, ktory nie posiada zadnych meczy</p>
        }

        {
          summonerData && matchList.length > 0 &&
          <div className="flex flex-col">
            {Object.keys(matchList).length > 0 ? <MatchHistory matchData={matchList} playerName={playerName || 'Nieznany gracz'} /> : <p>Brak wynikow</p>}
          </div>
        }
      </div>
  } else if (!isLoading && matchList.length === 0) {
    content = <div className="flex content-center justify-center">
      <p>Nie znaleziono zadnych wynikow</p>
    </div>
  }

  return (<div className="min-h-screen pt-20">{content}</div>);

}

export default Details;