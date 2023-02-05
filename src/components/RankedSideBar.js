import {Card} from "@mui/material"
//import "./styles/RankedSideBar.css"
// {queueInfo[0].tier} : {queueInfo[0].leaguePoints}
//Wins :{queueInfo[0].wins} Losses : {queueInfo[0].losses}
function RankedSideBar({queueInfo}){


  return(
    <div className="rankedCard_wrapper flex flex-col w-1/2  h-32 bg-secondary-bg rounded-sm mr-2" >

            <div className="">
              <div className="text-white font-bold p-2">Ranked Solo</div>
            </div>
            <div className="queueInfoDisplay text-white justify-between flex flex-nowrap flex-row items-center mt-2">
                <img src="https://static.bigbrain.gg/assets/lol/s12_rank_icons/gold.png" className="rankImage w-20 h-20"></img>
                <div>
                  <p className="font-bold">Gold 2</p>
                  <p>37 LP</p>
                </div>
                <div className="winRatio text-right">
                  <p>12W 11L</p>
                  <p>52% Win Rate</p>
                </div>
            </div>

    </div>
  )


}

export default RankedSideBar