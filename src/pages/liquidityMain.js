import React, { useState } from 'react'
import { useEffect } from 'react'
import Header from '../header'
import './Trade.css'
import Warning from './Warning'
import "./swap.css"
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

export default function LiquidityMain() {
    const navigate=useNavigate()
    const activeButton={
      "color":"#1C0C5B",
      "backgroundColor": "#ffcc24"
    }
  const [SwapButton, setSwapButton]=useState("false")
  const [LiqSetting, setLiqSetting]=useState("none")
  const [LiqRecent, setLiqRecent]=useState("none")
  const [wrapper, setWrapper]= useState("none")
   const [theme, setTheme]=useState("dark")
    const nameTheme=Cookies.get()
  //  useEffect(()=>{
  //   if(!Cookies)return;
  //   // setTheme(nameTheme)
  //   console.log(nameTheme.theme)
  //  },[])

  // console.log(nameTheme.theme)

  const closePopup=()=>{
    setWrapper("none")
    setLiqRecent("none")
    setLiqSetting("none")
}

  const handleSwitch1=()=>{
     if(SwapButton==="true") return;
     setSwapButton("true")
     navigate("/Swap")
  }
  const handleSwitch2=()=>{
    if(SwapButton==="false") return;
     setSwapButton('false')
     navigate("/liquidity")
  }
  const handleSwitchLiq=()=>{
     navigate("/liquidity_add")
  }

  const handleRecent=()=>{
    setLiqRecent("flex")
    setWrapper("flex")
  }
  const handleSwapSetting=()=>{
   setLiqSetting("block")
   setWrapper("flex")
  }


// const audio=new Audio()

// audio.src='/images/money.wav'
// const handlePlay=()=>{
// audio.play()
// }
if(nameTheme.theme!=="dark" || nameTheme.theme==="bright"){
  // console.log("rice")
  var bgColor={
    // "backgroundColor":"rgb(230, 208, 181)",
    "backgroundColor":"white",
    color:"rgb(83, 83, 83)"
  }
   var boxObj={
    "color":"white",
    "boxShadow": "0 4px 0px #503b29",
      "border":"1px solid #f3ebe5",
      // "backgroundColor":"rgb(226, 194, 154)",
      "backgroundColor":"#f3ebe5",
        headText:{
          color:"rgba(53, 37, 0, 0.966)",
        },
        moreText:{
          color:"rgba(54, 38, 0, 0.966)",
        textShadow:"0 0 0 white",
        fontWeight:"bold"
        }
  }
}
else if(nameTheme.theme==="dark"){
      var bgColor={
        "backgroundColor":"",
        color:""
      }
    
       var boxObj={
          "color":"",
          "boxShadow": "",
            "border":"",
            "backgroundColor":"",
            headText:{
              color:"",
            },
            moreText:{
              color:"",
            }
      }

}


  return (
    <div>
        {/* <Warning/> */}
<header>
<Header/>
</header>
<div className='bodySec'style={bgColor}>
<div className='innerBodySec'>
    <div className='buttons' style={boxObj}>
    {SwapButton==="true"? <button onClick={handleSwitch1} className='btnSwap' style={activeButton}>Swap</button>:
        <button onClick={handleSwitch1} className='btnSwap'>Swap</button>
        }
    {SwapButton==="false"? <button onClick={handleSwitch2} className='btnLiquidity'style={activeButton}>Liquidity</button>:
    <button onClick={handleSwitch2} className='btnLiquidity'>Liquidity</button>
    }
    </div>
    {/* <img className='hidingEagle' src="/images/eagle1-removebg-preview.png"></img> */}
     <div className='swapSection'>
        <div className='liquidity' style={{"display":"flex"}}>
            <div className='mainSec' style={boxObj}>
            <div className='one'>
            <div className='exchange' style={boxObj.moreText}>
                <h3 style={boxObj.headText}>Liquidity</h3>
                <span>Add liquidity to receive LP tokens</span>
                <button onClick={handleSwitchLiq} className='addLiq'>Add Liquidity</button>
            </div>
    <div className='icons'>
        <i style={boxObj.headText} onClick={handleSwapSetting} class="fa fa-cog" aria-hidden="true"></i>
        <i style={boxObj.headText} onClick={handleRecent} class="fa fa-history" aria-hidden="true"></i>
    </div>
    </div>
    <div className='twoo'>
    <div className='first'>
        <span style={boxObj.moreText}>Your Liquidity</span>
        {/* <span style={boxObj.moreText}>Your Liquidity <i class="bi bi-question-circle"></i></span> */}
    </div>
        <div className='secondd'>
        <div className='valss'></div>
        <span style={{...boxObj.moreText,"fontSize":"17px"}}>Connect to a wallet to view your liquidity.</span>
        </div>
        <div className='moreFooter'>
        <span style={boxObj.moreText}>Don't see a pool you joined? <a href="" style={boxObj.headText}>Import it.</a></span>
        <span style={boxObj.moreText}>Or, if you staked your LP tokens in a farm, unstake them to see them here.</span>
        </div>
    </div>
    </div>
    </div>
    </div>



   {/* LIQUIDITY POPUPS */}
   {/* <div className='liquidityPopupSettings' style={{"display":"none"}}>
   <div className='first'>
       <span>Settings</span>
       <i class="bi bi-x"></i>
    </div>
    <div className='second'>
      <div className='innerSecond'>
      <span>Slippage Tolerance <i class="bi bi-question-circle"></i></span>
      <div className='val'>
        <div className='percentages'>
          <span>0.1%</span>
          <span>0.5%</span>
          <span>1%</span>
        </div>
        <div className='inputSec'>
          <input type="number" placeholder='5%'></input>
          <i class="bi bi-percent"></i>
        </div>
      </div>
      <p className='notice1'>
        Your transaction may be frontrun
      </p>
      <div className='transDeadline'>
        <span>Transaction Deadline <i class="bi bi-question-circle"></i></span>
        <div className='time'>
          <input type="number" placeholder='3'></input>
          <span>Minutes</span>
        </div>
        <p className='notice1'>
          Enter a valid deadline
        </p>
      </div>
      </div>
    </div>
</div>
<div className='liquidityRecentPopup'>
<div className='first'>
       <span>Recent transactions</span>
       <i class="bi bi-x"></i>
    </div>
    <div className='detailss'>
      <p className='err'>Please connect your wallet to view your recent 
      transactions</p>
      <button>Close</button>
    </div>
</div> */}



{/* new LiquidityPage adding liquiduty */}
  {/* <div className='addLiquidity' style={{"display":"none"}}>
     <div className='one'>
       <i class="bi bi-arrow-left-short"></i>
       <span>AddLiquidity <i class="bi bi-question-circle"></i></span>
     </div>
     <div className='two'>
     <div className='fromInput'>
      <span>Input</span>
      <div className='more'>
        <input type="number" placeholder='0.0'></input>
        <div>
        <div className='valuee'>
            <img src="images/BNB.png"></img>
            <span>BNB</span>
          </div>
            <i class="fa fa-angle-down" aria-hidden="true"></i>
        </div>
      </div>
    </div>
      <span className='plus'>+</span>
      <div className='fromInput'>
      <span>Input</span>
      <div className='more'>
        <input type="number" placeholder='0.0'></input>
        <div>
        <div className='valuee'>
            <img src="images/ETH.png"></img>
            <span>BNB</span>
          </div>
            <i class="fa fa-angle-down" aria-hidden="true"></i>
        </div>
      </div>
    </div>
     </div>
    <div className='pricesPoolShare'>
      <span>PRICES AND POOL SHARE</span>
      <div className='vals'>
         <div className='indivvv'>
            <span>0.0382171</span>
            <span>USDT per BABY</span>
         </div>
         <div className='indivvv'>
            <span>26.1663</span>
            <span>BABY per USDT</span>
         </div>
         <div className='indivvv'>
            <span>2.65%</span>
            <span>Share of Pool</span>
         </div>
      </div>
    </div>
    <button>Unlock Wallet</button>
  </div> */}
    </div>
    <div onClick={closePopup} className="popupSection" style={{"display":wrapper}}></div>
   <div className='swapPopupSettings' style={{...bgColor,"display":LiqSetting}}>
    <div className='first'>
       <span style={boxObj.headText}>Settings</span>
       <i style={boxObj.headText} onClick={closePopup} class="bi bi-x"></i>
    </div>
    <div className='second'>
      <div className='innerSecond'>
      <span style={boxObj.headText}>Slippage Tolerance <i class="bi bi-question-circle"></i></span>
      <div className='val'>
        <div className='percentages'>
          <span>0.1%</span>
          <span>0.5%</span>
          <span>1%</span>
        </div>
        <div className='inputSec'>
          <input type="number" placeholder='5%'></input>
          <i class="bi bi-percent"></i>
        </div>
      </div>
      <p className='notice1'>
        Your transaction may be frontrun
      </p>
      <div className='transDeadline'>
        <span style={boxObj.headText}>Transaction Deadline <i class="bi bi-question-circle"></i></span>
        <div className='time'>
          <input type="number" placeholder='3'></input>
          <span style={boxObj.headText}>Minutes</span>
        </div>
        <p className='notice1'>
          Enter a valid deadline
        </p>
      </div>
      </div>
    </div>
</div>
<div className='swapRecentPopup' style={{...bgColor,"display":LiqRecent}}>
    <div className='first'>
       <span style={boxObj.headText}>Recent transactions</span>
       <i style={boxObj.headText} onClick={closePopup} class="bi bi-x"></i>
    </div>
    <div className='detailss'>
      <p className='err' style={boxObj.headText}>Please connect your wallet to view your recent 
      transactions</p>
      <button  onClick={closePopup}>Close</button>
    </div>
</div>
<div className='swapChooseTokenPopup' style={{"display":"none"}}>
  <div className='inner'>
  <div className='first'>
       <span>Select a token <i class="bi bi-question-circle"></i></span>
       <i class="bi bi-x"></i>
    </div>
    <input type="text" placeholder='Search name or paste address'></input>
    <div className='commonBases'>
    <div className='first'>
       <span>Common bases <i class="bi bi-question-circle"></i></span>
       {/* <i class="bi bi-x"></i> */}
    </div>
    <div className='common'>
         <div className='indiv'>
            <img src=""></img>
            <span>BABY</span>
         </div>
         <div className='indiv'>
            <img src=""></img>
            <span>BABY</span>
         </div>
         <div className='indiv'>
            <img src=""></img>
            <span>BABY</span>
         </div>
         <div className='indiv'>
            <img src=""></img>
            <span>BABY</span>
         </div>
       </div>
       </div>
       <div className='tokenName'>
          <div className='first'>
              <span>Token name</span>
              <i class="bi bi-arrow-down"></i>
          </div>
          <div className='allTokens'>
            <div className='indiv'>
              <img src=""></img>
              <span>ETH <span className='small'>binance</span></span>
            </div>
            <div className='indiv'>
              <img src=""></img>
              <span>BNB <span className='small'>binance</span></span>
            </div>
            <div className='indiv'>
              <img src=""></img>
              <span>BABY <span className='small'>binance</span></span>
            </div>
            <div className='indiv'>
              <img src=""></img>
              <span>BNB <span className='small'>binance</span></span>
            </div>
            <div className='indiv'>
              <img src=""></img>
              <span>BABY <span className='small'>binance</span></span>
            </div>
            <div className='indiv'>
              <img src=""></img>
              <span>BNB <span className='small'>binance</span></span>
            </div>
            <div className='indiv'>
              <img src=""></img>
              <span>BABY <span className='small'>binance</span></span>
            </div>
            <div className='indiv'>
              <img src=""></img>
              <span>BNB <span className='small'>binance</span></span>
            </div>
            <div className='indiv'>
              <img src=""></img>
              <span>BABY <span className='small'>binance</span></span>
            </div>
            <div className='indiv'>
              <img src=""></img>
              <span>BNB <span className='small'>binance</span></span>
            </div>
            <div className='indiv'>
              <img src=""></img>
              <span>BABY <span className='small'>binance</span></span>
            </div>
          </div>
       </div>
  </div>
</div>
{/* unlockWallet */}
<div className='connectWallet' style={{"display":"none"}}>
<div className='first'>
       <span>Connect to a wallet</span>
       <i class="bi bi-x"></i>
</div>
<div className='indivWallets'>
    <a href='#'>
      <div className='indiv'>
        <span>Metamask</span>
        <img src=""></img>
      </div>
    </a>
    <a href='#'>
      <div className='indiv'>
        <span>Metamask</span>
        <img src=""></img>
      </div>
    </a>
    <a href='#'>
      <div className='indiv'>
        <span>Metamask</span>
        <img src=""></img>
      </div>
    </a>
    <a href='#'>
      <div className='indiv'>
        <span>Metamask</span>
        <img src=""></img>
      </div>
    </a>
    <a href='#'>
      <div className='indiv'>
        <span>Metamask</span>
        <img src=""></img>
      </div>
    </a>
    <a href='#'>
      <div className='indiv'>
        <span>Metamask</span>
        <img src=""></img>
      </div>
    </a>
    <a href='#'>
      <div className='indiv'>
        <span>Metamask</span>
        <img src=""></img>
      </div>
    </a>
    <a href='#'>
      <div className='indiv'>
        <span>Metamask</span>
        <img src=""></img>
      </div>
    </a>
    <a href='#'>
      <div className='indiv'>
        <span>Metamask</span>
        <img src=""></img>
      </div>
    </a>
      
</div>
</div>


    </div>
    </div>
  )
}
