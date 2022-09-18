import Home from "./pages/home";
import {BrowserRouter, Routes, Route, useParams, HashRouter} from "react-router-dom"
import NFT_Market from "./pages/NFT_Market";
import SwapMain from "./pages/swapMain";
import LiquidityMain from "./pages/liquidityMain";
import AddLiquidity from "./pages/addLiquidity";
import PoolsEarnBaby from "./pages/poolsEarnBaby";
import PoolsEarnAlt from "./pages/poolsAlt";
import FarmsEarnBABY from "./pages/farmsEarnBABY";
import FarmsEarnAlt from "./pages/farmsEarnALT";



function App() {
  const params=useParams()
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
            <Route path={`/`} element={<Home/>}/>
            <Route path={`/Farms_earnBABY`} element={<FarmsEarnBABY/>}/>
            <Route path={`/Farms_earnALT`} element={<FarmsEarnAlt/>}/>
            <Route path={`/Pools_earnBaby`} element={<PoolsEarnBaby/>}/>
            <Route path={`/Pools_earnAlt`} element={<PoolsEarnAlt/>}/>
            <Route path='/Swap' element={<SwapMain/>}></Route>
          <Route path='/liquidity' element={ <LiquidityMain/>}></Route>
          <Route path='/liquidity_add' element={ <AddLiquidity/>}></Route>
            {/* <Route path={`/Farms/:Alt`} element={<FarmsAlt/>}/> */}
            {/* <Route path={`/Pools/:Baby`} element={<Pools/>}/>
            <Route path={`/Pools/:Alt`} element={<PoolsAlt/>}/> */}
            <Route path={`/NFT`} element={<NFT_Market/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
