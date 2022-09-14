import Home from "./pages/home";
import {BrowserRouter, Routes, Route, useParams} from "react-router-dom"
// import TradeLiquidity from "./pages/TradeLiquidity";
import TradeSwap from "./pages/TradeSwap";
import NFT_Market from "./pages/NFT_Market";
import Farms from "./pages/farms";
import Pools from "./pages/pools";



function App() {
  const params=useParams()
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
            <Route path={`/`} element={<Home/>}/>
            {/* <Route path={`/Liquidity`} element={<TradeLiquidity/>}/> */}
            <Route path={`/Swap`} element={<TradeSwap/>}/>
            <Route path={`/Farms`} element={<Farms/>}/>
            <Route path={`/Pools`} element={<Pools/>}/>
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
