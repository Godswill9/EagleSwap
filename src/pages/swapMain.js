import React, { useState } from 'react'
import { useEffect } from 'react'
import Header from '../header'
import './Trade.css'
import Warning from './Warning'
import "./swap.css"
// import SwapMain from './swapMain'
import LiquidityMain from './liquidityMain'
import { HashRouter, Route, Routes, useNavigate } from 'react-router-dom'

export default function SwapMain() {
 const[selectedSwap, setSelectedSwap]=useState({
    img:"images/BTC.png",
    name:"BTC"
 })

 const[selectedSwap2, setSelectedSwap2]=useState({
    img:"images/ETH.png",
    name:"ETH" 
 })
  useEffect(()=>{
    // console.log(selectedSwap)
  })

    const navigate=useNavigate()
    const activeButton={
      "color":"#1C0C5B",
      "backgroundColor": "#ffcc24"
    }
    const [SwapButton, setSwapButton]=useState("true")
  
    // const [swapPage, setSwapPage]=useState("none")
    // const [LiqPage, setLiqPage]=useState("none")
    const [LiqPage2, setLiqPage2]=useState("none")
  
  //just inputing the values is what remains
    const [swapSetting, setSwapSetting]=useState("none")
    const [swapRecent, setSwapRecent]=useState("none")
    const [ConnectWallet, setConnectWallet]=useState("none")
    const [ChooseToken, setChooseToken]=useState("none")
    const [ChooseToken2, setChooseToken2]=useState("none")
    const [wrapper, setWrapper]= useState("none")
  
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
  
    const handleRecent=()=>{
        setSwapRecent("flex")
        setWrapper("flex")
      }
      const handleSwapSetting=()=>{
       setSwapSetting("block")
       setWrapper("flex")
      }
      const closePopup=()=>{
        setWrapper("none")
        setChooseToken("none")
        setChooseToken2("none")
        setConnectWallet("none")
        setSwapRecent("none")
        setSwapSetting("none")
    }

    const handleConnectWallet=()=>{
       setConnectWallet("flex")
       setWrapper("flex")
    }
    const handleChooseToken=()=>{
       setChooseToken("flex")
       setWrapper("flex")
    }
    const handleChooseToken2=()=>{
       setChooseToken2("flex")
       setWrapper("flex")
    }
    
    const audio=new Audio()

audio.src='/images/money.wav'
const handlePlay=()=>{
audio.play();
setSelectedSwap(selectedSwap2)
setSelectedSwap2(selectedSwap)
}

  return (
    <div>
          <Warning/>
<header>
<Header/>
</header>
        <div className='bodySec'>
        <div className='innerBodySec'>
<div className='buttons'>
{SwapButton==="true"? <button onClick={handleSwitch1} className='btnSwap' style={activeButton}>Swap</button>:
    <button onClick={handleSwitch1} className='btnSwap'>Swap</button>
    }
{SwapButton==="false"? <button onClick={handleSwitch2} className='btnLiquidity'style={activeButton}>Liquidity</button>:
<button onClick={handleSwitch2} className='btnLiquidity'>Liquidity</button>
}
</div>
<img className='hidingEagle' src="/images/eagle1-removebg-preview.png"></img>
<div className='swapSection'>
<p className='para1'>You can trade over <span>90%</span> of BEP 20 Tokens on BabySwap with better slippages,<br></br> 
and Smart Router will choose the <span>best route</span> for you.
</p>
<div className='box'>
<div className='first'>
    <h3>Trade Mining Reward:</h3>
    <h3>0.0000 BABY</h3>
</div>
<button>Withdraw</button>
</div> 
<div className='mainSec'style={{"display":"flex"}}>
<div className='one'>
  <div className='exchange'>
      <h3>Exchange</h3>
      <span>Trade tokens in an instant</span>
  </div>
  <div className='icons'>
    <i onClick={handleSwapSetting} class="fa fa-cog" aria-hidden="true"></i>
    <i onClick={handleRecent} class="fa fa-history" aria-hidden="true"></i>
  </div>
</div>
<div className='two'>
    <div className='fromInput'>
      <span>From</span>
      <div className='more'>
        <input type="number" placeholder='0.0'></input>
        <div onClick={handleChooseToken} className="heyy">
        <div className='valuee'>
            <img src={selectedSwap.img}></img>
            <span>{selectedSwap.name}</span>
          </div>
            <i class="fa fa-angle-down" aria-hidden="true"></i>
        </div>
      </div>
    </div>
    <div className='icon'>
      <button onClick={handlePlay}><i style={{"fontSize":"16px"}} class="bi bi-arrow-down-up"></i></button>
    </div>
    <div className='toInput'>
    <span>To</span>
      <div className='more'>
        <input type="number" placeholder='0.0'></input>
        <div onClick={handleChooseToken2} className="heyy">
          <div className='typee'>
          <img src={selectedSwap2.img}></img>
            <span>{selectedSwap2.name}</span>
          </div>
            <i class="fa fa-angle-down" aria-hidden="true"></i>
        </div>
      </div>
    </div>
    <div className='summary'>
        <div className='first'>
        <div>Price</div>
        <div className='valuee'>
            <div><span className='amt'>0.0447824 USDT</span> per BABY</div>
            <i style={{"fontSize":"14px"}} class="bi bi-arrow-left-right"></i>
        </div>
        </div>
        <div className='second'>
          <div>Slippage Tolerance</div>
          <div>0.1%</div>
        </div>
    </div>
    <button onClick={handleConnectWallet}>Unlock Wallet</button>
</div>
</div>
</div>

<div onClick={closePopup} className="popupSection" style={{"display":wrapper}}></div>

{/* settingsPopup */}
<div className='swapPopupSettings' style={{"display":swapSetting}}>
    <div className='first'>
       <span>Settings</span>
       <i onClick={closePopup} class="bi bi-x"></i>
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

{/* swapRecent popup */}
<div className='swapRecentPopup' style={{"display":swapRecent}}>
    <div className='first'>
       <span>Recent transactions</span>
       <i onClick={closePopup} class="bi bi-x"></i>
    </div>
    <div className='detailss'>
      <p className='err'>Please connect your wallet to view your recent 
      transactions</p>
      <button onClick={closePopup}>Close</button>
    </div>
</div>

{/* chooseToken */}
<div className='swapChooseTokenPopup' style={{"display":ChooseToken}}>
  <div className='inner'>
  <div className='first'>
       <span>Select a token <i class="bi bi-question-circle"></i></span>
       <i onClick={closePopup} class="bi bi-x"></i>
    </div>
    <input type="text" placeholder='Search name or paste address'></input>
    <div className='commonBases'>
    <div className='first'>
       <span>Common bases <i class="bi bi-question-circle"></i></span>
       {/* <i class="bi bi-x"></i> */}
    </div>
    <div className='common'>
         <div className='indiv'>
            <img src="images/BTC.png"></img>
            <span>BABY</span>
         </div>
         <div className='indiv'>
            <img src="images/ETH.png"></img>
            <span>BABY</span>
         </div>
         <div className='indiv'>
            <img src="images/BNB.png"></img>
            <span>BABY</span>
         </div>
         <div className='indiv'>
            <img src="images/BTC.png"></img>
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
            {tokens.map((item, i)=>{
              return(
                <div className='indiv' key={i} onClick={(e)=>{
                  setSelectedSwap({
                    img:item.img,
                    name:item.name
                  })
                  audio.play();
                  closePopup()
                }}>
                <img src={item.img}></img>
                <span>{item.name} <span className='small'>{item.smallTitle}</span></span>
              </div>
              )
            })}
          </div>
       </div>
  </div>
</div>

{/* chooseToken2 */}
<div className='swapChooseTokenPopup' style={{"display":ChooseToken2}}>
  <div className='inner'>
  <div className='first'>
       <span>Select a token <i class="bi bi-question-circle"></i></span>
       <i onClick={closePopup} class="bi bi-x"></i>
    </div>
    <input type="text" placeholder='Search name or paste address'></input>
    <div className='commonBases'>
    <div className='first'>
       <span>Common bases <i class="bi bi-question-circle"></i></span>
       {/* <i class="bi bi-x"></i> */}
    </div>
    <div className='common'>
         <div className='indiv'>
            <img src="images/BTC.png"></img>
            <span>BABY</span>
         </div>
         <div className='indiv'>
            <img src="images/ETH.png"></img>
            <span>BABY</span>
         </div>
         <div className='indiv'>
            <img src="images/BNB.png"></img>
            <span>BABY</span>
         </div>
         <div className='indiv'>
            <img src="images/BTC.png"></img>
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
            {tokens2.map((item, i)=>{
              return(
                <div className='indiv' key={i} onClick={(e)=>{
                  setSelectedSwap2({
                    img:item.img,
                    name:item.name
                  })
                  audio.play();
                  closePopup()
                }}>
                <img src={item.img}></img>
                <span>{item.name} <span className='small'>{item.smallTitle}</span></span>
              </div>
              )
            })}
          </div>
       </div>
  </div>
</div>
{/* unlockWallet */}
<div className='connectWallet' style={{"display":ConnectWallet}}>
<div className='first'>
       <span>Connect to a wallet</span>
       <i onClick={closePopup} class="bi bi-x"></i>
</div>
<div className='indivWallets'>
    <a href='#'>
      <div className='indiv'>
        <span>Metamask</span>
        <img src="images/metaMask.png"></img>
      </div>
    </a>
    <a href='#'>
      <div className='indiv'>
        <span>Metamask</span>
        <img src="images/metaMask.png"></img>
      </div>
    </a>
    <a href='#'>
      <div className='indiv'>
        <span>Coin Base</span>
        <img src="images/coinBase.png"></img>
      </div>
    </a>
    <a href='#'>
      <div className='indiv'>
        <span>Coin Base</span>
        <img src="images/coinBase.png"></img>
      </div>
    </a>
    <a href='#'>
      <div className='indiv'>
        <span>Coin Base</span>
        <img src="images/coinBase.png"></img>
      </div>
    </a>
    <a href='#'>
      <div className='indiv'>
        <span>Metamask</span>
        <img src="images/metaMask.png"></img>
      </div>
    </a>
    <a href='#'>
      <div className='indiv'>
        <span>Coin Base</span>
        <img src="images/coinBase.png"></img>
      </div>
    </a>
    <a href='#'>
      <div className='indiv'>
        <span>Metamask</span>
        <img src="images/metaMask.png"></img>
      </div>
    </a>
    <a href='#'>
      <div className='indiv'>
        <span>Metamask</span>
        <img src="images/metaMask.png"></img>
      </div>
    </a>
      
</div>
</div>
    </div>
    </div>
    </div>
  )
}


var tokens=[
  {
    name:"BNB",
    img:"images/BTC.png",
    smallTitle:"binance"
  },
  {
    name:"ETH",
    img:"images/BNB.png",
    smallTitle:"binance"
  },
  {
    name:"BTC",
    img:"images/ETH.png",
    smallTitle:"binance"
  },
  {
    name:"BNB",
    img:"images/BTC.png",
    smallTitle:"binance"
  },
]
var tokens2=[
  {
    name:"BNB",
    img:"images/BTC.png",
    smallTitle:"binance"
  },
  {
    name:"ETH",
    img:"images/BNB.png",
    smallTitle:"binance"
  },
  {
    name:"BTC",
    img:"images/ETH.png",
    smallTitle:"binance"
  },
  {
    name:"BNB",
    img:"images/BTC.png",
    smallTitle:"binance"
  },
  {
    name:"Mars",
    img:"images/BNB.png",
    smallTitle:"binance"
  },
  {
    name:"Doge",
    img:"images/ETH.png",
    smallTitle:"binance"
  },
  {
    name:"CryptoTree",
    img:"images/BTC.png",
    smallTitle:"binance"
  },
]