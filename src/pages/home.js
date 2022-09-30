import Cookies from 'js-cookie'
import React, {useEffect, useRef, useState} from 'react'
import Marquee from 'react-fast-marquee'
import { useNavigate } from 'react-router-dom'
import Header from '../header'
import "./home.css"
import "./swap.css"

export default function Home() {
    const redirectt=useNavigate()
    const gainers= useRef()
    const traders= useRef()
    const circles= useRef()
    const sliderIndiv= useRef()
    // const [theme, setTheme]=useState("dark")
    var bgColor={}
    useEffect(()=>{
        if(Cookies.get().theme===""){
            Cookies.set("theme", "dark")
          }
    },[])

    const nameTheme=Cookies.get()
    const theme=nameTheme.theme
    // console.log(theme)

    if(nameTheme.theme!=="dark" || nameTheme.theme==="bright"){
        console.log("rice")
        // var bgColor={
        //   "backgroundColor":"#E8DFCA",
        //    "color":"rgb(39, 39, 39)"
        // }
        var imgSrc="/images/mainLogo.jpg"
        var sliderText={
            color:"white",
            "textShadow": "0 0px 2px black",
            sup:{
                color:"rgb(0, 151, 0)",
                textShadow:"none"
                // color:"rgb(0, 110, 33)"
            },
            yellow:{
                color:"rgb(141, 66, 16)",
                fontWeight:"bold"
            }
            
        }
        var justText={
            // color:"rgb(49, 42, 3)",
            color:"#503b29",
            "textShadow": "0 0px 1px white",
            extra:{
                color:"rgb(255, 255, 43)"
            },
            button:{
                border:"2px solid rgb(46, 168, 83)",
                backgroundColor:"rgba(255, 255, 255, 0.418)",
                color:"rgb(46, 168, 83)"
            }
        }
        var textObj={
            "color":"brown",
            "boxShadow": "0 7px 2px rgb(182, 153, 117)",
              "border":"2px solid rgb(182, 153, 117)",
            //   "boxShadow":"0 3px 5px #a18f7e",
            //   "backgroundColor":"white",
            //    "boxShadow": "0 0px 10px #a18f7eb2",
               "boxShadow": "0 0px 10px #503b293b",
              "border":".3px solid #503b293b",
            "backgroundColor":"#f3ebe5"
            // "backgroundColor":"white"
            //   "backgroundColor":"rgb(226, 194, 154)",
        }
        var innerBoxesHeaders="rgb(39, 39, 39)"
        var innerTexts="rgb(59, 59, 59)"
        var headerTexts="brown"
        // var headerTexts="rgb(83, 83, 83)"
        // var header="rgb(230, 208, 181)"
        var header="white"
        // var header2=" linear-gradient(#a18f7eb2, #a18f7eb2, white)"
        var header2=" linear-gradient(#a18f7eb2, #a18f7eb2, white)"
        // var header2="#a18f7eb2"
        var header3="#503b29"
        var header3Extra="#503b29"
        var header4="transparent"
        // var header2=" linear-gradient(#a18f7e, #a18f7e, white)"
        // var header2=" linear-gradient(#a18f7e, #a18f7e, white)"
        // var header2=" linear-gradient(rgb(119, 97, 68), rgb(230, 208, 181))"
        // var innerBoxes="rgb(226, 194, 154)"
        // var innerBoxesShadow="0 7px 0px rgb(182, 153, 117)"
        var boxObj={
            "color":"brown",
            // "boxShadow": "0 7px 10px #503b293b",
            "boxShadow": "0 0px 10px #503b293b",
              "border":".3px solid #503b293b",
            //   "backgroundColor":"#a79661",
            //   "backgroundColor":"rgb(226, 194, 154)",
              "backgroundColor":"#f3ebe5",
            //   "backgroundColor":"white",
            //   "backgroundColor":"whitesmoke",
              greenText:{
                color:"green"
              }
        }
        // var innerBoxesHeaders=""
        var innerBoxesTexts={
            "color":"#503b29",
            // "textShadow":"0 0 1px black",
            icon:{
                "color":"brown",
                // border:".6px solid brown"
            },
            icon1:{
                "color":"brown",
                border:".6px solid brown"
            },
            button:{
                "color":"brown",
                border:".6px solid brown"
            },
            brise:{
                "color":"#503b29",
                "textShadow":"0 0 1px white"
                // border:".6px solid brown"
            },
        }
        var footer={
            background:"#503b29c9",
            footerInner:{
                boxShadow:"0 4px 0 #866244"
            }
            // background:"rgba(0, 0, 0, 0.459)"
        }
        var buttons={
            "borderColor":"rgb(59, 59, 59)",
            "color":"rgb(59, 59, 59)"
        }
      }
      else if(nameTheme.theme==="dark"){
        var sliderText={
            color:"",
            "textShadow": "",
            
        }
        var justText={
            color:"",
            "textShadow": "",
            extra:{
                color:""
            },
            button:{
                border:"",
                backgroundColor:"",
                color:""
            }
        }
        var textObj={
            "color":"",
            "boxShadow": "",
              "border":"",
              "backgroundColor":"",
        }
        var innerBoxesHeaders=""
        var innerTexts=""
        var headerTexts=""
        var header=""
        var header2=""
        var bg=""
        // var innerBoxes="rgb(226, 194, 154)"
        // var innerBoxesShadow="0 7px 0px rgb(182, 153, 117)"
        var boxObj={
            "color":"",
            "boxShadow": "",
              "border":"",
              "backgroundColor":"",
              greenText:{
                color:""
              }
        }
        // var innerBoxesHeaders=""
        var innerBoxesTexts={
            "color":"",
            "textShadow":"",
            icon:{
                "color":"",
                // border:".6px solid "
            },
            icon1:{
                "color":"",
                border:" "
            },
            button:{
                "color":"",
                border:""
            },
            brise:{
                "color":"",
                "textShadow":""
                // border:".6px solid brown"
            },
        }
        var footer={
            background:""
        }
        var buttons={
            "borderColor":"",
            "color":""
        }
      }

    useEffect(()=>{
    let val=100
    let counter=0
    let arr=sliderIndiv.current.childNodes
    let circlesBox=circles.current.childNodes
    if(circles===undefined)return;
        else{
            counter++
            circlesBox.forEach((item, index)=>{
                item.addEventListener('click', ()=>{
                    counter=index
                    if(counter>=4) counter=0
                    let newOutput=val*counter
                    circlesBox.forEach((item, index)=>{
                        item.style.backgroundColor="white"
                     })
                    circlesBox[index].style.backgroundColor="brown"
                    if(sliderIndiv===undefined) return;
                    else{
                    arr.forEach((item, index) => {
                    item.style.transform=`translateX(-${newOutput}%)`
                    });
                    }
                })
            })
        };
    setInterval(()=>{
        counter++
        if(counter>=4) counter=0
        let newOutput=val*counter
        if(sliderIndiv===undefined) return;
        else{
        arr.forEach((item, index) => {
        item.style.transform=`translateX(-${newOutput}%)`
        });
        }
        circlesBox.forEach((item, index)=>{
            item.style.backgroundColor="white"
         })
          circlesBox[counter].style.backgroundColor="brown"
    }, 3000)
      },[sliderIndiv])


    useEffect(()=>{
    let val=100
    let counter=0
    let arr=gainers.current.childNodes
    setInterval(()=>{
        counter++
        if(counter===arr.length) counter=0
        let newOutput=val*counter
        if(gainers===undefined) return;
        else{
        arr.forEach((item, index) => {
        item.style.transform=`translateY(-${newOutput}%)`
        });
        }
    }, 2000)
      },[gainers])

    useEffect(()=>{
    let val=100
    let counter=0
    let arr=traders.current.childNodes
    setInterval(()=>{
        counter++
        if(counter===arr.length) counter=0
        let newOutput=val*counter
        if(traders===undefined) return;
        else{
        arr.forEach((item, index) => {
        item.style.transform=`translateY(-${newOutput}%)`
        });
        }
    }, 2000)
      },[traders])

      //newlyAdded
      const [ConnectWallet, setConnectWallet]=useState("none")
      const [wrapper, setWrapper]= useState("none")
      const closePopup=()=>{
        setWrapper("none")
        setConnectWallet("none")
    }

    const handleConnectWallet=()=>{
       setConnectWallet("flex")
       setWrapper("flex")
    }
  return (
<div>
<Header/>
<div className='homeContainer' style={{"backgroundColor":header, "color":headerTexts}}>
<div className='homeInner' style={{"background":header, "color":headerTexts}}>
<div className='section1' style={{"background":header2, "color":headerTexts}}>
    <div className='sectionInner' style={{"background":header4, "color":headerTexts}}>
    <div className='secA' >
<h1 style={{"color":header3, textShadow:"none"}}>An <span style={{color:header3Extra}}>Eagle Protocol</span> on <span className='brise' style={{color:header3Extra}}>brise Chain</span> that Goes Beyond AMM, NFT, and GamePad.
</h1>
{/* <div className="box">
    <div className='boxInner'> 
        <span>Total Value Locked (TVL)</span>
        <span className='bold'>7851</span>
    </div>
    <div className='boxInner'>
        <span>vBABY Holders</span>
        <span className='bold'>7851</span>
    </div>
</div> */}
</div>
<div className='secB' style={{background:"",borderRadius:"50%"}}>
{/* <img src='images/eagle1-removebg-preview.png'></img> */}
<img style={{borderRadius:"50%"}} src={'/images/newLogo-removebg-preview.png'}></img>
</div>
    </div>
</div>
{/* announcement section */}
<div className='section3' style={textObj}>
<div className="one">
<h1 style={justText}>Trending</h1>
<span style={{...justText,"fontSize":"15px"}}>Check what's trending in crypto</span>
</div>
<div className='two_trending'>
<div className='topGainers'>
<div className='head' style={justText}>Top Gainers</div>
    <div className='values' ref={gainers}>
        { section3Obj.map((item, i)=>{
            let val=100
            let counter=-1
            return(
                <div className='value_indiv'>
                <img src={item.img}></img>
                    <div className='more'>
                    <div className='title'>{item.head}</div>
                    <div className='detail'>
                        <h3>${item.amount}</h3>
                        <span >+{item.percent}%</span>
                    </div>
                </div>
                </div>
            )
        })}
    </div>
</div>
<div className='topTradingVolume'>
<div className='head' style={justText}>Top Traders</div>
<div className='values' ref={traders}>
        { section3Obj2.map((item, i)=>{
            let val=100
            let counter=-1
            return(
                <div className='value_indiv'>
                <img src={item.img}></img>
                    <div className='more'>
                    <div className='title'>{item.head}</div>
                    <div className='detail'>
                        <h3>${item.amount}</h3>
                        <span >+{item.percent}%</span>
                    </div>
                </div>
                </div>
            )
        })}
    </div>
</div>
<div className='promoted'>
<div className='head' style={justText}>Top Promoted</div>
    <div className='values'>
    <div className='value_indiv'>
    <img src='images/BNB.png'></img>
        <div className='more'>
        <div className='title'>vlk</div>
        <div className='detail'>
            <h3>$0.044132</h3>
            <span >+35.00%</span>
        </div>
    </div>
    </div>
    </div>
</div>
</div>
<div className='seemore'>
    <a href='#'><span style={justText}>See more</span></a>
</div>
</div> 
{/* <div className='section2'>
<div className='iconDivs'>
<img src="images/BNB.png"></img>
<div className="name_Value">
    <div className='oneVal'>
        <span>Baby</span>
        <span>0.63%</span>
    </div>
    <h3>$0.05</h3>
</div>
</div>
<div className='iconDivs'>
<img src="images/BTC.png"></img>
<div className="name_Value">
    <div className='oneVal'>
        <span>Baby</span>
        <span>0.63%</span>
    </div>
    <h3>$0.05</h3>
</div>
</div>
<div className='iconDivs'>
<img src="images/ETH.png"></img>
<div className="name_Value">
    <div className='oneVal'>
        <span>Baby</span>
        <span>0.63%</span>
    </div>
    <h3>$0.05</h3>
</div>
</div>
<div className='iconDivs'>
<img src="images/eaagle2-removebg-preview.png"></img>
<div className="name_Value">
    <div className='oneVal'>
        <span>Baby</span>
        <span>0.63%</span>
    </div>
    <h3>$0.05</h3>
</div>
</div>
<div className='linkk'>
    <a href='#'><span></span>All market <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
</div>
</div> */}
<div className='announcement'>
    <div className='innerr'>
        <Marquee speed={100} gradient={false}>
            <div className='announceIndiv'>
             <a href='#'><img src="/images/bigert.jpg"></img></a>
            </div>
            <div className='announceIndiv'>
             <a href='#'><img src="/images/brise.jpg"></img></a>
            </div>
            <div className='announceIndiv'>
             <a href='#'><img src="/images/bitgert2.jpg"></img></a>
            </div>
            <div className='announceIndiv'>
             <a href='#'><img src="/images/bitgert3.jpg"></img></a>
            </div>
            <div className='announceIndiv'>
             <a href='#'><img src="/images/bitgert4.jpg"></img></a>
            </div>
            <div className='announceIndiv'>
             <a href='#'><img src="/images/bitgert5.jpg"></img></a>
            </div>
            <div className='announceIndiv'>
             <a href='#'><img src="/images/bitgert6.jpg"></img></a>
            </div>
        </Marquee>
    </div>
</div>


<div className='SliderSection' style={{"display":"none"}}>
    <div className='slide' ref={sliderIndiv}>
    {
    slider.map((item, index)=>{
        return(
            <div className='sliderIndiv'>
                <a href='#'><img src={item}></img> </a>
            </div>
        )
    })
}
    </div>
<div className='circles' ref={circles}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
</div>
</div>
{/* earn baby token in pools*/}
<div className='section_farms'>
<h2 style={justText}>Earn EAGLE & Tokens in Farms and Pools</h2>
<div className='cont'>
    <div className='indivv' style={boxObj}>
        <img src='images/BNB.png'></img>
        <div className='two'>
            <h4 style={{...justText, "fontSize":"14px"}}>Earn EAGLE</h4>
            <span style={{...sliderText.yellow,"fontSize":"14px"}}>EAGLE-USDT LP</span>
        </div>
        <div className='three'>
            <span style={{...sliderText.yellow,"fontSize":"14px"}}>APR</span>
            <h4 style={{...justText, "fontSize":"14px"}}>% + %</h4>
        </div>
        <button style={justText.button}>Stake</button>
        {/* <button onClick={()=>{redirectt('/Farms_earnEAGLE')}} style={justText.button}>Stake</button> */}
    </div>
    <div className='indivv' style={boxObj}>
        <img src='images/BTC.png'></img>
        <div className='two'>
            <h4 style={{...justText, "fontSize":"14px"}}>Earn EAGLE</h4>
            <span style={{...sliderText.yellow,"fontSize":"14px"}}>EAGLE-USDT LP</span>
        </div>
        <div className='three'>
            <span style={{...sliderText.yellow,"fontSize":"14px"}}>APR</span>
            <h4 style={{...justText, "fontSize":"14px"}}>% + %</h4>
        </div>
        <button style={justText.button}>Stake</button>
        {/* <button onClick={()=>{redirectt('/Farms_earnEAGLE')}} style={justText.button}>Stake</button> */}
    </div>
    <div className='indivv' style={boxObj}>
        <img src='images/ETH.png'></img>
        <div className='two'>
            <h4 style={{...justText, "fontSize":"14px"}}>Earn EAGLE</h4>
            <span style={{...sliderText.yellow,"fontSize":"14px"}}>EAGLE-USDT LP</span>
        </div>
        <div className='three'>
            <span style={{...sliderText.yellow,"fontSize":"14px"}}>APR</span>
            <h4 style={{...justText, "fontSize":"14px"}}>% + %</h4>
        </div>
        <button style={justText.button}>Stake</button>
        {/* <button onClick={()=>{redirectt('/Pools_earnEAGLE')}} style={justText.button}>Stake</button> */}
    </div>
    <div className='indivv' style={boxObj}>
        <img src='images/BNB.png'></img>
        <div className='two'>
            <h4 style={{...justText, "fontSize":"14px"}}>Earn EAGLE</h4>
            <span style={{...sliderText.yellow,"fontSize":"14px"}}>EAGLE-USDT LP</span>
        </div>
        <div className='three'>
            <span style={{...sliderText.yellow,"fontSize":"14px"}}>APR</span>
            <h4 style={{...justText, "fontSize":"14px"}}>% + %</h4>
        </div>
        <button style={justText.button}>Stake</button>
        {/* <button onClick={()=>{redirectt('/Pools_earnEAGLE')}} style={justText.button}>Stake</button> */}
    </div>
</div>
</div>
<div className='game_community'>
    <div className='gameInner'>
    <div className='each'>
        <h2 style={justText}>GamePad</h2>
        <div className='inner' style={boxObj}>
            <img style={{border:` .5px solid ${innerBoxesTexts.brise.color}`}} src='/images/gamePad.jpg'></img>
            {/* <img src=''></img> */}
            <div className='more'>
                <p style={{...justText, textShadow:"none"}}>Eagle Protocol GamePad will provide a series of gaming pre-launch support, such as IGO (Initial Gaming Assets Offerings),
                        Farms, Pools, NFT, Marketplace, etc.
                </p>
                {/* <p></p> */}
                <button style={innerBoxesTexts.button}>Learn more</button>
        </div>
    </div>
</div>
    <div className='each'>
        <h2 style={justText}>Join Community</h2>
        <div className='inner' style={boxObj}>
        <img style={{border:` .5px solid ${innerBoxesTexts.brise.color}`}} src='/images/community.jpg'></img>
            {/* <img src=''></img> */}
            <div className='more'>
                <p style={{...justText, textShadow:"none"}}>Join our vibrant community of game players and NFT enthusiasts and learn
                     all the latest tips and tricks.
                </p>
                <div className='icons' style={innerBoxesTexts.icon1} >
                <i style={innerBoxesTexts.icon} class="fa fa-facebook" aria-hidden="true"></i>
                <i style={innerBoxesTexts.icon} class="fa fa-twitter" aria-hidden="true"></i>
                <i style={innerBoxesTexts.icon} class="fa fa-telegram" aria-hidden="true"></i>
                <i style={innerBoxesTexts.icon} class="fa fa-reddit" aria-hidden="true"></i>
                </div>
        </div>
        </div>
    </div>
    </div>
</div>
<div className='Discover'>
    <div className='one'>
        <h1 style={justText}>NFT Market</h1>
        <a href="#"><span style={justText}>View all</span></a>
    </div>
    <div className='two'>
      <div className='inner' style={boxObj}>
      <img style={{border:` .5px solid ${innerBoxesTexts.brise.color}`}} src='/images/nft.jpg'></img>
        <div className='more1'>
            <span style={{...justText, fontWeight:"bold"}}>Eagle NFT</span>
            <h2 style={innerBoxesTexts}>Eagle 01</h2>
        </div>
        <div className='more2' style={{borderTop:` .5px solid ${innerBoxesTexts.brise.color}`}}>
            <span style={innerBoxesTexts.brise}>Price</span>
            <div className='moreInner'>
                <h2 style={innerBoxesTexts.brise}>BRISE</h2>
                <span style={innerBoxesTexts.brise}>=$</span>
            </div>
        </div>
      </div>
      <div className='inner' style={boxObj}>
      <img style={{border:` .5px solid ${innerBoxesTexts.brise.color}`}} src='/images/nft2.jpg'></img>
        <div className='more1'>
            <span style={{...justText, fontWeight:"bold"}}>Eagle NFT</span>
            <h2 style={innerBoxesTexts}>EAGLE 02</h2>
        </div>
        <div className='more2' style={{borderTop:` .5px solid ${innerBoxesTexts.brise.color}`}}>
            <span style={innerBoxesTexts.brise}>Price</span>
            <div className='moreInner'>
                <h2 style={innerBoxesTexts.brise}>BRISE</h2>
                <span style={innerBoxesTexts.brise}>=$</span>
            </div>
        </div>
      </div>
      <div className='inner' style={boxObj}>
      <img style={{border:` .5px solid ${innerBoxesTexts.brise.color}`}} src='/images/nft3.jpg'></img>
        <div className='more1'>
            <span style={{...justText, fontWeight:"bold"}}>Eagle NFT</span>
            <h2 style={innerBoxesTexts}>EAGLE 03</h2>
        </div>
        <div className='more2' style={{borderTop:` .5px solid ${innerBoxesTexts.brise.color}`}}>
            <span style={innerBoxesTexts.brise}>Price</span>
            <div className='moreInner'>
                <h2 style={innerBoxesTexts.brise}>BRISE</h2>
                <span style={innerBoxesTexts.brise}>=$</span>
            </div>
        </div>
      </div>
      <div className='inner' style={boxObj}>
      <img style={{border:` .5px solid ${innerBoxesTexts.brise.color}`}} src='/images/nft4.jpg'></img>
        <div className='more1'>
            <span style={{...justText, fontWeight:"bold"}}>Eagle NFT</span>
            <h2 style={innerBoxesTexts}>Eagle 04</h2>
        </div>
        <div className='more2' style={{borderTop:` .5px solid ${innerBoxesTexts.brise.color}`}}>
            <span style={innerBoxesTexts.brise}>Price</span>
            <div className='moreInner' >
                <h2 style={innerBoxesTexts.brise}>BRISE</h2>
                <span style={innerBoxesTexts.brise}>=$</span>
            </div>
        </div>
      </div>
    </div>
</div>
{/* why choose us? */}
<div className='whyChooseUs'>
    <h1 style={justText}>Why choose us?</h1>
    <div className="reasons">
        <div className='indiv' style={boxObj}>
            <img src='/images/trade-removebg-preview.png'></img>
            <h3 style={innerBoxesTexts.icon}>Trade to earn</h3>
            <p style={{...justText, textShadow:"none"}}>The more you swap, the more you earn. Get free EAGLE as reward for almost every trade</p>
        </div>
        <div className='indiv' style={boxObj}>
            <img src='/images/stake-removebg-preview.png'></img>
            <h3 style={innerBoxesTexts.icon}>Stake to Earn</h3>
            <p style={{...justText, textShadow:"none"}}>Multiply your EAGLE with multiple choices. Stake in Pools, Farms, and Vaults to earn bountiful rewards with competitive APRs.</p>
        </div>
        <div className='indiv' style={boxObj}>
            <img src='/images/task-removebg-preview.png'></img>
            <h3 style={innerBoxesTexts.icon}>Task to Earn</h3>
            <p style={{...justText, textShadow:"none"}}>Pick up your good luck. Win huge rewards by accomplishing simple tasks.</p>
        </div>
        <div className='indiv' style={boxObj}>
            <img src='images/eagle3-removebg-preview.png'></img>
            <h3 style={innerBoxesTexts.icon}>Smart Router</h3>
            <p style={{...justText, textShadow:"none"}}>Trade instantly by one click. Trade over 90% of BRC 20 Tokens with better slippages and lower fees.</p>
        </div>
        <div className='indiv' style={boxObj}>
            <img src='/images/download-removebg-preview.png'></img>
            <h3 style={innerBoxesTexts.icon}>NFT Market</h3>
            <p style={{...justText, textShadow:"none"}}>Meet with your NFT crush. Go crazy shopping for the hottest & newest NFTs with advanced shopping experience.</p>
        </div>
        {/* <div className='indiv' style={boxObj}>
            <img src='images/eagle6-removebg-preview.png'></img>
            <h3 style={innerBoxesTexts.icon}>One-Stop Metaverse</h3>
            <p style={{...justText, textShadow:"none"}}>Originate from DeFi, and go beyond MetaFi. A one-stop platform to meet all your needs from AMM, NFT, and GamePad, to Metaverse.</p>
        </div> */}
    </div>
</div>
<div className='footer' style={footer}>
    <div className='first' style={footer.footerInner}>
            <div className='one'>
            <div className='secA'>
                <img src='images/eagle5-removebg-preview.png'></img>
                <div className='more'>
                    <span>EAGLE</span>
                    <h2>$0.47</h2>
                </div>
            </div>
            <div className='secB'>
                <img style={{"width":"2em", "height":"2em"}} src="/images/metaMask.png"></img>
                <button>Buy</button>
            </div>
            </div>
            <div className='two'>
            <div className='indivvv'>
                <span>Max supply</span>
                {/* <h5>1,000,000,000</h5> */}
            </div>
            <div className='indivvv'>
                <span>Circulating Supply</span>
                {/* <h5>278,302,620</h5> */}
            </div>
            <div className='indivvv'>
                <span>Total burned</span>
                {/* <h5>16,836,525</h5> */}
            </div>
            <div className='indivvv'>
                <span>Market cap</span>
                {/* <h5>13,201,670</h5> */}
            </div>
            </div>
    </div>
    <div className='second'>
        <div className='about'>
            <h3>About</h3>
            <div className='aboutSec'>
                <a href="#"><span>Contact</span></a>
                <a href=""><span>Brand</span></a>
                <a href=""><span>Docs</span></a>
                <a href=""><span>Blog</span></a>
            </div>
        </div>
        <div className='product'>
            <h3>product</h3>
            <div className='productSec'>
            <a href="#"><span>Exchange</span></a>
                <a href=""><span>Farms</span></a>
                <a href=""><span>Pools</span></a>
                <a href=""><span>Club</span></a>
            </div>
        </div>
        <div className='services'>
            <h3>services</h3>
            <div className='servicesSec'>
            <a href="#"><span>Eagle Token</span></a>
                <a href=""><span>Apply for NFT Market</span></a>
                <a href=""><span>Apply for Pre-Launch support</span></a>
                {/* <a href=""><span>Blog</span></a> */}
            </div>
        </div>
    </div>
    <div className='third'>
        <h1>Community</h1>
        <div className='icons'>
            <a href='https://t.me/eagleprotocol'><i class="bi bi-telegram"></i></a>
            <a href='eagleprotocoldex@gmail.com'><i class="bi bi-envelope-fill"></i></a>
            <a href='https://discord.gg/enSh4TegqB'><i class="bi bi-discord"></i></a>
            <a href='https://twitter.com/Eagleprotocol'><i class="bi bi-twitter"></i></a>
        </div>
    </div>
</div>
</div>

<div onClick={closePopup} className="popupSection" style={{"display":wrapper}}></div>
{/* unlockWallet */}
<div className='connectWallet' style={{"display":ConnectWallet}}>
<div className='first'>
       <span>Connect to a wallet</span>
       <i onClick={closePopup} class="bi bi-x"></i>
</div>
<div className='indivWallets'>
    {connectWallet.map((item, index)=>{
        <a href={item.link} key={index} style={{fontWeight:"bold"}}>
        <div className='indiv'>
        <span>{item.name}</span>
        <img src={item.img}></img>
        </div>
        </a>
    })}
   
</div>
</div>
</div>
</div>
  )
}

