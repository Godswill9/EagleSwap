import Cookies from "js-cookie";
import React, { useState, useRef, useEffect } from "react";
import "./header.css";
import Theme from "./theme";
// import "./pages/swap.css"
// import './pages/Trade.css'

export default function Header() {
  // const[header, setHeader]=useState("")
  // const[bg, setbg]=useState("")
  // const[innerBoxes, setinnerBoxes]=useState("")
  // const[innerBoxesHeaders, setinnerBoxesHeaders]=useState("")
  // const[innerBoxesTexts, setinnerBoxesTexts]=useState("")
  // const[buttons, setbuttons]=useState({

  // })
  // const[footer, setFooter]=useState("")
  useEffect(()=>{
    if(Cookies.get().theme===""){
        Cookies.set("theme", "dark")
      }
},[])
  const toggle1 = useRef();
  const toggle2 = useRef();
  const toggle3 = useRef();
  const toggle4 = useRef();
  const toggle5 = useRef();
  const [namee, setName] = useState("none");
  const [namee2, setName2] = useState("none");
  const [namee3, setName3] = useState("none");
  const [namee4, setName4] = useState("none");
  const [namee5, setName5] = useState("none");
  const [namee6, setName6] = useState("none");
  const [namee7, setName7] = useState("none");
  const [navBar, setnavBar] = useState("0px");
  const [ConnectWalletHead, setConnectWalletHead]=useState("none")
  const [wrapper, setWrapper]= useState("none")
  
  const[themeDrop, setThemeDrop]=useState("false")
  const [themeProp, setThemeProp]=useState("dark")

  const [disable1, setDisable1]=useState("false")
  const [disable2, setDisable2]=useState("false")

  const drop={
    height:"6em",
    visibility:"visible"
  }
  const handleDropTheme=()=>{
      if(themeDrop==="true"){
        setThemeDrop("false")
      }else if(themeDrop==="false"){
        setThemeDrop("true")
      }
      setConnectWalletHead("none")
  }
// const handleThemeProp=()=>{
//   if(themeProp==="bright")return;
//   Cookies.set("theme", "bright")
//   setThemeProp("bright")
//   // window.location.reload();
// }
// const handleThemeProp2=()=>{
//   if(themeProp==="dark")return;
//   Cookies.set("theme", "dark")
//   setThemeProp("dark")
// } 

const changeTheme=(val)=>{
  Cookies.set("theme", val)
  setThemeProp(val)
  window.location.reload();
}
useEffect(()=>{
  
  if(setThemeProp==="bright"){
      setDisable1("true")
      setDisable2("false")
      setThemeDrop("false")
      
  }
  if(setThemeProp==="dark"){
      setDisable2("true")
      setDisable1("false")
      setThemeDrop("false")
  }
},[])

var bgColor={}
// useEffect(()=>{
  const nameTheme=Cookies.get()

  // console.log(nameTheme.theme)
  if(nameTheme.theme!=="dark" || nameTheme.theme==="bright"){
    // console.log("rice")
    var bgColor={
      "backgroundColor":"#E8DFCA",
       "color":"rgb(39, 39, 39)"
    }
    var innerBoxesHeaders="rgb(39, 39, 39)"
    var innerTexts="rgb(59, 59, 59)"
    var headerTexts="rgb(83, 83, 83)"
    // var header=""
    var header="#e6d9cde1" 
    // var header="rgba(232, 223, 202, 0.705)"
    var header2="#4d4026"
    var bg=""
    var innerBoxes=""
    // var innerBoxesHeaders="" 
    var innerBoxesTexts=""
    var buttons={
        "borderColor":"rgb(59, 59, 59)",
        "color":"rgb(59, 59, 59)"
    }
    var justText={
      color:"rgb(49, 42, 3)"
    }
      var bgColor={
          "backgroundColor":"rgb(230, 208, 181)",
          color:"rgb(83, 83, 83)"
        }
    var boxObj={
      "color":"white",
      "boxShadow": "0 7px 0px rgb(182, 153, 117)",
        "border":"2px solid rgb(182, 153, 117)",
        "backgroundColor":"rgb(226, 194, 154)",
        headText:{
          color:"rgba(53, 37, 0, 0.966)",
        },
        moreText:{
          color:"rgba(54, 38, 0, 0.966)",
          main:{
            color:"rgba(189, 132, 0, 0.966)",
          }
        }
  }

  //   var innerBoxesHeaders=""
  //   var innerTexts=""
  //   var headerTexts=""
  //   var header=""
  //   // var header="rgba(232, 223, 202, 0.705)"
  //   var header2=""
  //   var bg=""
  //   var innerBoxes=""
  //   // var innerBoxesHeaders="" 
  //   var innerBoxesTexts=""
  //   var buttons={
  //       "borderColor":"",
  //       "color":""
  //   }
  //   var justText={
  //     color:""
  //   }
  //     var bgColor={
  //         "backgroundColor":"",
  //         color:""
  //       }
  //   var boxObj={
  //     "color":"white",
  //     "boxShadow": "",
  //       "border":"",
  //       "backgroundColor":"",
  //       headText:{
  //         color:"",
  //       },
  //       moreText:{
  //         color:"",
  //         main:{
  //           color:"",
  //         }
  //       }
  // }

  }
  else if(nameTheme.theme==="dark"){
      var bgColor={
          // "backgroundColor":"blue"
        }
      
        var innerBoxesHeaders=""
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
// })


// console.log(themeProp)

  const handleNav = () => {
    if (navBar === "0px") {
      setnavBar("32em");
      setName("none");
      setName2("none");
      setName3("none");
      setName4("none");
      setName5("none");
      setName6("none");
      setName7("none");
    } else if (navBar === "32em") {
      setnavBar("0px");
      closePopup();
      setThemeDrop("false")
      
    }
  };

  const handleConnectWalletHead=()=>{
    setConnectWalletHead("flex")
    setWrapper("flex")
     setThemeDrop("false")
 }
 const closePopup=()=>{
  setWrapper("none")
  setConnectWalletHead("none")
}

  const click1 = () => {
    if (namee === "none") {
      setName("flex");
      setName2("none");
      setName3("none");
      setName4("none");
      setName5("none");
      setName6("none");
      setName7("none");
    } else if (namee === "flex") {
      setName("none");
    }
  };
  const click2 = () => {
    if (namee2 === "none") {
      setName2("flex");
      setName("none");
      setName3("none");
      setName4("none");
      setName5("none");
      setName6("none");
      setName7("none");
    } else if (namee2 === "flex") {
      setName2("none");
    }
  };
  const click3 = () => {
    if (namee3 === "none") {
      setName3("flex");
      setName("none");
      setName2("none");
      setName4("none");
      setName5("none");
      setName6("none");
      setName7("none");
    } else if (namee3 === "flex") {
      setName3("none");
    }
  };
  const click4 = () => {
    if (namee4 === "none") {
      setName4("flex");
      setName("none");
      setName2("none");
      setName3("none");
      setName5("none");
      setName6("none");
      setName7("none");
    } else if (namee4 === "flex") {
      setName4("none");
    }
  };
  const click5 = () => {
    if (namee5 === "none") {
      setName5("flex");
      setName2("none");
      setName3("none");
      setName4("none");
      setName6("none");
      setName7("none");
    } else if (namee5 === "flex") {
      setName5("none");
    }
  };
  const click6 = () => {
    if (namee6 === "none") {
      setName6("flex");
      setName2("none");
      setName3("none");
      setName4("none");
      setName5("none");
      setName7("none");
    } else if (namee6 === "flex") {
      setName6("none");
    }
  };
  const click7 = () => {
    if (namee7 === "none") {
      setName7("flex");
      setName2("none");
      setName3("none");
      setName4("none");
      setName5("none");
      setName6("none");
    } else if (namee7 === "flex") {
      setName7("none");
    }
  };
  

  return ( 
    <div className="all">
    <div className="Header" style={{"backgroundColor":header, "color":headerTexts}}>
      <div className="logo">
        <a href="/">
          <div style={{backgroundColor:"",borderRadius:"50%", margin:"10px"}}>
          <img style={{borderRadius:"50%", margin:"0px"}} src="/images/newLogo-removebg-preview.png"></img>
          </div>
          <div className="lowerClass">
            <h1 style={{...justText, textShadow:"none"}}>Eagle Protocol</h1>
          </div>
        </a>
      </div>
      <div className="compView">
        <div className="links">
          <div className="link_head">
            <div className="dropDownHead">
              <span>Trade</span>
            </div>
            <div className="dropDownBody"style={{"backgroundColor":header, "color":innerBoxesHeaders}}>
              <div className="inner">
               <a href="/Swap"><div className="innerHead">
                  <div className="oneInner">
                    <h3 style={{"color":innerBoxesHeaders}}>Swap</h3>
                    <span className="headSpan" style={{"color":headerTexts}} >Trade any tokens </span>
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
                </a>
              </div>
              <div className="inner">
              <a href="/liquidity"><div className="innerHead">
                  <div className="oneInner">
                    <h3 style={{"color":innerBoxesHeaders}}>Liquidity</h3>
                    <span className="headSpan" style={{"color":headerTexts}}>Share the trading fees</span>
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
                </a>
              </div>
              <div className="inner">
              <a href="#"><div className="innerHead">
                  <div className="oneInner">
                    <h3 style={{"color":innerBoxesHeaders}}>Perpetual</h3>
                    <span className="headSpan" style={{"color":headerTexts}}>Trade with leverage</span>
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
                </a>
              </div>
            </div>
          </div>
          <div className="link_head">
            <div className="dropDownHead">
              <span>Earn</span>
            </div>
            <div className="dropDownBody"style={{"backgroundColor":header, "color":innerBoxesHeaders}}>
              <div className="inner">
                <div className="innerHeadd">
                  <div className="oneInner">
                    <h3 style={{"color":innerBoxesHeaders}}>Farm</h3>
                    <span className="headSpan" style={{"color":headerTexts}}>Stake EAGLE-LPs to earn</span>
                  </div>
                  {/* <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i> */}
                </div>
                <div className="subLinks">
                <a href="/Farms_earnEAGLE">
                    <span style={{"color":innerTexts}}>
                      <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                      Earn EAGLE

                      {/* <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i> */}
                    </span>
                </a>
                <a href="/Farms_earnALT"> 
                    <span style={{"color":innerTexts}}>
                      <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                      Earn Other Tokens
                      {/* <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i> */}
                    </span>
                </a>
                  
                </div>
              </div>
              <div className="inner">
                <div className="innerHeadd">
                  <div className="oneInner">
                    <h3 style={{"color":innerBoxesHeaders}}>Pools</h3>
                    <span className="headSpan" style={{"color":headerTexts}}>Stake tokens to earn</span>
                  </div>
                  {/* <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i> */}
                </div>
                <div className="subLinks">
                  <a href="/Pools_earnEAGLE">
                  <span style={{"color":innerTexts}}>
                     <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                    Earn EAGLE
                    {/* <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i> */}
                  </span>
                  </a>
                  <a href="/Pools_earnAlt">
                  <span style={{"color":innerTexts}}>
                     <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                    Earn Other Tokens
                    {/* <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i> */}
                  </span>
                  </a>
                </div>
              </div>
              <div className="inner">
                <a href="#">
                <div className="innerHead">
                  <div className="oneInner">
                    <h3 style={{"color":innerBoxesHeaders}}>Vault</h3>
                    <span className="headSpan" style={{"color":headerTexts}}>Stake non-EAGLE LPs to earn</span>
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
                </a>
              </div>
            </div>
          </div>
          <div className="link_head">
            <div className="dropDownHead">
              <span>Fun</span>
          </div>
            <div className="dropDownBody"style={{"backgroundColor":header, "color":innerBoxesHeaders}}>
              {/* <div className="inner">
                <a href="#">
                 <div className="innerHead">
                  <div className="oneInner">
                    <h3 style={{"color":innerBoxesHeaders}}>Lucky BABY</h3>
                    <span className="headSpan" style={{"color":headerTexts}}>Be the lucky one</span>
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
                </a>
              </div> */}
              <div className="inner">
                <a href="#">
                <div className="innerHead">
                  <div className="oneInner">
                    <h3 style={{"color":innerBoxesHeaders}}>Activities</h3>
                    <span className="headSpan" style={{"color":headerTexts}}>coming soon...</span>
                    {/* <span className="headSpan" style={{"color":headerTexts}}>Claim your rewards</span> */}
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
                </a>
              </div>
              <div className="inner">
                <a href="#">
                <div className="innerHead">
                  <div className="oneInner">
                    <h3 style={{"color":innerBoxesHeaders}}>Playground</h3>
                    <span className="headSpan" style={{"color":headerTexts}}>coming soon...</span>
                    {/* <span className="headSpan" style={{"color":headerTexts}}>Play with EAGLE</span> */}
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
                </a>
              </div>
            </div>
          </div>
          <div className="link_head">
            <div className="dropDownHead">
              <a href="#" style={{color:headerTexts}}><span>Land</span></a>
              {/* <span className='icon'><i style={{"fontSize":"17px"}} class="fa fa-arrow-circle-down" aria-hidden="true"></i></span> */}
            </div>
          </div>
          <div className="link_head">
            <div className="dropDownHead">
              <span>NFT</span>
              {/* <span className='icon'><i style={{"fontSize":"17px"}} class="fa fa-arrow-circle-down" aria-hidden="true"></i></span> */}
            </div>
            <div className="dropDownBody"style={{"backgroundColor":header, "color":innerBoxesHeaders}}>
              <div className="inner">
               <a href="#"><div className="innerHead">
                  <div className="oneInner">
                    <h3 style={{"color":innerBoxesHeaders}}>NFT Market</h3>
                    <span className="headSpan" style={{"color":headerTexts}}>coming soon... </span>
                    {/* <span className="headSpan" style={{"color":headerTexts}}>Trade the hottest & newest NFTs </span> */}
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
                </a>
              </div>
              <div className="inner">
               <a href="#"><div className="innerHead">
                  <div className="oneInner">
                    <h3 style={{"color":innerBoxesHeaders}}>My NFTs</h3>
                    <span className="headSpan" style={{"color":headerTexts}}>coming soon... </span>
                    {/* <span className="headSpan" style={{"color":headerTexts}}>Check & list your NFTs </span> */}
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
                </a>
              </div>
              <div className="inner">
                <div className="innerHeadd">
                  <div className="oneInner">
                    <h3 style={{"color":innerBoxesHeaders}}>NFT Stake</h3>
                    <span className="headSpan" style={{"color":headerTexts}}>coming soon...</span>
                    {/* <span className="headSpan" style={{"color":headerTexts}}>Stake NFT to earn</span> */}
                  </div>
                  {/* <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i> */}
                </div>
                <div className="subLinks" style={{display:"none"}}>
                  <a href="#">
                  <span style={{"color":innerTexts}}>
                     <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                    Stake EAGLE Protocol
                    {/* <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i> */}
                  </span>
                  </a>
                  <a href="#">
                  <span style={{"color":innerTexts}}>
                     <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                    Stake Binance NFB
                    {/* <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i> */}
                  </span>
                  </a>
                  <a href="#">
                  <span style={{"color":innerTexts}}>
                     <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                    Stake NFT
                    {/* <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i> */}
                  </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="link_head">
            <div className="dropDownHead">
              <span>GamePad</span>
            </div>
            <div className="dropDownBody"style={{"backgroundColor":header, "color":innerBoxesHeaders}}>
              <div className="inner">
                <a href="#">
                <div className="innerHead">
                  <div className="oneInner">
                    <h3 style={{"color":innerBoxesHeaders}}>IFO</h3>
                    {/* <span className="headSpan" style={{"color":headerTexts}}>Buy new tokens initially offered</span> */}
                    <span className="headSpan" style={{"color":headerTexts}}>coming soon...</span>
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
                </a>
              </div>
              <div className="inner">
                <a href="#">
                <div className="innerHead">
                  <div className="oneInner">
                    <h3 style={{"color":innerBoxesHeaders}}>INO</h3>
                    <span className="headSpan" style={{"color":headerTexts}}>coming soon...</span>
                    {/* <span className="headSpan" style={{"color":headerTexts}}>Buy new NFTs initially offered </span> */}
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
                </a>
              </div>
              {/* <div className="inner">
                <div className="innerHead">
                  <div className="oneInner">
                    <h3 style={{"color":innerBoxesHeaders}}>swap</h3>
                    <span className="headSpan" style={{"color":headerTexts}}>Stake anything</span>
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
              </div> */}
            </div>
          </div>
          <div className="link_head">
            <div className="dropDownHead">
              <span>Membership</span>
             </div>
            <div className="dropDownBody"style={{"backgroundColor":header, "color":innerBoxesHeaders}}>
              <div className="inner">
                <a href="#">
                <div className="innerHead">
                  <div className="oneInner">
                    <h3 style={{"color":innerBoxesHeaders}}>vEAGLE</h3>
                    <span className="headSpan" style={{"color":headerTexts}}>coming soon...</span>
                    {/* <span className="headSpan" style={{"color":headerTexts}}>Earn more with membership</span> */}
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
                </a>
              </div>
              <div className="inner">
                <a href="#">
                <div className="innerHead">
                  <div className="oneInner">
                    <h3 style={{"color":innerBoxesHeaders}}>Club</h3>
                    <span className="headSpan" style={{"color":headerTexts}}>coming soon...</span>
                    {/* <span className="headSpan" style={{"color":headerTexts}}>Get a wealthy EAGLE and join the club</span> */}
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
                </a>
              </div>
              {/* <div className="inner">
                <div className="innerHead">
                  <div className="oneInner">
                    <h3 style={{"color":innerBoxesHeaders}}>swap</h3>
                    <span className="headSpan" style={{"color":headerTexts}}>Stake anything</span>
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
              </div> */}
            </div>
          </div>
          <div className="link_head">
            <div className="dropDownHead ">
              <span style={{ paddingLeft: "20px" }}>More</span>
            </div>
            <div className="dropDownBody"style={{"backgroundColor":header, "color":innerBoxesHeaders}}>
              <div className="inner">
                <a href="#">
                <div className="innerHead">
                  <div className="oneInner">
                    <h3 style={{"color":innerBoxesHeaders}}>Audit</h3>
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
                </a>
              </div>
              <div className="inner">
                <a href="#">
                <div className="innerHead">
                  <div className="oneInner">
                    <h3 style={{"color":innerBoxesHeaders}}>Github</h3>
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
                </a>
              </div>
              <div className="inner">
                <a href="#">
                <div className="innerHead">
                  <div className="oneInner">
                    <h3 style={{"color":innerBoxesHeaders}}>Docs</h3>
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="link2">
          <div className="duo">
            <img src="/images/eaagle2-removebg-preview.png"></img>
            <span>$0.047</span>
          </div>
          <div className="iconss">
            <i style={{"fontSize":"17px","cursor":"pointer"}} onClick={handleDropTheme} class="bi bi-gear"></i>
            <i style={{"fontSize":"17px"}} class="bi bi-people-fill"></i>
            {/* <i style={{"fontSize":"17px"}} style={{"fontSize":"17px"}} class="fa fa-arrow-circle-right icon" aria-hidden="true"></i> */}
          </div>
          <button style={buttons} onClick={handleConnectWalletHead}>Connect</button>
        </div>
      </div> 
      <div className="mobileView">
        {navBar === "32em" ? (
          <i
            style={{"fontSize":"20px"}} class="fa fa-times icon"
            aria-hidden="true"
            onClick={handleNav}
          ></i>
        ) : (
          <i style={{"fontSize":"20px"}} class="fa fa-bars icon" aria-hidden="true" onClick={handleNav}></i>
        )}
      </div>
      <div className="mobileContent" style={{"backgroundColor":header, "color":innerBoxesHeaders, height:navBar}}>
        <div className="oneee">
          <div className="one cont">
            <p style={{"color":innerBoxesHeaders}} onClick={click1}>
              Trade
              {namee === "none" ? (
                <i style={{"fontSize":"17px"}} class="fa fa-arrow-down icon" aria-hidden="true"></i>
              ) : (
                <i style={{"fontSize":"17px"}} class="fa fa-arrow-up icon" aria-hidden="true"></i>
              )}
            </p>
            <div className="drop" ref={toggle1} style={{"backgroundColor":header2, "color":innerBoxesHeaders, display: namee }}>
              <div className="inner">
              <a href="/Swap"><div className="innerHead">
                  <div className="oneInner">
                    <h3>Swap</h3>
                    <span className="headSpan">Trade any tokens </span>
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
                </a>
              </div>
              <div className="inner">
              <a href="/Liquidity"><div className="innerHead">
                  <div className="oneInner">
                    <h3>Liquidity</h3>
                    <span className="headSpan">Share the trading fees</span>
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
                </a>
              </div>
              <div className="inner">
                <a href="">
                <div className="innerHead">
                  <div className="oneInner">
                    <h3>Perpetual</h3>
                    <span className="headSpan">Trade with leverage</span>
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
                </a>
              </div>
            </div>
          </div>
          <div className="one cont">
            <p style={{"color":innerBoxesHeaders}} onClick={click2}>
              Earn
              {namee2 === "none" ? (
                <i style={{"fontSize":"17px"}} class="fa fa-arrow-down icon" aria-hidden="true"></i>
              ) : (
                <i style={{"fontSize":"17px"}} class="fa fa-arrow-up icon" aria-hidden="true"></i>
              )}
            </p>
            <div className="drop" ref={toggle2} style={{"backgroundColor":header2, "color":innerBoxesHeaders, display: namee2 }}>
              <div className="inner">
                <a href="#">
                <div className="innerHead">
                  <div className="oneInner">
                    <h3>Farm</h3>
                    <span className="headSpan">Stake EAGLE-LPs to earn</span>
                  </div>
                  {/* <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i> */}
                </div>
                </a>
                <div className="subLinks">
                <a href="/Farms_earnEAGLE">
                    <span>
                      <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                      Earn EAGLE
                      {/* <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i> */}
                    </span>
                </a>
                <a href="/Farms_earnALT">
                    <span >
                      <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                      Earn Other Tokens
                      {/* <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i> */}
                    </span>
                </a>
                </div>
              </div>
              <div className="inner">
                <a href="#">
                <div className="innerHead">
                  <div className="oneInner">
                    <h3>Pools</h3>
                    <span className="headSpan">Stake tokens to earn</span>
                  </div>
                  {/* <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i> */}
                </div>
                </a>
                <div className="subLinks">
                  <a href="/Pools_earnEAGLE">
                  <span>
                     <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                    Earn EAGLE
                    {/* <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i> */}
                  </span>
                  </a>
                  <a href="/Pools_earnAlt">
                  <span>
                     <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                    Earn Other Tokens
                    {/* <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i> */}
                  </span>
                  </a>
                </div>
              </div>
              <div className="inner">
                <a href="#">
                <div className="innerHead">
                  <div className="oneInner">
                    <h3>Vault</h3>
                    <span className="headSpan">Stake non-EAGLE LPs to earn</span>
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
                </a>
              </div>
            </div>
          </div>
          <div className="one cont">
            <p style={{"color":innerBoxesHeaders}} onClick={click3}>
              Fun
              {namee3 === "none" ? (
                <i style={{"fontSize":"17px"}} class="fa fa-arrow-down icon" aria-hidden="true"></i>
              ) : (
                <i style={{"fontSize":"17px"}} class="fa fa-arrow-up icon" aria-hidden="true"></i>
              )}
            </p>
            <div className="drop" ref={toggle3} style={{"backgroundColor":header2, "color":innerBoxesHeaders, display: namee3 }}>
              {/* <div className="inner">
                <a href="#">
                <div className="innerHead">
                  <div className="oneInner">
                    <h3>swap</h3>
                    <span className="headSpan">Stake anything</span>
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
                </a>
              </div> */}
              <div className="inner">
                <a href="#">
                <div className="innerHead">
                  <div className="oneInner">
                    <h3>Activities</h3>
                    <span className="headSpan">coming soon...</span>
                    {/* <span className="headSpan">Claim your rewards</span> */}
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
                </a>
              </div>
              <div className="inner">
                <a href="#">
                <div className="innerHead">
                  <div className="oneInner">
                    <h3>Playground</h3>
                    <span className="headSpan">coming soon...</span>
                    {/* <span className="headSpan">Play with EAGLE</span> */}
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
                </a>
              </div>
            </div>
          </div>
          <div className="one cont">
            <p style={{"color":innerBoxesHeaders}} onClick={click4}>
              NFT
              {namee4 === "none" ? (
                <i style={{"fontSize":"17px"}} class="fa fa-arrow-down icon" aria-hidden="true"></i>
              ) : (
                <i style={{"fontSize":"17px"}} class="fa fa-arrow-up icon" aria-hidden="true"></i>
              )}
            </p>
            <div className="drop" ref={toggle4} style={{"backgroundColor":header2, "color":innerBoxesHeaders, display: namee4 }}>
              <div className="inner">
                <a href="#">
                <div className="innerHead">
                  <div className="oneInner">
                    <h3>NFT Market</h3>
                    <span className="headSpan">coming soon...</span>
                    {/* <span className="headSpan">Trade the hottest & newest NFTs</span> */}
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
                </a>
              </div>
              <div className="inner">
                <a href="#">
                    <div className="innerHead">
                  <div className="oneInner">
                    <h3>My NFTs</h3>
                    <span className="headSpan">coming soon...</span>
                    {/* <span className="headSpan">Check & list your NFTs</span> */}
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
                </a>
              </div>
              <div className="inner">
                <div className="innerHead">
                  <div className="oneInner">
                    <h3>NFT Stake</h3>
                    <span className="headSpan">coming soon...</span>
                    {/* <span className="headSpan">Stake NFT to earn</span> */}
                  </div>
                  {/* <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i> */}
                </div>
                <div className="subLinks" style={{display:"none"}}>
                  <a href="#">
                  <span>
                     <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                   Stake EAGLE Protocol
                    {/* <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i> */}
                  </span>
                  </a>
                  <a href="#">
                  <span>
                     <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                    Stake Binance NFB
                    {/* <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i> */}
                  </span>
                  </a>
                  <a href="#">
                  <span>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                    Stake NFT
                    {/* <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i> */}
                  </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="one cont">
            <p style={{"color":innerBoxesHeaders}} onClick={click5}>
              Gamepad
              {namee5 === "none" ? (
                <i style={{"fontSize":"17px"}} class="fa fa-arrow-down icon" aria-hidden="true"></i>
              ) : (
                <i style={{"fontSize":"17px"}} class="fa fa-arrow-up icon" aria-hidden="true"></i>
              )}
            </p>
            <div className="drop" ref={toggle5} style={{"backgroundColor":header2, "color":innerBoxesHeaders, display: namee5 }}>
              <div className="inner">
                <a href="#">
                <div className="innerHead">
                  <div className="oneInner">
                    <h3>IFO</h3>
                    <span className="headSpan">coming soon...</span>
                    {/* <span className="headSpan">Buy new tokens initially offered</span> */}
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
                </a>
              </div>
              <div className="inner">
                <a href="#">
                <div className="innerHead">
                  <div className="oneInner">
                    <h3>INO</h3>
                    <span className="headSpan">coming soon...</span>
                    {/* <span className="headSpan">Buy new NFTs initially offered</span> */}
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
                </a>
              </div>
            </div>
          </div>
          <div className="one cont">
            <p style={{"color":innerBoxesHeaders}} onClick={click6}>
              Membership
              {namee6 === "none" ? (
                <i style={{"fontSize":"17px"}} class="fa fa-arrow-down icon" aria-hidden="true"></i>
              ) : (
                <i style={{"fontSize":"17px"}} class="fa fa-arrow-up icon" aria-hidden="true"></i>
              )}
            </p>
            <div className="drop" style={{"backgroundColor":header2, "color":innerBoxesHeaders, display: namee6 }}>
              <div className="inner">
                <a href="#">
                <div className="innerHead">
                  <div className="oneInner">
                    <h3>vEAGLE</h3>
                    <span className="headSpan">coming soon...</span>
                    {/* <span className="headSpan">Earn more with membership</span> */}
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
                </a>
              </div>
              <div className="inner">
                <a href="#">
                <div className="innerHead">
                  <div className="oneInner">
                    <h3>Club</h3>
                    <span className="headSpan">coming soon...</span>
                    {/* <span className="headSpan">Get a wealthy EAGLE and join the club</span> */}
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
                </a>
              </div>
            </div>
          </div>
          <div className="one cont">
            <p style={{"color":innerBoxesHeaders}} onClick={click7}>
              More
              {namee7 === "none" ? (
                <i style={{"fontSize":"17px"}} class="fa fa-arrow-down icon" aria-hidden="true"></i>
              ) : (
                <i style={{"fontSize":"17px"}} class="fa fa-arrow-up icon" aria-hidden="true"></i>
              )}
            </p>
            <div className="drop" style={{"backgroundColor":header2, "color":innerBoxesHeaders, display: namee7 }}>
              <div className="inner">
                <a href="#">
                <div className="innerHead">
                  <div className="oneInner">
                    <h3>Audit</h3>
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
                </a>
              </div>
              <div className="inner">
                <a href="#">
                <div className="innerHead">
                  <div className="oneInner">
                    <h3>Github</h3>
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
                </a>
              </div>
              <div className="inner">
                <a href="#">
                <div className="innerHead">
                  <div className="oneInner">
                    <h3>Docs</h3>
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="link2" style={{"backgroundColor":header, "color":innerBoxesHeaders}}>
          <div className="duo">
            <img src="/images/eaagle2-removebg-preview.png"></img>
            <span>$0.037</span> 
          </div>
          <div className="iconss">
            <i style={{"fontSize":"17px", "cursor":"pointer"}} onClick={handleDropTheme} class="bi bi-gear"></i>
            <i style={{"fontSize":"17px"}} class="bi bi-people-fill"></i>
          </div>
          <button style={buttons} onClick={handleConnectWalletHead}>Connect</button>
        </div>
      </div>

      {/* <div onClick={closePopup} className="popupSection" style={{"display":wrapper}}></div> */}
      <div className='connectWallet' style={{"display":ConnectWalletHead}}>
<div className='first'>
       <span>Connect to a wallet</span>
       <i onClick={closePopup} class="bi bi-x"></i>
</div>
<div className='indivWallets'>
   {wallets.map((item, i)=>{
     return(
      <a href={item.link} key={i}>
      <div className='indiv' style={{ boxShadow:"none"}}>
        <span >{item.name}</span>
        <img src={item.img}></img>
      </div>
    </a>
     )
   })}
</div>
</div>
{themeDrop==="true"? <div className="theme" style={drop}>
  <span>Choose a theme</span>
   <div className="second">
     <button onClick={()=>changeTheme("bright")} >DAY</button>
     <button onClick={()=>changeTheme("dark")} >NIGHT</button>
   </div>
</div>:
<div className="theme">
  <span>Choose a theme</span>
   <div className="second">
     {/* <button style={buttons} onClick={handleThemeProp}>DAY</button>
     <button style={buttons} onClick={handleThemeProp2}>NIGHT</button> */}
   </div>
</div>}
<div style={{"display":"none"}}>
{/* <Theme themeType={themeProp}/> */}
</div>
    </div>
    </div>
  );
}


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