import {Card} from "@mui/material"
import "./styles/RankedSideBar.css"
// {queueInfo[0].tier} : {queueInfo[0].leaguePoints}
//Wins :{queueInfo[0].wins} Losses : {queueInfo[0].losses}
function RankedSideBar({queueInfo}){
    console.log("hehehehe", queueInfo)

  return(
    <Card className="rankedCard_wrapper" style={{backgroundColor: "red"}}>

            <div className="">
              <div className='bluebar'></div>
              <div className="queueType">Ranked Solo</div>
            </div>
            <div className="queueInfoDisplay">
                <img src="https://static.bigbrain.gg/assets/lol/s12_rank_icons/gold.png" className="rankImage"></img>
                <div>
                  <p>Gold 2</p>
                  <p>37 LP</p>
                </div>
                <div className="winRatio">
                  <p>12W 11L</p>
                  <p>52% Win Rate</p>
                </div>
            </div>

    </Card>
  )


}

export default RankedSideBar