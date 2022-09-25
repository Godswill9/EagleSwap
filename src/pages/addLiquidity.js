import React, { useState } from 'react'
import { useEffect } from 'react'
import Header from '../header'
import './Trade.css'
import Warning from './Warning'
import "./swap.css"
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

export default function AddLiquidity() {
    const navigate=useNavigate()
    const [ConnectWallet, setConnectWallet]=useState("none")
    const [ChooseToken, setChooseToken]=useState("none")
    const [ChooseToken2, setChooseToken2]=useState("none")
    const [wrapper, setWrapper]= useState("none")
    const[selectedSwap, setSelectedSwap]=useState({
      img:"images/BTC.png",
      name:"BTC" 
   }) 
   const audio=new Audio()
   const nameTheme=Cookies.get()
    const theme=nameTheme.theme
  
   const[selectedSwap2, setSelectedSwap2]=useState({
      img:"images/ETH.png",
      name:"ETH"
   })
    
    const closePopup=()=>{
        setWrapper("none")
        setChooseToken("none")
        setChooseToken2("none")
        setConnectWallet("none")
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
    audio.src='/images/money.wav'

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
            display:"flex",
            headText:{
              color:"rgba(53, 37, 0, 0.966)",
              textShadow:"0 0 0 white"
            },
            moreText:{
              color:"rgba(54, 38, 0, 0.966)",
            textShadow:"0 0 0 white"
            },
            moreTextWhite:{
              color:"white",
            textShadow:"0 0 1px white"
            }, 
            button:{
              backgroundColor:"#ff8e24e1",
              color:"white"
            } 
            // button:{
            //   backgroundColor:"rgb(192, 135, 30)",
            //   color:"white"
            // } 
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
            display:"flex",
            headText:{
              color:"",
            },
            button:{
              backgroundColor:"",
              color:""
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
<div className='buttons' style={{"visibility":"hidden"}}>
    </div>
         <div className='addLiquidity' style={boxObj}>
     <div className='one'>
       <i onClick={()=> navigate("/liquidity")} style={{...boxObj.headText,"cursor":"pointer"}} class="bi bi-arrow-left-short"></i>
       <span style={boxObj.headText}>AddLiquidity <i style={boxObj.headText} class="bi bi-question-circle"></i></span>
     </div>
     <div className='two'>
     <div className='fromInput'>
      <span style={boxObj.headText}>Input</span>
      <div className='more'>
        <input type="number" placeholder='0.0'></input>
        <div className="heyy">
        <div className='valuee' onClick={handleChooseToken}>
        <img src={selectedSwap.img}></img>
            <span>{selectedSwap.name}</span>
          </div>
            <i class="fa fa-angle-down" aria-hidden="true"></i>
        </div>
      </div>
    </div>
      <span style={boxObj.headText} className='plus'>+</span>
      <div className='fromInput'>
      <span style={boxObj.headText}>Input</span>
      <div className='more'>
        <input type="number" placeholder='0.0'></input>
        <div className="heyy">
        <div className='valuee' onClick={handleChooseToken2}>
        <img src={selectedSwap2.img}></img>
            <span>{selectedSwap2.name}</span>
          </div>
            <i class="fa fa-angle-down" aria-hidden="true"></i>
        </div>
      </div>
    </div>
     </div>
    <div className='pricesPoolShare'>
      <span style={boxObj.headText}>PRICES AND POOL SHARE</span>
      <div className='vals'>
         <div className='indivvv'>
            <span style={{...boxObj.moreTextWhite,fontWeight:"bold"}}>0.0382171</span>
            <span style={{...boxObj.moreTextWhite,fontWeight:"bold"}}>USDT per EAGLE</span>
         </div>
         <div className='indivvv'>
            <span style={{...boxObj.moreTextWhite,fontWeight:"bold"}}>26.1663</span>
            <span style={{...boxObj.moreTextWhite,fontWeight:"bold"}}>EAGLE per USDT</span>
         </div>
         <div className='indivvv'>
            <span style={{...boxObj.moreTextWhite,fontWeight:"bold"}}>2.65%</span>
            <span style={{...boxObj.moreTextWhite,fontWeight:"bold"}}>Share of Pool</span>
         </div>
      </div>
    </div>
    <button style={boxObj.button} onClick={handleConnectWallet}>Unlock Wallet</button>
  </div>

    </div>
    
  <div onClick={closePopup} className="popupSection" style={{"display":wrapper}}></div>
  <div className='swapChooseTokenPopup' style={{...bgColor,"display":ChooseToken}}>
  <div className='inner'>
  <div className='first'>
       <span style={boxObj.headText}>Select a token <i class="bi bi-question-circle"></i></span>
       <i style={boxObj.headText} onClick={closePopup} class="bi bi-x"></i>
    </div>
    <input style={{color: boxObj.color}} type="text" placeholder='Search name or paste address'></input>
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

  <div className='swapChooseTokenPopup' style={{...bgColor,"display":ChooseToken2}}>
  <div className='inner'>
  <div className='first'>
       <span style={boxObj.headText}>Select a token <i class="bi bi-question-circle"></i></span>
       <i style={boxObj.headText} onClick={closePopup} class="bi bi-x"></i>
    </div>
    <input  style={{color:boxObj.color}} type="text" placeholder='Search name or paste address'></input>
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
var commonBases=[

]
var commonBases2=[

]