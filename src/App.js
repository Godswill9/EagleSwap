import Home from "./pages/home";
import {BrowserRouter, Routes, Route, useParams} from "react-router-dom"
import NFT_Market from "./pages/NFT_Market";
import SwapMain from "./pages/swapMain";
import LiquidityMain from "./pages/liquidityMain";
import AddLiquidity from "./pages/addLiquidity";
import PoolsEarnEAGLE from "./pages/poolsEarnEAGLE";
import PoolsEarnAlt from "./pages/poolsAlt";
import FarmsEarnEAGLE from "./pages/farmsEarnEAGLE";
import FarmsEarnAlt from "./pages/farmsEarnALT";



function App() {
  const params=useParams()
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
            <Route path={`/`} element={<Home/>}/>
            <Route path={`/Farms_earnEAGLE`} element={<FarmsEarnEAGLE/>}/>
            <Route path={`/Farms_earnALT`} element={<FarmsEarnAlt/>}/>
            <Route path={`/Pools_earnEAGLE`} element={<PoolsEarnEAGLE/>}/>
            <Route path={`/Pools_earnAlt`} element={<PoolsEarnAlt/>}/>
            <Route path='/Swap' element={<SwapMain/>}></Route>
            <Route path='/liquidity' element={ <LiquidityMain/>}></Route>
            <Route path='/liquidity_add' element={ <AddLiquidity/>}></Route>
            <Route path={`/NFT`} element={<NFT_Market/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
