import react, {useState} from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../header'
// import FarmsAlt from './farmsAlt'
import "./test.css"
import Warning from './Warning' 


export default function FarmsEarnBABY(){

    const [live, setLive]=useState("true")
    const [active, setActive]=useState("Hot")
    const [height, setHeight]=useState("0px")
    const navigate =useNavigate()
    const [displayMode, setDisplay]=useState("flex")
    const [displayMode2, setDisplay2]=useState("none")


    const selected=(val)=>{
       setActive(val)
       setHeight("0px")
    }
    
    const handleLive=()=>{
        if(live==="true")return;
        setLive("true")
    }
    const handleLive2=()=>{
        if(live==="false")return;
        setLive("false")
    }
     
    const buttonStyle={
        "backgroundColor":"#0b0524",
        "boxShadow":" 0 3px 1px #916BBF"
    }
    const handleView=()=>{
        if(displayMode==="flex") return;
        else{
            setDisplay("flex")
        }
        setDisplay2("none")
    }
    const handleView2=()=>{
        if(displayMode2==="block") return;
        else{
            setDisplay2("block")
        }
        setDisplay("none")
    }
    const [answer, setAnswer]=useState(null)
    const toggle=(i)=>{
    if(answer == i){
        return setAnswer(null)
    }
    setAnswer(i)
    }

    const activeButton={
        "color":"#916BBF",
        "backgroundColor": "#3c1bc4"
      }
      const [SwapButton, setSwapButton]=useState("true")
      const handleSwitch1=()=>{
        if(SwapButton==="true") return;
        setSwapButton("true")
        navigate("/Farms_earnBABY")
     }
     const handleSwitch2=()=>{
       if(SwapButton==="false") return;
        setSwapButton('false')
        navigate("/Farms_earnALT")
     }


    return( 
    <div>
         <Warning/>
        <header>
           <Header/>
        </header>
        <div className='poolsCont'>
        <div className="innerPool">
            <div className='imgg'>
               <img src="/images/Farm.png"></img>
            </div>
        <div className="sectionn2">
        <div className="headOne">
            <div className='resBreak'>
            <div className='buttonss'>
            {displayMode==="flex"?<button style={buttonStyle} onClick={handleView}><i class="bi bi-grid"></i></button>:<button onClick={handleView}><i class="bi bi-grid"></i></button>}
            {displayMode2==="block"?<button style={buttonStyle} onClick={handleView2}><i class="bi bi-list"></i></button>:<button onClick={handleView2}><i class="bi bi-list"></i></button>}
            </div>
            <div className='alll'>
            <div className='switchStaked'>
            <input type="checkbox"></input>
            <div className='ball'></div>
            </div>
            <span className='stk'>Staked Only</span>
            </div>
            </div>
            <div className="switchTwo">
            {live==="true"?<button onClick={handleLive} style={activeButton}>Live</button>:<button onClick={handleLive}>Live</button>}
            {live==="false"?<button onClick={handleLive2} style={activeButton}>Finished</button>:<button onClick={handleLive2}>Finished</button>}
            </div>
            </div>
            <div className='headtwo'>
            <div className='sortOne'>
            <span>Sort by</span>
            <div className="dropdown" >  
               <div className='first' onClick={()=>{
                setHeight("14em")
            }}>
               <div>{active}</div>
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
               </div>
               <div className='more' style={{"height":height}}>
                <div onClick={()=>{selected("Hot")}}>Hot</div>
                <div onClick={()=>{selected("APR")}}>APR</div>
                <div onClick={()=>{selected("Multiplier")}}>Multiplier</div>
                <div onClick={()=>{selected("Earned")}}>Earned</div>
                <div onClick={()=>{selected("Liquidity")}}>Liquidity</div>
            </div>
            </div>
            </div>
            <div className='sortOne'>
            <span>Search</span>
             <input type="search" placeholder="Search Farms"></input>
            </div>
            </div>
            </div>
            </div>
            <div className='sectionn3'>
                <div className='switch'>
                {SwapButton ==="true"? <button onClick={handleSwitch1} style={activeButton}>Earn Baby</button>:<button onClick={handleSwitch1}>Earn Baby</button>}
               {SwapButton ==="false"? <button onClick={handleSwitch2} style={activeButton}>Earn ALT</button>:<button onClick={handleSwitch2}>Earn ALT</button>}
                </div> 
            </div>
            
            <div className='sectionn4'>
            <div className='inner' style={{"display":displayMode}}>
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
                        <div className='detalss'>
                        <h3 >Details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></h3>
                        </div>
                        </div>
 {/* responsive */}
                      { answer===index? <div className='toggled' style={{"display":"flex"}}>
                        <div className='resHead'>
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
                        </div>
                        <div className='resExtra'>
                        <div className='two'>
                            <h5> EARNED</h5>
                            <div className="innerr">
                                <h3>0</h3>
                                {/* <button>Harvest</button> */}
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
                        </div>
                        </div>
                        :
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
        coin:"BNC-USDT",
        APR:"12.88%+2.54%",
        ups:"50x",
        liquidity:"4,849,900"
    },
    {
        img:"/images/BTC.png",
        coin:"BNB-QSDT",
        APR:"12.88%+2.54%",
        ups:"90x",
        liquidity:"4,849,900"
    },
   
]