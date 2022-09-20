import React, { useState, useRef, useEffect } from "react";
import "./header.css";
// import "./pages/swap.css"
// import './pages/Trade.css'

export default function Header() {
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
    }
  };

  const handleConnectWalletHead=()=>{
    setConnectWalletHead("flex")
    setWrapper("flex")
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
    <div className="Header">
      <div className="logo">
        <a href="/">
          <img src="/images/mainLogo.jpg"></img>
          <div className="lowerClass">
            <h1>Eagle Protocol</h1>
          </div>
        </a>
      </div>
      <div className="compView">
        <div className="links">
          <div className="link_head">
            <div className="dropDownHead">
              <span>Trade</span>
            </div>
            <div className="dropDownBody">
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
              <a href="/liquidity"><div className="innerHead">
                  <div className="oneInner">
                    <h3>Liquidity</h3>
                    <span className="headSpan">Share the trading fees</span>
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
                </a>
              </div>
              <div className="inner">
              <a href="#"><div className="innerHead">
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
          <div className="link_head">
            <div className="dropDownHead">
              <span>Earn</span>
            </div>
            <div className="dropDownBody">
              <div className="inner">
                <div className="innerHeadd">
                  <div className="oneInner">
                    <h3>Farm</h3>
                    <span className="headSpan">Stake EAGLE-LPs to earn</span>
                  </div>
                  {/* <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i> */}
                </div>
                <div className="subLinks">
                <a href="/Farms_earnEAGLE">
                    <span>
                      <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                      Earn EAGLE
                      {/* <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i> */}
                    </span>
                </a>
                <a href="/Farms_earnALT"> 
                    <span>
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
                    <h3>Pools</h3>
                    <span className="headSpan">Stake tokens to earn</span>
                  </div>
                  {/* <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i> */}
                </div>
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
          <div className="link_head">
            <div className="dropDownHead">
              <span>Fun</span>
          </div>
            <div className="dropDownBody">
              {/* <div className="inner">
                <a href="#">
                 <div className="innerHead">
                  <div className="oneInner">
                    <h3>Lucky BABY</h3>
                    <span className="headSpan">Be the lucky one</span>
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
                    <span className="headSpan">Claim your rewards</span>
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
                    <span className="headSpan">Play with EAGLE</span>
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
                </a>
              </div>
            </div>
          </div>
          <div className="link_head">
            <div className="dropDownHead">
              <a href="#"><span>Land</span></a>
              {/* <span className='icon'><i style={{"fontSize":"17px"}} class="fa fa-arrow-circle-down" aria-hidden="true"></i></span> */}
            </div>
          </div>
          <div className="link_head">
            <div className="dropDownHead">
              <span>NFT</span>
              {/* <span className='icon'><i style={{"fontSize":"17px"}} class="fa fa-arrow-circle-down" aria-hidden="true"></i></span> */}
            </div>
            <div className="dropDownBody">
              <div className="inner">
               <a href="/NFT"><div className="innerHead">
                  <div className="oneInner">
                    <h3>NFT Market</h3>
                    <span className="headSpan">Trade the hottest & newest NFTs </span>
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
                </a>
              </div>
              <div className="inner">
               <a href="#"><div className="innerHead">
                  <div className="oneInner">
                    <h3>My NFTs</h3>
                    <span className="headSpan">Check & list your NFTs </span>
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
                </a>
              </div>
              <div className="inner">
                <div className="innerHeadd">
                  <div className="oneInner">
                    <h3>NFT Stake</h3>
                    <span className="headSpan">Stake NFT to earn</span>
                  </div>
                  {/* <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i> */}
                </div>
                <div className="subLinks">
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
          <div className="link_head">
            <div className="dropDownHead">
              <span>GamePad</span>
            </div>
            <div className="dropDownBody">
              <div className="inner">
                <div className="innerHead">
                  <div className="oneInner">
                    <h3>swap</h3>
                    <span className="headSpan">Stake anything</span>
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
              </div>
              <div className="inner">
                <div className="innerHead">
                  <div className="oneInner">
                    <h3>swap</h3>
                    <span className="headSpan">Stake anything</span>
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
              </div>
              <div className="inner">
                <div className="innerHead">
                  <div className="oneInner">
                    <h3>swap</h3>
                    <span className="headSpan">Stake anything</span>
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="link_head">
            <div className="dropDownHead">
              <span>Membership</span>
             </div>
            <div className="dropDownBody">
              <div className="inner">
                <div className="innerHead">
                  <div className="oneInner">
                    <h3>swap</h3>
                    <span className="headSpan">Stake anything</span>
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
              </div>
              <div className="inner">
                <div className="innerHead">
                  <div className="oneInner">
                    <h3>swap</h3>
                    <span className="headSpan">Stake anything</span>
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
              </div>
              <div className="inner">
                <div className="innerHead">
                  <div className="oneInner">
                    <h3>swap</h3>
                    <span className="headSpan">Stake anything</span>
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="link_head">
            <div className="dropDownHead ">
              <span style={{ paddingLeft: "20px" }}>More</span>
            </div>
            <div className="dropDownBody">
              <div className="inner">
                <div className="innerHead">
                  <div className="oneInner">
                    <h3>swap</h3>
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
              </div>
              <div className="inner">
                <div className="innerHead">
                  <div className="oneInner">
                    <h3>swap</h3>
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
              </div>
              <div className="inner">
                <div className="innerHead">
                  <div className="oneInner">
                    <h3>swap</h3>
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="link2">
          <div className="duo">
            <img src="/images/eaagle2-removebg-preview.png"></img>
            <span>$0.037</span>
          </div>
          <div className="iconss">
            <i style={{"fontSize":"17px"}} class="bi bi-gear"></i>
            <i style={{"fontSize":"17px"}} class="bi bi-people-fill"></i>
            {/* <i style={{"fontSize":"17px"}} style={{"fontSize":"17px"}} class="fa fa-arrow-circle-right icon" aria-hidden="true"></i> */}
          </div>
          <button onClick={handleConnectWalletHead}>Connect</button>
        </div>
      </div> 
      <div className="mobileView">
        {navBar === "32em" ? (
          <i
            style={{"fontSize":"17px"}} class="fa fa-times icon"
            aria-hidden="true"
            onClick={handleNav}
          ></i>
        ) : (
          <i style={{"fontSize":"17px"}} class="fa fa-bars icon" aria-hidden="true" onClick={handleNav}></i>
        )}
      </div>
      <div className="mobileContent" style={{ height: navBar }}>
        <div className="oneee">
          <div className="one cont">
            <p onClick={click1}>
              Trade
              {namee === "none" ? (
                <i style={{"fontSize":"17px"}} class="fa fa-arrow-down icon" aria-hidden="true"></i>
              ) : (
                <i style={{"fontSize":"17px"}} class="fa fa-arrow-up icon" aria-hidden="true"></i>
              )}
            </p>
            <div className="drop" ref={toggle1} style={{ display: namee }}>
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
            <p onClick={click2}>
              Earn
              {namee2 === "none" ? (
                <i style={{"fontSize":"17px"}} class="fa fa-arrow-down icon" aria-hidden="true"></i>
              ) : (
                <i style={{"fontSize":"17px"}} class="fa fa-arrow-up icon" aria-hidden="true"></i>
              )}
            </p>
            <div className="drop" ref={toggle2} style={{ display: namee2 }}>
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
                    <span className="headSpan">Stake non-BABY LPs to earn</span>
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
                </a>
              </div>
            </div>
          </div>
          <div className="one cont">
            <p onClick={click3}>
              Fun
              {namee3 === "none" ? (
                <i style={{"fontSize":"17px"}} class="fa fa-arrow-down icon" aria-hidden="true"></i>
              ) : (
                <i style={{"fontSize":"17px"}} class="fa fa-arrow-up icon" aria-hidden="true"></i>
              )}
            </p>
            <div className="drop" ref={toggle3} style={{ display: namee3 }}>
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
                    <span className="headSpan">Claim your rewards</span>
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
                    <span className="headSpan">Play with EAGLE</span>
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
                </a>
              </div>
            </div>
          </div>
          <div className="one cont">
            <p onClick={click4}>
              NFT
              {namee4 === "none" ? (
                <i style={{"fontSize":"17px"}} class="fa fa-arrow-down icon" aria-hidden="true"></i>
              ) : (
                <i style={{"fontSize":"17px"}} class="fa fa-arrow-up icon" aria-hidden="true"></i>
              )}
            </p>
            <div className="drop" ref={toggle4} style={{ display: namee4 }}>
              <div className="inner">
                <a href="#">
                <div className="innerHead">
                  <div className="oneInner">
                    <h3>NFT Market</h3>
                    <span className="headSpan">Trade the hottest & newest NFTs</span>
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
                    <span className="headSpan">Check & list your NFTs</span>
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
                </a>
              </div>
              <div className="inner">
                <div className="innerHead">
                  <div className="oneInner">
                    <h3>NFT Stake</h3>
                    <span className="headSpan">Stake NFT to earn</span>
                  </div>
                  {/* <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i> */}
                </div>
                <div className="subLinks">
                  <a href="#">
                  <span>
                     <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                   Stake BabySwap NFB
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
            <p onClick={click5}>
              Gamepad
              {namee5 === "none" ? (
                <i style={{"fontSize":"17px"}} class="fa fa-arrow-down icon" aria-hidden="true"></i>
              ) : (
                <i style={{"fontSize":"17px"}} class="fa fa-arrow-up icon" aria-hidden="true"></i>
              )}
            </p>
            <div className="drop" ref={toggle5} style={{ display: namee5 }}>
              <div className="inner">
                <a href="#">
                <div className="innerHead">
                  <div className="oneInner">
                    <h3>swap</h3>
                    <span className="headSpan">Stake anything</span>
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
                </a>
              </div>
              <div className="inner">
                <a href="#">
                <div className="innerHead">
                  <div className="oneInner">
                    <h3>swap</h3>
                    <span className="headSpan">Stake anything</span>
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
                </a>
              </div>
              <div className="inner">
                <a href="#">
                <div className="innerHead">
                  <div className="oneInner">
                    <h3>swap</h3>
                    <span className="headSpan">Stake anything</span>
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
                </a>
              </div>
            </div>
          </div>
          <div className="one cont">
            <p onClick={click6}>
              Membership
              {namee6 === "none" ? (
                <i style={{"fontSize":"17px"}} class="fa fa-arrow-down icon" aria-hidden="true"></i>
              ) : (
                <i style={{"fontSize":"17px"}} class="fa fa-arrow-up icon" aria-hidden="true"></i>
              )}
            </p>
            <div className="drop" style={{ display: namee6 }}>
              <div className="inner">
                <a href="#">
                <div className="innerHead">
                  <div className="oneInner">
                    <h3>swap</h3>
                    <span className="headSpan">Stake anything</span>
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
                </a>
              </div>
              <div className="inner">
                <a href="#">
                <div className="innerHead">
                  <div className="oneInner">
                    <h3>swap</h3>
                    <span className="headSpan">Stake anything</span>
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
                </a>
              </div>
              <div className="inner">
                <a href="#">
                <div className="innerHead">
                  <div className="oneInner">
                    <h3>swap</h3>
                    <span className="headSpan">Stake anything</span>
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
                </a>
              </div>
            </div>
          </div>
          <div className="one cont">
            <p onClick={click7}>
              More
              {namee7 === "none" ? (
                <i style={{"fontSize":"17px"}} class="fa fa-arrow-down icon" aria-hidden="true"></i>
              ) : (
                <i style={{"fontSize":"17px"}} class="fa fa-arrow-up icon" aria-hidden="true"></i>
              )}
            </p>
            <div className="drop" style={{ display: namee7 }}>
              <div className="inner">
                <a href="#">
                <div className="innerHead">
                  <div className="oneInner">
                    <h3>swap</h3>
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
                </a>
              </div>
              <div className="inner">
                <a href="#">
                <div className="innerHead">
                  <div className="oneInner">
                    <h3>swap</h3>
                  </div>
                  <i style={{"fontSize":"17px"}} class="bi bi-arrow-right-short"></i>
                </div>
                </a>
              </div>
              <div className="inner">
                <a href="#">
                <div className="innerHead">
                  <div className="oneInner">
                    <h3>swap</h3>
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
            <span>$0.037</span> 
          </div>
          <div className="iconss">
            <i style={{"fontSize":"17px"}} class="bi bi-gear"></i>
            <i style={{"fontSize":"17px"}} class="bi bi-people-fill"></i>
          </div>
          <button onClick={handleConnectWalletHead}>Connect</button>
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
      <a href={item.link}>
      <div className='indiv'>
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
  );
}


var wallets=[
  {
    img:"images/metaMask.png",
    name:"Metamask",
    link:"#"
  },
  {
    img:"images/metaMask.png",
    name:"Metamask",
    link:"#"
  },
  {
    img:"images/metaMask.png",
    name:"Metamask",
    link:"#"
  },
  {
    img:"images/metaMask.png",
    name:"Metamask",
    link:"#"
  },
  {
    img:"images/metaMask.png",
    name:"Metamask",
    link:"#"
  },
]