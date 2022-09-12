import React from 'react'
import Header from '../header'
import './Trade.css'
import Warning from './Warning'

export default function TradeSwap() {
  return (
    <div>
        <Warning/>
        <header>
           <Header/>
        </header>
        <div className='bodySec'>
            <div className='buttons'>
                <button>Swap</button>
                <button>Liquidity</button>
            </div>
            <div className='swapSection'>
                <p className='para1'>You can trade over <span>90%</span> of BEP 20 Tokens on BabySwap with better slippages,<br></br> 
                and Smart Router will choose the <span>best route</span> for you.
                </p>
                <div className='box'>
                    <div className='first'>
                        <h3>Trade Mining Reward:<i class="fa fa-arrow-circle-right" aria-hidden="true"></i></h3>
                        <h3>0.0000 BABY</h3>
                    </div>
                    <button>Withdraw</button>
                </div>
                <div className='mainSec'>
                    <div className='one'>
                      <div className='exchange'>
                         <h3>Exchange</h3>
                         <span>Trade tokens in an instant</span>
                      </div>
                      <div className='icons'>
                        <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                        <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                      </div>
                    </div>
                    <div className='two'>
                       <div className='fromInput'>
                          <span>From</span>
                          <div className='more'>
                            <input type="number" placeholder='0.0'></input>
                            <div>
                                <img src="images/BNB.png"></img>
                                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                            </div>
                          </div>
                       </div>
                       <div className='icon'>
                         <button><i class="fa fa-arrow-circle-right" aria-hidden="true"></i></button>
                       </div>
                       <div className='toInput'>
                       <span>To</span>
                          <div className='more'>
                            <input type="number" placeholder='0.0'></input>
                            <div>
                                <img src="images/ETH.png"></img>
                                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                            </div>
                          </div>
                       </div>
                       <div className='summary'>
                           <div className='first'>
                            <div>Price</div>
                            <div className='valuee'>
                                <div><span className='amt'>0.0447824 USDT</span> per BABY</div>
                                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                            </div>
                           </div>
                           <div className='second'>
                             <div>Slippage Tolerance</div>
                             <div>0.1%</div>
                           </div>
                       </div>
                       <button>Unlock Wallet</button>
                    </div>
                    <div className='popup'>

                    </div>
                </div>
            </div>
            <div className='liquiditySection'>

            </div>
        </div>
    </div>
  )
}
