function MatchDetails(props: {
  matchData: any[];
  partIndex: number;
  matchIndex: number;
}) {


  const match = props.matchData;
  return (
    <div>
      <div>
        {match[props.matchIndex].info.participants.map((player: any) => {
          return (
            <p>
              {player.summonerName} - {player.kills} / {player.deaths} /{" "}
              {player.assists}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default MatchDetails;
