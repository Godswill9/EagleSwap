import Home from "./pages/home";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import TradeLiquidity from "./pages/TradeLiquidity";
import TradeSwap from "./pages/TradeSwap";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
            <Route path={`/`} element={<Home/>}/>
            <Route path={`/Liquidity`} element={<TradeLiquidity/>}/>
            <Route path={`/Swap`} element={<TradeSwap/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
