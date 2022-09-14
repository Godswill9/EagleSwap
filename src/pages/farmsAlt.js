import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import "./test.css"


export default function FarmsAlt({displayMode1, displayMode2}) {
               const[show, setShow]=useState("none")
                    // const toggleDetails=()=>{
                    //    if(show==="none") setShow("flex");
                    //    else if(show==="flex") setShow("none")
                    // }

                    const [answer, setAnswer]=useState(null)
                    const toggle=(i)=>{
                    if(answer == i){
                        return setAnswer(null)
                    }
                    setAnswer(i)
                    }

  return (
    <div className='sectionn4'>
            <div className='inner' style={{"display":displayMode1}}>
                   {farmsArr.map((item, i)=>{
                      return(
                // <div className='block'>
                    <div className='indiv' key={i}>
                        <div className='one'>
                            <img src={item.img}></img>
                            <div className='oneInner'>
                                <h3>{item.coin}</h3>
                                <span>{item.ups}</span>
                            </div>
                        </div>
                        <div className='two'>
                            <span>APR:</span>
                            <div className='more'>
                            <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                            <h3>{item.APR}</h3>
                            </div>
                        </div>
                        <div className='three'>
                            <span>Earn:</span>
                            <h3>BABY + Fees</h3>
                        </div>
                        <div className='four'>
                            <h5>AVAILABLE</h5>
                            <div className="innerr">
                                <h2>0 LP</h2>
                                <button>Get LP</button>
                            </div>
                        </div>
                        <div className='four'>
                            <h5>BABY EARNED</h5>
                            <div className="innerr">
                                <h2>0</h2>
                                <button>Harvest</button>
                            </div>
                        </div>
                        <div className='five'>
                            <h5>BNB-USDT LP STAKED</h5>
                            <button>Unlock Wallet</button>
                        </div>
                        <div className="toggle">
                        <hr></hr>
                            <span onClick={()=>toggle(i)}>Details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></span>
                            </div>
                            {answer===i?
                            <div className="six" style={{"display":"flex"}}>
                            <div className='sec'>
                                <h5>Total Liquidity:</h5>
                                <h5>${item.liquidity}</h5>
                            </div>
                            <div className='links'>
                                <a href="#">Get BNB-USDT LP <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
                                <a href="#">View Contract <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
                            </div>
                        </div>:
                        <div className="six" style={{"display":"none"}}>
                        <div className='sec'>
                            <h5>Total Liquidity:</h5>
                            <h5>${item.liquidity}</h5>
                        </div>
                        <div className='links'>
                            <a href="#">Get BNB-USDT LP <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
                            <a href="#">View Contract <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
                        </div>
                    </div>}
                    </div>
                        // </div>
                      )
                   })}
        </div>


{/* line styling */}
            <div className='innerLine' style={{"display":displayMode2}}>
                   {farmsArr.map((item, index)=>{
                      return(
                // <div className='block'>
                    <div className='indiv' key={index} onClick={()=>toggle(index)}>
                        <div className='mainn'>
                        <div className='one'>
                            <img src={item.img}></img>
                            {/* <div className='oneInner'> */}
                                <h3>{item.coin}</h3>
                                {/* <span>{item.ups}</span> */}
                            {/* </div> */}
                        </div>
                        <div className='two'>
                            <h5> EARNED</h5>
                            <div className="innerr">
                                <h3>0</h3>
                                {/* <button>Harvest</button> */}
                            </div>
                        </div>
                        <div className='three'>
                            <h5>APR:</h5>
                            <div className='more'>
                            <h3>{item.APR}</h3>
                            <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className='four'>
                                <h5>Liquidity:</h5>
                                <div className='more'>
                                <h3>${item.liquidity}</h3>
                                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                                </div>

                        </div>
                        <div className='multiplier'>
                        <h5> multiplier</h5>
                        <div className='more'>
                        <h3>{item.ups}</h3>
                        <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                        </div>
                        </div>
                       <h3 >Details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></h3>

                        </div>
                      { answer===index? <div className='toggled' style={{"display":"flex"}}>
                        <div className='first'>
                            <h5>AVAILABLE</h5>
                            <div className="innerr">
                                <h2>0 LP</h2>
                                <button>Get LP</button>
                            </div>
                        </div>
                        <div className='second'>
                            <h5>BABY EARNED</h5>
                            <div className="innerr">
                                <h2>0</h2>
                                <button>Harvest</button>
                            </div>
                        </div>
                        <div className='third'>
                            <h5>Start Farming</h5>
                            <button>Unlock Wallet</button>
                        </div>
                        <div className='links'>
                                <a href="#">Get BNB-USDT LP <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
                                <a href="#">View Contract <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
                            </div>
                        </div>:
                        <div className='toggled'style={{"display":"none"}}>
                        <div className='first'>
                            <h5>AVAILABLE</h5>
                            <div className="innerr">
                                <h2>0 LP</h2>
                                <button>Get LP</button>
                            </div>
                        </div>
                        <div className='second'>
                            <h5>BABY EARNED</h5>
                            <div className="innerr">
                                <h2>0</h2>
                                <button>Harvest</button>
                            </div>
                        </div>
                        <div className='third'>
                            <h5>Start Farming</h5>
                            <button>Unlock Wallet</button>
                        </div>
                        <div className='links'>
                                <a href="#">Get BNB-USDT LP <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
                                <a href="#">View Contract <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
                            </div>
                        </div>}
                    {/* </div> */}
                         </div>
                      )
                   })}
        </div>
        </div>
  )
}

var farmsArr=[
    {
        img:"/images/BNB.png",
        coin:"BNB-USDT",
        APR:"12.88%+2.54%",
        ups:"50x",
        liquidity:"4,849,900"
    },
    {
        img:"/images/ETH.png",
        coin:"BNB-USDT",
        APR:"12.88%+2.54%",
        ups:"50x",
        liquidity:"4,849,900"
    },
    {
        img:"/images/BNB.png",
        coin:"BNB-USDT",
        APR:"12.88%+2.54%",
        ups:"50x",
        liquidity:"4,849,900"
    },
    {
        img:"/images/BTC.png",
        coin:"BNB-USDT",
        APR:"12.88%+2.54%",
        ups:"90x",
        liquidity:"4,849,900"
    },
   
]