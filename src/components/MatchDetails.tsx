function MatchDetails(props: {
  matchData: any[];
  partIndex: number;
  matchIndex: number;
}) {
  const match = props.matchData;
  const matchIndex = props.matchIndex;
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
  const itemPlaceholderWin = <div className="w-4 h-4 bg-item-win shrink-0"></div>
  const itemPlaceholderLoss = <div className="w-4 h-4 bg-item-loss shrink-0"></div>
  const itemCDNUrl = 'https://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/'
  const championAvatarCDNUrl = 'https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/'

  return (
    <div>
      <div className="bg-gray flex-col">
         {playerTeam[0].win ? <p>Win</p> : <p>Loss</p> }
        <section className={`team1 ${playerTeam[0].win ? 'bg-history-card-win' : 'bg-history-card-loss'} rounded-md`}>
          {playerTeam.map((player: any) => {
            return (<div className="p-2">
              <div className="flex">
                <div className="flex w-1/3">
                <img
                  className="h-8 w-8 rounded-md"
                  src={
                    championAvatarCDNUrl +
                    (player.championName === 'FiddleSticks' ? 'Fiddlesticks' : player.championName) +
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
                <div className="flex justify-evenly w-2/3">
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
                <div className="flex flex-col gap-2  ">
                    <div className="flex gap-1">
                    {[player.item0, player.item1, player.item2,  player.item6].map((item) => (           
                      item === 0 ? (player.win ? itemPlaceholderWin : itemPlaceholderLoss)  :
                        <img className="w-4 h-4" alt="Item" key={item} src={itemCDNUrl + item + '.png'} />
                      ))}
                    </div>
                    <div className="flex gap-1">
                    {[player.item3, player.item4, player.item5].map((item) => (  
                      item === 0 ? (player.win ? itemPlaceholderWin : itemPlaceholderLoss)  :
                        <img className="w-4 h-4" alt="Item" key={item} src={itemCDNUrl + item + '.png'} />
                      ))}
                    </div>
                </div>
              </div>
              </div>
            );
          })}
        </section>
        {enemyTeam[0].win ? <p>Win</p> : <p>Loss</p> }

        <section className={`team1 ${enemyTeam[0].win ? 'bg-history-card-win' : 'bg-history-card-loss'} rounded-md`}>
          {enemyTeam.map((player: any) => {
            return (<div className="p-2">
            <div className="flex">
              <div className="flex w-1/3">
              <img
                className="h-8 w-8 rounded-md"
                src={
                  championAvatarCDNUrl +
                  (player.championName === 'FiddleSticks' ? 'Fiddlesticks' : player.championName) +
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
              <div className="flex justify-evenly w-2/3">
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
              <div className="flex flex-col gap-2  ">
                    <div className="flex gap-1">
                    {[player.item0, player.item1, player.item2,  player.item6].map((item) => (           
                      item === 0 ? (player.win ? itemPlaceholderWin : itemPlaceholderLoss)  :
                        <img className="w-4 h-4" alt="Item" key={item} src={itemCDNUrl + item + '.png'} />
                      ))}
                    </div>
                    <div className="flex gap-1">
                    {[player.item3, player.item4, player.item5].map((item) => (  
                      item === 0 ? (player.win ? itemPlaceholderWin : itemPlaceholderLoss)  :
                        <img className="w-4 h-4" alt="Item" key={item} src={itemCDNUrl + item + '.png'} />
                      ))}
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
