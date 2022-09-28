import React, { useState } from 'react'
import { useEffect } from 'react'
import Header from '../header'
import './Trade.css'
import Warning from './Warning'
import "./swap.css"
// import SwapMain from './swapMain'
import LiquidityMain from './liquidityMain'
import { HashRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Theme from '../theme'
import Cookies from 'js-cookie'

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
    const nameTheme=Cookies.get()
    const theme=nameTheme.theme
  
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
if(nameTheme.theme!=="dark" || nameTheme.theme==="bright"){
        // console.log("rice")
        var bgColor={
          // "backgroundColor":"rgb(230, 208, 181)",
          "backgroundColor":"white",
          color:"rgb(83, 83, 83)"
        }
        var button={
          backgroundColor:"#ff8e24e1",
          color:"white"
        }
        var mainText={
          color:"#503b29",
          boxShadow:"0 0 0 white"
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
                main:{
                  color:"rgba(189, 132, 0, 0.966)",
                  textShadow:"0 0 0 white"
                }
              }
        }
      }
      else if(nameTheme.theme==="dark"){
        var bgColor={
          "backgroundColor":"",
          color:""
        }
        var button={
          backgroundColor:"",
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
                main:{
                  color:"",
                }
              }
        }
    
      }

  return (
    <div>
          {/* <Warning/> */}
<header>
<Header/>
</header>
        <div className='bodySec' style={bgColor}>
        <div className='innerBodySec'>
<div className='buttons' style={boxObj}>
{SwapButton==="true"? <button onClick={handleSwitch1} className='btnSwap' style={activeButton}>Swap</button>:
    <button onClick={handleSwitch1} className='btnSwap'>Swap</button>
    }
{SwapButton==="false"? <button onClick={handleSwitch2} className='btnLiquidity'style={activeButton}>Liquidity</button>:
<button onClick={handleSwitch2} className='btnLiquidity'>Liquidity</button>
}
</div>
{/* <img className='hidingEagle' src="/images/newLogo-removebg-preview.png"></img> */}
<img className='hidingEagle' src="/images/eagle1-removebg-preview.png"></img>
<div className='swapSection'>

<p className='para1' style={boxObj.headText}>You can trade over <span>90%</span> of BRC 20 Tokens on EAGLE Protocol with better slippages,<br></br> 
and Smart Router will choose the <span>best route</span> for you.
</p>
<div className='box'>
<div className='first'>
    <h3 style={{fontWeight:"bold"}}>Trade Mining Reward: </h3>
    <h3 style={{fontWeight:"bold"}}>0.0000 EAGLE</h3>
</div>
<button>Withdraw</button>
</div> 
<div className='mainSec' style={boxObj}> 
<div className='one'>
  <div className='exchange'>
      <h3 style={boxObj.headText}>Exchange</h3>
      <span>Trade tokens in an instant</span>
  </div>
  <div className='icons'>
    <i style={boxObj.headText} onClick={handleSwapSetting} class="fa fa-cog" aria-hidden="true"></i>
    <i style={boxObj.headText} onClick={handleRecent} class="fa fa-history" aria-hidden="true"></i>
  </div>
</div>
<div className='two'>
    <div className='fromInput'>
      <span style={mainText}>From</span>
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
    <span style={mainText}>To</span>
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
    <div className='summary' style={boxObj.moreText}>
        <div className='first'>
        <div style={{"fontSize":"15px"}}>Price</div>
        <div className='valuee'>
            <div style={{"fontSize":"14px"}}><span className='amt' style={{...boxObj.moreText.main,"fontSize":"16px"}}>0.0447824 USDT</span> per EAGLE</div>
            <i style={{"fontSize":"14px"}} class="bi bi-arrow-left-right"></i>
        </div>
        </div>
        <div className='second'>
          <div style={{"fontSize":"15px"}}>Slippage Tolerance</div>
          <div style={{"fontSize":"15px"}}>0.1%</div>
        </div>
    </div>
    <button style={button} onClick={handleConnectWallet}>Unlock Wallet</button>
</div> 
</div>
</div>
    </div>
    <div onClick={closePopup} className="popupSection" style={{"display":wrapper}}></div>

{/* settingsPopup */}
<div className='swapPopupSettings' style={{...bgColor,"display":swapSetting}}>
    <div className='first'>
       <span style={boxObj.headText}>Settings</span>
       <i style={boxObj.headText} onClick={closePopup} class="bi bi-x"></i>
    </div>
    <div className='second'>
      <div className='innerSecond'>
      <span style={boxObj.headText}>Slippage Tolerance <i class="bi bi-question-circle"></i></span>
      <div className='val'>
        <div className='percentages'>
          <span style={{"color":""}}>0.1%</span>
          <span style={{"color":""}}>0.5%</span>
          <span style={{"color":""}}>1%</span>
        </div>
        <div className='inputSec'>
          <input type="number" placeholder='5%'></input>
          <i style={boxObj.headText} class="bi bi-percent"></i>
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

{/* swapRecent popup */}
<div className='swapRecentPopup' style={{...bgColor,"display":swapRecent}}>
    <div className='first'>
       <span style={boxObj.headText}>Recent transactions</span>
       <i style={boxObj.headText} onClick={closePopup} class="bi bi-x"></i>
    </div>
    <div className='detailss'>
      <p className='err' style={boxObj.headText}>Please connect your wallet to view your recent 
      transactions</p>
      <button onClick={closePopup}>Close</button>
    </div>
</div>

{/* chooseToken */}
<div className='swapChooseTokenPopup' style={{...bgColor,"display":ChooseToken}}>
  <div className='inner'>
  <div className='first'>
       <span style={boxObj.headText}>Select a token <i class="bi bi-question-circle"></i></span>
       <i style={boxObj.headText} onClick={closePopup} class="bi bi-x"></i>
    </div>
    <input style={{background:boxObj.backgroundColor}} type="text" placeholder='Search name or paste address'></input>
    <div className='commonBases'>
    <div className='first'>
       <span style={boxObj.headText}>Common bases <i class="bi bi-question-circle"></i></span>
       {/* <i class="bi bi-x"></i> */}
    </div>
    <div className='common'>
    {commonBases.map((item, i)=>{
        if(!item)return;
        return(
          <div className='indiv'onClick={(e)=>{
            setSelectedSwap({
              img:item.img,
              name:item.name
            })
            audio.play();
            closePopup()
          }}>
          <img src={item.img}></img>
          <span style={{color: boxObj.color}}>{item.name}</span>
       </div>
        )
      })}
       </div>
       </div>
       <div className='tokenName'>
          <div className='first'>
              <span style={boxObj.headText}>Token name</span>
              <i class="bi bi-arrow-down"></i>
          </div>
          <div className='allTokens'>
            {tokens.map((item, i)=>{
              return(
                <div className='indiv' key={i} onClick={(e)=>{
                  var selectt={
                    img:item.img,
                    name:item.name
                  }
                  if(commonBases.includes(selectt))return;
                  commonBases.push(selectt)
                  if(commonBases.length>=5){
                    commonBases.shift()
                    // commonBases.push(selectt)
                  }
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
<div className='swapChooseTokenPopup' style={{...bgColor,"display":ChooseToken2}}>
  <div className='inner'>
  <div className='first'>
       <span style={boxObj.headText}>Select a token <i class="bi bi-question-circle"></i></span>
       <i style={boxObj.headText} onClick={closePopup} class="bi bi-x"></i>
    </div>
    <input style={{background:boxObj.backgroundColor}} type="text" placeholder='Search name or paste address'></input>
    <div className='commonBases'>
    <div className='first'>
       <span style={boxObj.headText}>Common bases <i class="bi bi-question-circle"></i></span>
       {/* <i class="bi bi-x"></i> */}
    </div>
    <div className='common'>
      {commonBases2.map((item, i)=>{
        if(!item)return;
        return(
          <div className='indiv' onClick={(e)=>{
            setSelectedSwap2({
              img:item.img,
              name:item.name
            })
            audio.play();
            closePopup()
          }}>
          <img src={item.img}></img>
          <span  style={{color:boxObj.color}}>{item.name}</span>
       </div>
        )
      })}
       </div>
       </div>
       <div className='tokenName'>
          <div className='first'>
              <span style={boxObj.headText}>Token name</span>
              <i class="bi bi-arrow-down"></i>
          </div>
          <div className='allTokens'>
            {tokens2.map((item, i)=>{
              return(
                <div className='indiv' key={i} onClick={(e)=>{
                  var selectt={
                    img:item.img,
                    name:item.name
                  }
                    commonBases2.push(selectt)
                    if(commonBases2.length>=5){
                      commonBases2.shift()
                      // commonBases.push(selectt)
                    }
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
{wallets.map((item, i)=>{
     return(
      <a href={item.link}>
      <div className='indiv' style={{ boxShadow:"none"}}>
        <span >{item.name}</span>
        <img src={item.img}></img>
      </div>
    </a>
     )
   })}
      
</div>
</div>
    </div>
    </div>
  )
}


var tokens=[
  {
    name:"BNB",
    img:"images/BNB.png",
    smallTitle:"binance"
  },
  {
    name:"ETH",
    img:"images/ETH.png",
    smallTitle:"binance"
  },
  {
    name:"BTC",
    img:"images/BTC.png",
    smallTitle:"binance"
  },
  {
    name:"EAGLE",
    img:"/images/eagle1-removebg-preview.png",
    smallTitle:"binance"
  },
]
var tokens2=[
  {
    name:"BNB",
    img:"images/BNB.png",
    smallTitle:"binance"
  },
  {
    name:"ETH",
    img:"images/ETH.png",
    smallTitle:"binance"
  },
  {
    name:"BTC",
    img:"images/BTC.png",
    smallTitle:"binance"
  },
  {
    name:"EAGLE",
    img:"/images/eagle1-removebg-preview.png",
    smallTitle:"binance"
  },
  {
    name:"BRISE",
    img:"/images/brise.jpg",
    smallTitle:"brise"
  },
]

var wallets=[
  {
    name:"Metamask",
    link:"#",
    img:"/images/metaMask.png",
},
{
    name:"Coinbase",
    link:"#",
    img:"/images/coinBase.png",
},
{
    name:"Trustwallet",
    link:"#",
    img:"/images/trustWallet-removebg-preview.png",
},
{
    name:"BNB Connect",
    link:"#",
    img:"/images/bnbConnect-removebg-preview.png",
},
{
    name:"SafePal",
    link:"#",
    img:"/images/safepal-removebg-preview.png",
},
{
    name:"walletConnect",
    link:"#",
    img:"/images/walletConnect-removebg-preview.png",
},
]

var commonBases=[

]
var commonBases2=[

]