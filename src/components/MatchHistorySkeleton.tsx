import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function MatchHistorySkeleton() {
    const elements = []
    for (var i = 0; i < 10; i++) {
        elements.push(
            <>
              <SkeletonTheme baseColor="#1F2937" highlightColor="#374151" duration={3}>
        
                <div className="h-28 flex flex-row bg-slate-800 mt-2 p-2 rounded-md">
                    <div className="flex flex-col justify-center">
                    <Skeleton width={30} count={2}></Skeleton>
                    </div>
                    <div className="pl-5">
                        <Skeleton width={80} height={80}></Skeleton>
                    </div>
                    <div className="pl-5">
                        <Skeleton count={4} width={40}/>
                    </div>
                <div className="flex flex-col justify-center p-5 m-2">
                    <div className="flex flex-row ml-3">
                    <Skeleton width={30} height={30}/>
                    <Skeleton width={30} height={30}/>
                    <Skeleton width={30} height={30}/>
                    <Skeleton width={30} height={30}/>
                    <Skeleton width={30} height={30}/>
                    </div>
                    <div className="flex flex-row ml-3">
                    <Skeleton width={30} height={30}/>
                    <Skeleton width={30} height={30}/>
                    <Skeleton width={30} height={30}/>
                    <Skeleton width={30} height={30}/>
                    
                    </div>
                </div>
                </div>
        
              </SkeletonTheme>
            </>
            )
            }
  return (
    <div>
        {elements.map(element => element)}
    </div>
  )
  
  ;
}
export default MatchHistorySkeleton;
