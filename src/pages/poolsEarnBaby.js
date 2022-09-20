import react, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../header'
// import PoolsAlt from './poolsAlt'
import "./test.css"
import Warning from './Warning'


export default function PoolsEarnBaby(){
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
     
    const activeButton={
        "color":"brown",
        "backgroundColor": "rgb(236, 232, 232)"
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
        "backgroundColor":"#0b0524",
        "boxShadow":" 0 3px 1px #916BBF"
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
     
    return( 
    <div>
         {/* <Warning/> */}
        <header>   
           <Header/>
        </header>
        <div className='poolsCont'>
        <div className="innerPool">
        <div className='imgg'>
        <img src="/images/NewPool_Banner.png"></img>
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
             <input type="search" placeholder="Search Pools"></input>
            </div>
            </div>
            </div>
            </div>
            <div className='sectionn3'>
                <div className='switch'>
                {SwapButton ==="true"? <button onClick={handleSwitch1} style={activeButton}>Earn EAGLE</button>:<button onClick={handleSwitch1}>Earn EAGLE</button>}
               {SwapButton ==="false"? <button onClick={handleSwitch2} style={activeButton}>Earn Other tokens</button>:<button onClick={handleSwitch2}>Earn Other tokens</button>}
                </div> 
            </div> 
            <div className='poolsRealCont'>
                {/* boxStyling */}

                <div className="poolsBoxContInner" style={{"display":displayMode}}>
                    {poolsArray.map((item, i)=>{
                         return(
                  <div className="indiv" key={i}>
                    <div className="onee">
                        <div className="pair">
                            <h3>{item.largeHeader}</h3>
                            <span>{item.smallHeader}</span>
                        </div>
                        <img src={item.img}></img>
                    </div>
                    <div className="two">
                        <span>APR</span>
                        <h3>{item.APY}% <i class="bi bi-calculator"></i></h3>
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
                    <div className="four">
                        <span>Recent EAGLE profit</span>
                        <span>0.1% unstaking fee if withdrawn within 72h</span>
                    </div>
                    <div className="fivee">
                        <span>START EARNING</span>
                        <button>Unlock Wallet</button>
                    </div>
                    <div className="six" onClick={()=>{toggle(i)}}>
                        <div className='more'></div>
                            <span>Details <i class="bi bi-chevron-down"></i></span>
                    </div>
                    {answer === i?
                    <div className="sevenn" style={{"display":"flex"}}>
                        <span>Total Staked</span>
                        <div className="det">
                            <span>0 EAGLE</span>
                            <a href="#"><span>View Contract <i class="bi bi-box-arrow-up-right"></i></span></a>
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
                  <div className="indiv" onClick={()=>{toggle(index)}}>
                    <div className='first'>
                    <div className="onee">
                       <img src={item.img}></img>
                        <div className="pair">
                            <h3>{item.largeHeader}</h3>
                            <span>{item.smallHeader}</span>
                        </div>
                    </div>
                    <div className="two">
                        <span>APR</span>
                        <h3>{item.APY}% <i class="bi bi-calculator"></i></h3>
                    </div>
                    <div className='twos'>
                    <div className="two">
                        <span>Profit</span>
                        <h3>{item.profit}</h3>
                    </div>
                    </div>
                    <div className="sevenn">
                        <span>Total Staked</span>
                        <div className="det">
                            <span>0 EAGLE</span>
                            <a href="#">View Contract <i class="bi bi-box-arrow-up-right"></i></a>
                        </div>
                    </div>
                    <div className="six">
                        <div className='more'></div>
                        <div className="detailsDrop">
                            <span>Details <i class="bi bi-chevron-down"></i></span>
                        </div>
                    </div>
                    </div>
                    {answer === index?<div className="dropDown" style={{"display":"flex"}}>
                        <div className='ddone'>
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
                        </div>    
                        <div className='ddextra'>
                        <div className="two">
                        <span>Profit</span>
                        <h3>{item.profit}</h3>
                    </div>
                    <div className="sevenn">
                        <span>Total Staked</span>
                        <div className="det">
                            <span>0 EAGLE</span>
                            <a href="#" >View Contract <i class="bi bi-box-arrow-up-right"></i></a>
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
        available:"0"
    },
    {
        img:"/images/BNB.png",
        smallHeader:"Manual",
        largeHeader:"Earn EAGLE",
        profit:"0.000",
        APY:"0",
        available:"0"
    },
   
]