var section3Obj=[
    {
        "img":"images/BNB.png",
        "head":"vlk",
        "amount":"0.044132",
        "percent":"35.00"
    },
    {
        "img":"images/BNB.png",
        "head":"ABC",
        "amount":"0.044132",
        "percent":"35.00"
    },
    {
        "img":"images/eaagle2-removebg-preview.png",
        "head":"CBN",
        "amount":"0.044132",
        "percent":"35.00"
    }
]
var section3Obj2=[
    {
        "img":"images/BNB.png",
        "head":"vlk",
        "amount":"0.044132",
        "percent":"35.00"
    },
    {
        "img":"images/BNB.png",
        "head":"ABC",
        "amount":"0.044132",
        "percent":"35.00"
    },
    {
        "img":"images/BTC.png",
        "head":"BTC",
        "amount":"0.044132",
        "percent":"35.00"
    },
    {
        "img":"images/ETH.png",
        "head":"CBN",
        "amount":"0.044132",
        "percent":"35.00"
    },
    {
        "img":"images/eaagle2-removebg-preview.png",
        "head":"CBN",
        "amount":"0.044132",
        "percent":"35.00"
    }
]

var slider=[
    "/images/bitgert7.jpg",
    "/images/bitgert6.jpg",
    "/images/bigert.jpg",
    "/images/bitgert8.jpg",
    "/images/brise.jpg",
    "/images/bitgert5.jpg",
    "/images/marketting.jpg"
]
var announcements=[
    "images/perpetual.png",
    "images/didOnline.png",
    "images/perpetual.png",
    "images/didOnline.png",
    "images/perpetual.png",
    "images/didOnline.png",
    "images/perpetual.png",
    "images/perpetual.png"
]

var connectWallet=[
    {
        name:"Metamask",
        link:"",
        img:"/images/metaMask.png",
    },
    {
        name:"Coinbase",
        link:"",
        img:"/images/coinBase.png",
    },
    {
        name:"Trustwallet",
        link:"",
        img:"/images/trustWallet-removebg-preview.png",
    },
    {
        name:"BNB Connect",
        link:"",
        img:"/images/bnbConnect-removebg-preview.png",
    },
    {
        name:"SafePal",
        link:"",
        img:"/images/safepal-removebg-preview.png",
    },
    {
        name:"walletConnect",
        link:"",
        img:"/images/walletConnect-removebg-preview.png",
    },
]