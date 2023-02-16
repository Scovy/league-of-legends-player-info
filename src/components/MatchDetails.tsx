function MatchDetails(props: {
  matchData: any[];
  partIndex: number;
  matchIndex: number;
}) {
  const match = props.matchData;
  const matchIndex = props.matchIndex;
  const partIndex = props.partIndex;
  let team1;
  let team2;

  if (props.partIndex <= 4) {
    team1 = match[matchIndex].info.participants.slice(0, 5);
  } else {
    team2 = match[matchIndex].info.participants.slice(5);
  }
  const playerTeam = team1 || team2;
  const enemyTeam = match[matchIndex].info.participants.filter(
    (p: any) => !playerTeam.includes(p)
  );

  console.log("PartIndex", partIndex);
  console.log("PlayerTeam", playerTeam);
  console.log("enemyTeam", enemyTeam);

  return (
    <div>
      <div className="bg-gray flex-col">
         {playerTeam[0].win ? <p>Win</p> : <p>Loss</p> }
        <section className="team1 bg-blue-700 rounded-md">
          {playerTeam.map((player: any) => {
            return (<div>
              <div className="flex">
                <div className="flex w-1/3">
                <img
                  className="h-8 w-8 rounded-md"
                  src={
                    "https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/" +
                    player.championName +
                    ".png"
                  }
                  alt="Img"
                />
                    <div>
                        <div className="h-4 w-4 bg-red-600"></div>
                        <div className="h-4 w-4 bg-yellow-600"></div>
                    </div>
                
                    <div>
                        <p className="text-sm">{player.summonerName}</p> 
                    </div>
                </div>
                <div className="flex justify-evenly t">
                    <div>
                        <p>{player.kills} / {player.deaths} / {player.assists}</p>
                        <p>{Math.round((player.kills + player.assists) / player.deaths*100)/100}</p>
                    </div>
                    <div className="pl-2 flex text-sm">
                        <p className="pl-1">{player.totalDamageDealtToChampions}</p>
                        <p className="pl-1">{(player.goldEarned / 1000).toFixed(1)}K</p>
                        <p className="pl-1">{player.totalMinionsKilled + player.neutralMinionsKilled}</p>
                        <p className="pl-1">{player.wardsPlaced}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2 items-end ">
                    <div className="flex gap-1">
                        <img className="w-4 h-4" alt="sprite" src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/${player.item0}.png`}/>
                        <img className="w-4 h-4" alt="sprite" src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/${player.item1}.png`}/>
                        <img className="w-4 h-4" alt="sprite" src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/${player.item3}.png`}/>
                        <img className="w-4 h-4" alt="sprite" src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/${player.item6}.png`}/>

                    </div>
                    <div className="flex gap-1">
                    <img className="w-4 h-4" alt="sprite" src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/${player.item4}.png`}/>
                    <img className="w-4 h-4" alt="sprite" src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/${player.item5}.png`}/>
                    <img className="w-4 h-4" alt="sprite" src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/${player.item6}.png`}/>
                    </div>
                </div>
              </div>
              </div>
            );
          })}
        </section>
        {enemyTeam[0].win ? <p>Win</p> : <p>Loss</p> }

        <section className="team1 bg-red-700 rounded-md mt-2">
          {enemyTeam.map((player: any) => {
            return (<div>
              <div className="flex">
                <div className="flex w-1/3">
                <img
                  className="h-8 w-8 rounded-md"
                  src={
                    "https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/" +
                    player.championName +
                    ".png"
                  }
                  alt="Img"
                />
                    <div>
                        <div className="h-4 w-4 bg-red-600"></div>
                        <div className="h-4 w-4 bg-yellow-600"></div>
                    </div>
                
                    <div>
                        <p className="text-sm">{player.summonerName}</p> 
                    </div>
                </div>
                <div className="flex justify-evenly t">
                    <div>
                        <p>{player.kills} / {player.deaths} / {player.assists}</p>
                        <p>{Math.round((player.kills + player.assists) / player.deaths*100)/100}</p>
                    </div>
                    <div className="pl-2 flex text-sm">
                        <p className="pl-1">{player.totalDamageDealtToChampions}</p>
                        <p className="pl-1">{(player.goldEarned / 1000).toFixed(1)}K</p>
                        <p className="pl-1">{player.totalMinionsKilled + player.neutralMinionsKilled}</p>
                        <p className="pl-1">{player.wardsPlaced}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2 items-end ">
                    <div className="flex gap-1">
                        <img className="w-4 h-4" alt="sprite" src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/${player.item0}.png`}/>
                        <img className="w-4 h-4" alt="sprite" src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/${player.item1}.png`}/>
                        <img className="w-4 h-4" alt="sprite" src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/${player.item3}.png`}/>
                        <img className="w-4 h-4" alt="sprite" src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/${player.item6}.png`}/>

                    </div>
                    <div className="flex gap-1">
                    <img className="w-4 h-4" alt="sprite" src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/${player.item4}.png`}/>
                    <img className="w-4 h-4" alt="sprite" src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/${player.item5}.png`}/>
                    <img className="w-4 h-4" alt="sprite" src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/${player.item6}.png`}/>
                    </div>
                </div>
              </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default MatchDetails;
