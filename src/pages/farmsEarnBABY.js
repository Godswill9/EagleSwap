import Cookies from 'js-cookie'
import react, {useState} from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../header'
// import FarmsAlt from './farmsAlt'
import "./test.css"
import Warning from './Warning' 


export default function FarmsEarnBABY(){
    const nameTheme=Cookies.get()
    const theme=nameTheme.theme
    const [live, setLive]=useState("true")
    const [active, setActive]=useState("Hot")
    const [height, setHeight]=useState("0px")
    const navigate =useNavigate()
    const [displayMode, setDisplay]=useState("flex")
    const [displayMode2, setDisplay2]=useState("none")

    if(nameTheme.theme!=="dark" || nameTheme.theme==="bright"){
        // console.log("rice")
        var bgColor={
          "backgroundColor":"rgb(230, 208, 181)",
          color:"rgb(83, 83, 83)"
        }
        var button={
          backgroundColor:"rgb(192, 135, 30)",
          color:"white"
        } 
       var backgroundColor="rgb(226, 194, 154)"
       var boxShadow="0 3px 0px rgb(182, 153, 117)"
       var border="2px solid rgb(182, 153, 117)"
       var color="rgb(192, 135, 30)"
        var boxObj={
            "color":"rgba(53, 37, 0, 0.966)",
            "boxShadow": "0 4px 0px rgb(182, 153, 117)",
              "border":"2px solid rgb(182, 153, 117)",
              "backgroundColor":"rgb(226, 194, 154)",
              headText:{
                color:"rgba(90, 63, 0, 0.966)",
              },
              moreText:{
                color:"rgba(44, 40, 31, 0.966)",
                button:{
                   border:".3px solid rgb(194, 126, 0)",
                   color:"rgb(194, 126, 0)"
                },
                button2:{
                   backgroundColor:"rgb(194, 126, 0)",
                   color:"white"
                },
                cont:{
                   border:".4px solid rgba(90, 63, 0, 0.966)",
                },
                main:{
                  color:"rgb(194, 126, 0)",
                }

              }
        }
    }  else if(nameTheme.theme==="dark"){
        var bgColor={
            "backgroundColor":"",
            color:""
          }
          var button={
            backgroundColor:"",
            color:""
          } 
         var backgroundColor=""
         var boxShadow=""
         var border=""
         var color=""
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
                  button:{
                     border:"",
                     color:""
                  },
                  button2:{
                     backgroundColor:"",
                     color:""
                  },
                  cont:{
                     border:"",
                  },
                  main:{
                    color:"",
                  }
    
                }
          }
     } 

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
         color:boxObj.headText.color || "yellow",
        "backgroundColor": color || "#0b0524",
        "boxShadow":boxShadow||"0 3px 1px #916BBF",
        border: border||".4px solid #916BBF"
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
        "color": boxObj.headText.color || "#916BBF",
        "backgroundColor": color || "#3c1bc4"
      }
      const [SwapButton, setSwapButton]=useState("true")
      const handleSwitch1=()=>{
        if(SwapButton==="true") return;
        setSwapButton("true")
        navigate("/Farms_earnEAGLE")
     }
     const handleSwitch2=()=>{
       if(SwapButton==="false") return;
        setSwapButton('false')
        navigate("/Farms_earnALT")
     }

     const [ConnectWallet, setConnectWallet]=useState("none")
     const [wrapper, setWrapper]= useState("none")
     const handleConnectWallet=()=>{
        setConnectWallet("flex")
        setWrapper("flex")
     }
     const closePopup=()=>{
      setWrapper("none")
      setConnectWallet("none")
    }


    return( 
    <div>
         {/* <Warning/> */}
        <header>
           <Header/>
        </header>
        <div className='poolsCont' style={bgColor}>
            <div className='pool1'>
        <div className="innerPool">
            <div className='imgg'>
               <img src="/images/Farm.png"></img>
            </div>
        <div className="sectionn2">
        <div className="headOne">
            <div className='resBreak'>
            <div className='buttonss' >
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
            <div className="switchTwo" style={boxObj}>
            {live==="true"?<button onClick={handleLive} style={activeButton}>Live</button>:<button onClick={handleLive}>Live</button>}
            {live==="false"?<button onClick={handleLive2} style={activeButton}>Finished</button>:<button onClick={handleLive2}>Finished</button>}
            </div>
            </div>
            <div className='headtwo'>
            <div className='sortOne'>
            <span style={boxObj.headText}>Sort by</span>
            <div className="dropdown" style={{...boxObj,boxShadow:"none"}}>  
               <div className='first' onClick={()=>{
               if(height==="0px")setHeight("14em")
               else if(height==="14em")setHeight("0px")
            }}>
               <div>{active}</div>
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
               </div>
               <div className='more' style={{...boxObj,height:height, boxShadow:"none"}}>
                <div onClick={()=>{selected("Hot")}}>Hot</div>
                <div onClick={()=>{selected("APR")}}>APR</div>
                <div onClick={()=>{selected("Multiplier")}}>Multiplier</div>
                <div onClick={()=>{selected("Earned")}}>Earned</div>
                <div onClick={()=>{selected("Liquidity")}}>Liquidity</div>
            </div>
            </div>
            </div>
            <div className='sortOne' >
            <span style={boxObj.headText}>Search</span>
             <input type="search" style={{...boxObj,boxShadow:"none"}} placeholder="Search Farms"></input>
            </div>
            </div>
            </div>
            </div>
            <div className='sectionn3'>
                <div className='switch' style={boxObj}>
                {SwapButton ==="true"? <button onClick={handleSwitch1} style={activeButton}>Earn EAGLE</button>:<button onClick={handleSwitch1}>Earn EAGLE</button>}
               {SwapButton ==="false"? <button onClick={handleSwitch2} style={activeButton}>Earn ALT</button>:<button onClick={handleSwitch2}>Earn ALT</button>}
                </div> 
            </div>
            
            <div style={boxObj.headText} className='sectionn4'>
            <div className='inner' style={{"display":displayMode}}>
                   {farmsArr.map((item, i)=>{
                      return(
                // <div className='block'>
                    <div className='indiv' key={i} style={boxObj}>
                        <div className='one'>
                            <img src={item.img}></img>
                            <div className='oneInner'>
                                <h3 style={boxObj.headText}>{item.coin}</h3>
                                <span>{item.ups}</span>
                            </div>
                        </div>
                        <div className='two'>
                            <span style={boxObj.moreText}>APR:</span>
                            <div className='more'>
                            <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                            <h3 style={boxObj.moreText.main}>{item.APR}</h3>
                            </div>
                        </div>
                        <div className='three'>
                            <span style={boxObj.moreText}>Earn:</span>
                            <h3 style={boxObj.moreText.main}>EAGLE + Fees</h3>
                        </div>
                        <div className='four'>
                            <h5 style={boxObj.moreText}>AVAILABLE</h5>
                            <div className="innerr">
                                <h2 style={boxObj.moreText.main}>0 LP</h2>
                              <button style={boxObj.moreText.button}>Get LP</button>
                            </div>
                        </div>
                        <div className='four'>
                            <h5 style={boxObj.moreText}>EAGLE EARNED</h5>
                            <div className="innerr">
                                <h2 style={boxObj.moreText.main}>0</h2>
                                <button style={boxObj.moreText.button}>Harvest</button>
                            </div>
                        </div>
                        <div className='five'>
                            <h5 style={boxObj.moreText}>BRISE-USDT LP STAKED</h5>
                            <button onClick={handleConnectWallet} style={boxObj.moreText.button2}>Unlock Wallet</button>
                        </div>
                        <div className="toggle">
                        <hr></hr>
                            <span  style={{color:"brown"}} onClick={()=>toggle(i)}>Details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></span>
                            </div>
                            {answer===i?
                            <div className="six" style={{"display":"flex"}}>
                            <div className='sec'>
                                <h5 style={boxObj.moreText}>Total Liquidity:</h5>
                                <h5>${item.liquidity}</h5>
                            </div>
                            <div className='links'>
                                <a href="#"  style={{color:"white"}}>Get BRISE-USDT LP <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
                                <a href="#"  style={{color:"white"}}>View Contract <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
                            </div>
                        </div>:
                        <div className="six" style={{"display":"none"}}>
                        <div className='sec'>
                            <h5>Total Liquidity:</h5>
                            <h5>${item.liquidity}</h5>
                        </div>
                        <div className='links'>
                            <a href="#">Get BRISE-USDT LP <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
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
                    <div className='indiv' style={boxObj} key={index}>
                        <div className='mainn' >
                        <div className='one'>
                            <img  src={item.img}></img>
                            {/* <div className='oneInner'> */}
                                <h3 style={boxObj.headText}>{item.coin}</h3>
                                {/* <span>{item.ups}</span> */}
                            {/* </div> */}
                        </div>
                        <div className='two'>
                            <h5 style={boxObj.moreText}> EARNED</h5>
                            <div className="innerr">
                                <h3 style={boxObj.moreText.main}>0</h3>
                                {/* <button>Harvest</button> */}
                            </div>
                        </div>
                        <div className='three'>
                            <h5 style={boxObj.moreText}>APR:</h5>
                            <div className='more'>
                            <h3 style={boxObj.moreText.main}>{item.APR}</h3>
                            <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className='four'>
                                <h5 style={boxObj.moreText}>Liquidity:</h5>
                                <div className='more'>
                                <h3 style={boxObj.moreText.main}>${item.liquidity}</h3>
                                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                                </div>

                        </div>
                        <div className='multiplier'>
                        <h5 style={boxObj.moreText}> multiplier</h5>
                        <div className='more'>
                        <h3 style={boxObj.moreText.main}>{item.ups}</h3>
                        <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                        </div>
                        </div>
                        <div className='detalss'>
                        <h3  onClick={()=>toggle(index)} style={boxObj.moreText}>Details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></h3>
                        </div>
                        </div>
 {/* responsive */}
                      { answer===index? <div className='toggled' style={{"display":"flex", "borderTop":boxObj.moreText.cont.border}}>
                        <div className='resHead'>
                        <div className='first' style={boxObj.moreText.cont}>
                            <h5 style={boxObj.moreText}>AVAILABLE</h5>
                            <div className="innerr">
                                <h2 style={boxObj.moreText.main}>0 LP</h2>
                                <button onClick={handleConnectWallet} style={boxObj.moreText.button}>Get LP</button>
                            </div>
                        </div>
                        <div className='second' style={boxObj.moreText.cont}>
                            <h5 style={boxObj.moreText}>EAGLE EARNED</h5>
                            <div className="innerr">
                                <h2 style={boxObj.moreText.main}>0</h2>
                                <button style={boxObj.moreText.button}>Harvest</button>
                            </div>
                        </div>
                        <div className='third' style={boxObj.moreText.cont}>
                            <h5 style={boxObj.moreText}>Start Farming</h5>
                            <button onClick={handleConnectWallet} style={boxObj.moreText.button2}>Unlock Wallet</button>
                        </div>
                        <div className='links' style={boxObj.moreText.cont}>
                                <a href="#" style={boxObj.moreText.main}>Get BRISE-USDT LP <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
                                <a href="#" style={boxObj.moreText.main}>View Contract <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
                            </div>
                        </div>
                        <div className='resExtra' style={{"borderTop":boxObj.moreText.cont.border}}>
                        <div className='two'>
                            <h5 style={boxObj.headText}> EARNED</h5>
                            <div className="innerr">
                                <h3 style={boxObj.moreText}>0</h3>
                                {/* <button>Harvest</button> */}
                            </div>
                        </div>
                        <div className='four'>
                                <h5 style={boxObj.headText}>Liquidity:</h5>
                                <div className='more'>
                                <h3 style={boxObj.moreText}>${item.liquidity}</h3>
                                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                                </div>

                        </div>
                        <div className='multiplier'>
                        <h5 style={boxObj.headText}> multiplier</h5>
                        <div className='more'>
                        <h3 style={boxObj.moreText}>{item.ups}</h3>
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
                            <h5>EAGLE EARNED</h5>
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
                                <a href="#">Get BRISE-USDT LP <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
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
        <div onClick={closePopup} className="popupSection" style={{"display":wrapper}}></div>
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
   )
}

var farmsArr=[
    {
        img:"/images/BNB.png",
        coin:"BRISE-EAGLE",
        APR:"%",
        ups:"50x",
        liquidity:"0"
    },
    {
        img:"/images/ETH.png",
        coin:"BRISE-USDT",
        APR:"%",
        ups:"50x",
        liquidity:"0"
    },
    {
        img:"/images/BNB.png",
        coin:"BNC-USDT",
        APR:"%",
        ups:"50x",
        liquidity:"0"
    },
    {
        img:"/images/BTC.png",
        coin:"BNB-QSDT",
        APR:"%",
        ups:"90x",
        liquidity:"0"
    },
   
]