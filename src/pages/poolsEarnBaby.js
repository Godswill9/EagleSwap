import Cookies from 'js-cookie'
import react, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../header'
// import PoolsAlt from './poolsAlt'
import "./test.css"
import Warning from './Warning'


export default function PoolsEarnBaby(){
    const nameTheme=Cookies.get()
    const theme=nameTheme.theme
    const navigate=useNavigate()
    const [displayMode, setDisplay]=useState("flex")
    const [displayMode2, setDisplay2]=useState("none")
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

    if(nameTheme.theme!=="dark" || nameTheme.theme==="bright"){
        // console.log("rice")
        var bgColor={
          // "backgroundColor":"rgb(230, 208, 181)",
          "backgroundColor":"white",
          color:"rgb(83, 83, 83)"
        }
        var contIndiv={
          borderColor:"#c2afa1",
          backgroundColor:"#f3ebe5",
          boxShadow:"none"
         //  margin:"1px 0 7px 0"
       }
        var button={
          backgroundColor:"rgb(192, 135, 30)",
          color:"white"
        } 
        var button1={
          backgroundColor:"#a18f83",
          color:"white"
        } 
        var orange={
            color:"black",
            fontWeight:"bold"
        }
        var boxObjExtra={
          "color":"rgba(44, 40, 31, 0.966)",
          "boxShadow": "0 4px 0px #503b29",
            "border":"1px solid #f3ebe5",
            // "backgroundColor":"rgb(226, 194, 154)",
            "backgroundColor":"#c2afa1",
         }
       var backgroundColor="rgb(226, 194, 154)"
       var boxShadow="0 3px 0px rgb(182, 153, 117)"
       var border="2px solid rgb(182, 153, 117)"
       var color="rgb(192, 135, 30)"
       var white="white"
        var boxObj={
          "color":"rgba(44, 40, 31, 0.966)",
          "boxShadow": "0 4px 0px #503b29",
            "border":"1px solid #f3ebe5",
            // "backgroundColor":"rgb(226, 194, 154)",
            "backgroundColor":"#f3ebe5",
              headText:{
                color:"rgba(90, 63, 0, 0.966)",
                textShadow:"none"
              },
              headText2:{
                color:"white",
                textShadow:"none"
              },
              moreText:{
                color:"rgba(44, 40, 31, 0.966)",
                textShadow:"none",
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
                  color:"black",
                }

              }
        }
    }  else if(nameTheme.theme==="dark"){
        var bgColor={
            "backgroundColor":"",
            color:""
          }
          var boxObjExtra={
            "color":"",
            "boxShadow": "",
              "border":"",
              // "backgroundColor":"rgb(226, 194, 154)",
              "backgroundColor":"",
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
                  main:{
                    color:"rgb(139, 139, 139)",
                  }
  
                }
          }
     } 
     
    const activeButton={
        "color":boxObj.headText.color || "brown",
        "backgroundColor": color || "rgb(236, 232, 232)"
      }
      const [SwapButton, setSwapButton]=useState("true")
      const handleSwitch1=()=>{
        if(SwapButton==="true") return;
        setSwapButton("true")
        navigate("/Pools_earnEAGLE")
     }
     const handleSwitch2=()=>{
       if(SwapButton==="false") return;
        setSwapButton('false')
        navigate("/Pools_earnAlt")
     }
     const [live, setLive]=useState("true")
     const [active, setActive]=useState("Hot")
     const [height, setHeight]=useState("0px")

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
    const selected=(val)=>{
        setActive(val)
        setHeight("0px")
     }
    
    //  newly Added
     const [answer, setAnswer]=useState(null)
    const toggle=(i)=>{
    if(answer == i){
        return setAnswer(null)
    }
    setAnswer(i)
    // console.log(i)
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
        <div className='poolsCont'  style={bgColor}>
            <div className='pool1'>
        <div className="innerPool">
        <div className='imgg'>
        {/* <img src="/images/NewPool_Banner.png"></img> */}
        <div className='text'>POOLS SECTION</div>
            </div>
        <div className="sectionn2">
        <div className="headOne">
            <div className='resBreak'>
            <div className='buttonss' >
            {displayMode==="flex"?<button style={buttonStyle} onClick={handleView}><i class="bi bi-grid"></i></button>:<button style={{ background:boxObjExtra.backgroundColor, border:`.2px solid ${button.color}`}} onClick={handleView}><i style={{fontWeight:"bold"}} class="bi bi-grid"></i></button>}
            {displayMode2==="block"?<button style={buttonStyle} onClick={handleView2}><i class="bi bi-list"></i></button>:<button style={{ background:boxObjExtra.backgroundColor, border:`.2px solid ${button.color}`}} onClick={handleView2}><i style={{fontWeight:"bold"}} class="bi bi-list"></i></button>}
            </div>
            <div className='alll'>
            <div className='switchStaked'>
            <input type="checkbox"></input>
            <span className='stk' style={boxObj.headText}>Staked Only</span>
            {/* <div className='ball'></div> */}
            </div>
            </div>
            </div>
            <div className="switchTwo" style={boxObjExtra}>
            {live==="true"?<button onClick={handleLive} style={activeButton}>Live</button>:<button onClick={handleLive}>Live</button>}
            {live==="false"?<button onClick={handleLive2} style={activeButton}>Finished</button>:<button onClick={handleLive2}>Finished</button>}
            </div>
            </div>
            <div className='headtwo'>
            <div className='sortOne'>
            <span style={{...boxObj.headText, fontWeight:"bold"}}>Sort by</span>
            <div className="dropdown" style={{...boxObj, boxShadow:"none"}}>  
               <div className='first' onClick={()=>{
                if(height==="0px")setHeight("14em")
                else if(height==="14em")setHeight("0px")
            }}>
               <div>{active}</div>
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
               </div>
               <div className='more' style={{...boxObj,height:height, boxShadow:"none"}}>
                <div style={{fontWeight:"bold"}} onClick={()=>{selected("Hot")}}>Hot</div>
                <div style={{fontWeight:"bold"}} onClick={()=>{selected("APR")}}>APR</div>
                <div style={{fontWeight:"bold"}} onClick={()=>{selected("Multiplier")}}>Multiplier</div>
                <div style={{fontWeight:"bold"}} onClick={()=>{selected("Earned")}}>Earned</div>
                <div style={{fontWeight:"bold"}} onClick={()=>{selected("Liquidity")}}>Liquidity</div>
            </div>
            </div>
            </div>
            <div className='sortOne'>
            <span style={{...boxObj.headText, fontWeight:"bold"}}>Search</span>
             <input style={{...boxObj, boxShadow:"none"}} type="search" placeholder="Search Pools"></input>
            </div>
            </div>
            </div>
            </div>
            <div className='sectionn3'>
                <div className='switch'style={boxObjExtra}>
                {SwapButton ==="true"? <button onClick={handleSwitch1} style={activeButton}>Earn EAGLE</button>:<button onClick={handleSwitch1}>Earn EAGLE</button>}
               {SwapButton ==="false"? <button onClick={handleSwitch2} style={activeButton}>Earn ALT</button>:<button onClick={handleSwitch2}>Earn ALT</button>}
                </div> 
            </div> 
            <div className='poolsRealCont'>
                {/* boxStyling */}

                <div className="poolsBoxContInner" style={{"display":displayMode}}>
                    {poolsArray.map((item, i)=>{
                         return(
                  <div className="indiv" key={i} style={boxObj}>
                    <div className="onee" style={button1}>
                        <div className="pair">
                            <h3 style={boxObj.headText2}>{item.largeHeader}</h3>
                            <span>{item.smallHeader}</span>
                        </div>
                        <img src={item.img}></img>
                    </div>
                    <div className="two">
                        <span style={boxObj.headText}>APR</span>
                        <h3 style={{...orange,fontWeight:"bold"}}>{item.APY}% <i class="bi bi-calculator"></i></h3>
                    </div>
                    <div className="three" style={{...boxObj, boxShadow:"none",borderBottom:".1px solid rgb(182, 153, 117)"}}>
                    <h4 style={boxObj.headText}>Available</h4>
                        <div className="pair" >
                            <div className="innerrr" style={orange}>
                                <h4 style={orange}>{item.available}</h4>
                            <span style={{orange}}>~ $0</span>
                            </div>
                        <button style={button}>Get EAGLE</button>
                        </div>
                    </div>
                    <div className="four" style={{...orange, textShadow:`0 0 0 ${white}`}}>
                        <span style={{fontWeight:"bold"}} >Recent EAGLE profit</span>
                        <span style={{fontWeight:"bold"}}>0.1% unstaking fee if withdrawn within 72h</span>
                    </div>
                    <div className="fivee">
                        <span style={{...orange, color:boxObj.headText.color, textShadow:"0 0 1px yellow"}}>START EARNING</span>
                        <button onClick={handleConnectWallet} style={button}>Unlock Wallet</button>
                    </div>
                    <div className="six" onClick={()=>{toggle(i)}}>
                        <div className='more'></div>
                            <span style={{...boxObj.headText, width:"100%", textAlign:"center", fontWeight:"bold", color:'brown',textShadow:"none"}}>Details <i class="bi bi-chevron-down"></i></span>
                    </div>
                    {answer === i?
                    <div className="sevenn" style={{"display":"flex"}}>
                        <span style={boxObj.headText}>Total Staked</span>
                        <div className="det">
                            <span style={{...orange, textShadow:"none",fontWeight:"bold"}}>{item.extra} EAGLE</span>
                            <a href="#"><span style={{...orange, textShadow:"none",fontWeight:"bold"}}>View Contract <i class="bi bi-box-arrow-up-right"></i></span></a>
                        </div>
                    </div>:
                    <div className="sevenn" style={{"display":"none"}}>
                        <span>Total Staked</span>
                        <div className="det">
                            <span>0 EAGLE</span>
                            <a href="#"><span>View Contract <i class="bi bi-box-arrow-up-right"></i></span></a>
                        </div>
                    </div>
                    }
                  </div>
                         )
                    })}
                </div>





                {/* {linear} */}
                <div className='poolsLineContainer' style={{"display":displayMode2}}>
                {poolsArray.map((item, index)=>{
                    return(
                  <div className="indiv"  style={contIndiv}>
                    <div className='first'>
                    <div className="onee">
                       <img src={item.img}></img>
                        <div className="pair">
                            <h3 style={boxObj.headText}>{item.largeHeader}</h3>
                            <span style={boxObj.moreText.main}>{item.smallHeader}</span>
                        </div>
                    </div>
                    <div className="two">
                        <span style={boxObj.headText}>APR</span>
                        <h3 style={boxObj.moreText.main}>{item.APY}% <i class="bi bi-calculator"></i></h3>
                    </div>
                    <div className='twos'>
                    <div className="two">
                        <span style={boxObj.headText}>Profit</span>
                        <h3 style={boxObj.moreText.main}>{item.profit}</h3>
                    </div>
                    </div>
                    <div className="sevenn">
                        <span style={boxObj.headText}>Total Staked</span>
                        <div className="det">
                            <span style={boxObj.moreText.main}>0 EAGLE</span>
                            <a href="#" style={boxObj.moreText.main}>View Contract <i class="bi bi-box-arrow-up-right"></i></a>
                        </div>
                    </div>
                    <div className="six">
                        <div className='more'></div>
                        <div className="detailsDrop">
                            <span onClick={()=>{toggle(index)}} style={boxObj.headText}>Details <i class="bi bi-chevron-down"></i></span>
                        </div>
                    </div>
                    </div>
                    {answer === index?<div className="dropDown" style={{"display":"flex", borderTop:border}}>
                        <div className='ddone'>
                        <div className="four">
                        <span style={boxObj.moreText.main}>Recent EAGLE profit</span>
                        <span style={boxObj.moreText.main}>0.1% unstaking fee if withdrawn within 72h</span>
                    </div>
                    <div className="three" style={{border:border}}>
                    <h4 style={boxObj.headText}>Available</h4>
                        <div className="pair">
                            <div className="innerrr">
                                <h4 style={boxObj.moreText.main}>{item.available}</h4>
                            <span style={boxObj.moreText.main}>~ $0</span>
                            </div>
                            <button style={button}>Get EAGLE</button>
                        </div>
                    </div>
                    <div className="fivee" style={{border:border}}>
                        <span style={boxObj.headText}>START EARNING</span>
                        <button onClick={handleConnectWallet} style={button}>Unlock Wallet</button>
                    </div>
                        </div>    
                        <div className='ddextra'>
                        <div className="two">
                        <span style={boxObj.headText}>Profit</span>
                        <h3>{item.profit}</h3>
                    </div>
                    <div className="sevenn">
                        <span style={boxObj.headText}>Total Staked</span>
                        <div className="det">
                            <span>0 EAGLE</span>
                            <a href="#" style={boxObj.headText}>View Contract <i class="bi bi-box-arrow-up-right"></i></a>
                        </div>
                    </div>
                        </div>    
                    </div>:
                    <div className="dropDown" style={{"display":"none"}}>
                    <div className="four">
                        <span>Recent EAGLE profit</span>
                        <span>0.1% unstaking fee if withdrawn within 72h</span>
                    </div>
                    <div className="three">
                    <h4>Available</h4>
                        <div className="pair">
                            <div className="innerrr">
                                <h4>{item.available}</h4>
                            <span>~ $0</span>
                            </div>
                            <button>Get EAGLE</button>
                        </div>
                    </div>
                    <div className="fivee">
                        <span>START EARNING</span>
                        <button>Unlock Wallet</button>
                    </div>
                    </div>}
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

var poolsArray=[
    {
        img:"/images/BNB.png",
        smallHeader:"Automatic restaking",
        largeHeader:"Auto EAGLE",
        profit:"0.000",
        APY:"0",
        available:"0",
        extra:"10",
    },
    {
        img:"/images/BNB.png",
        smallHeader:"manual staking",
        largeHeader:"Auto EAGLE",
        profit:"0.000",
        APY:"0",
        available:"0",
        extra:"2",
    },
    {
        img:"/images/BNB.png",
        smallHeader:"manual staking",
        largeHeader:"Auto EAGLE",
        profit:"0.000",
        APY:"0",
        available:"0",
        extra:"2",
    },
    {
        img:"/images/BNB.png",
        smallHeader:"manual staking",
        largeHeader:"Auto EAGLE",
        profit:"0.000",
        APY:"0",
        available:"0",
        extra:"2",
    },
    {
        img:"/images/BNB.png",
        smallHeader:"manual staking",
        largeHeader:"Auto EAGLE",
        profit:"0.000",
        APY:"0",
        available:"0",
        extra:"2",
    },
    {
        img:"/images/BNB.png",
        smallHeader:"manual staking",
        largeHeader:"Auto EAGLE",
        profit:"0.000",
        APY:"0",
        available:"0",
        extra:"2",
    },
    {
        img:"/images/BNB.png",
        smallHeader:"manual staking",
        largeHeader:"Auto EAGLE",
        profit:"0.000",
        APY:"0",
        available:"0",
        extra:"2",
    },
    {
        img:"/images/BNB.png",
        smallHeader:"manual staking",
        largeHeader:"Auto EAGLE",
        profit:"0.000",
        APY:"0",
        available:"0",
        extra:"2",
    },
    {
        img:"/images/BNB.png",
        smallHeader:"manual staking",
        largeHeader:"Auto EAGLE",
        profit:"0.000",
        APY:"0",
        available:"0",
        extra:"2",
    },
   
]