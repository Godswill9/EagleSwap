import React, {useEffect, useRef, useState} from 'react'
import Header from '../header'
import "./home.css"

export default function Home() {
    const gainers= useRef()
    const traders= useRef()
    const circles= useRef()
    const sliderIndiv= useRef()

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
  return (
<div>
<Header/>
<div className='homeContainer'>
<div className='homeInner'>
<div className='section1'>
    <div className='sectionInner'>
    <div className='secA'>
<h1>A Baby MetaFi on BNB Chain <br></br>
    that Goes Beyond AMM, NFT, and GamePad.
</h1>
<div className="box">
    <div className='boxInner'>
        <span>Total Value Locked (TVL)</span>
        <span className='bold'>7851</span>
    </div>
    <div className='boxInner'>
        <span>vBABY Holders</span>
        <span className='bold'>7851</span>
    </div>
</div>
</div>
<div className='secB'>
{/* <img src='images/eagle1-removebg-preview.png'></img> */}
<img src='images/eagle5-removebg-preview.png'></img>
</div>
    </div>
</div>
<div className='section2'>
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
</div>
<div className='section3'>
<div className="one">
<h1>Trending</h1>
<span>Check what's trending in crypto</span>
</div>
<div className='two_trending'>
<div className='topGainers'>
<div className='head'>Top Gainers</div>
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
                        <span>+{item.percent}%</span>
                    </div>
                </div>
                </div>
            )
        })}
    </div>
</div>
<div className='topTradingVolume'>
<div className='head'>Top Gainers</div>
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
                        <span>+{item.percent}%</span>
                    </div>
                </div>
                </div>
            )
        })}
    </div>
</div>
<div className='promoted'>
<div className='head'>Top Gainers</div>
    <div className='values'>
    <div className='value_indiv'>
    <img src='images/BNB.png'></img>
        <div className='more'>
        <div className='title'>vlk</div>
        <div className='detail'>
            <h3>$0.044132</h3>
            <span>+35.00%</span>
        </div>
    </div>
    </div>
    </div>
</div>
</div>
<div className='seemore'>
    <a href='#'><span>See more</span></a>
</div>
</div>
<div className='SliderSection'>
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
<h2>Earn BABY & Tokens in Farms and Pools</h2>
<div className='cont'>
    <div className='indivv'>
        <img src='images/BNB.png'></img>
        <div className='two'>
            <h4>Earn Baby</h4>
            <span>BABY-USDT LP</span>
        </div>
        <div className='three'>
            <span>APR</span>
            <h4>56.65%+3.86%</h4>
        </div>
        <button>Stake</button>
    </div>
    <div className='indivv'>
        <img src='images/BTC.png'></img>
        <div className='two'>
            <h4>Earn Baby</h4>
            <span>BABY-USDT LP</span>
        </div>
        <div className='three'>
            <span>APR</span>
            <h4>56.65%+3.86%</h4>
        </div>
        <button>Stake</button>
    </div>
    <div className='indivv'>
        <img src='images/ETH.png'></img>
        <div className='two'>
            <h4>Earn Baby</h4>
            <span>BABY-USDT LP</span>
        </div>
        <div className='three'>
            <span>APR</span>
            <h4>56.65%+3.86%</h4>
        </div>
        <button>Stake</button>
    </div>
    <div className='indivv'>
        <img src='images/BNB.png'></img>
        <div className='two'>
            <h4>Earn Baby</h4>
            <span>BABY-USDT LP</span>
        </div>
        <div className='three'>
            <span>APR</span>
            <h4>56.65%+3.86%</h4>
        </div>
        <button>Stake</button>
    </div>
</div>
</div>
<div className='game_community'>
    <div className='gameInner'>
    <div className='each'>
        <h2>GamePad</h2>
        <div className='inner'>
            <img src='images/Stake BFG earn BFG.png'></img>
            <div className='more'>
                <p>BabySwap GamePad will provide a series of gaming pre-launch support, such as IGO (Initial Gaming Assets Offerings),
                        Farms, Pools, NFT, Marketplace, etc.
                </p>
                <button>Learn more</button>
        </div>
    </div>
</div>
    <div className='each'>
        <h2>Join Community</h2>
        <div className='inner'>
            <img src='images/earnAndChill.png'></img>
            <div className='more'>
                <p>Join our vibrant community of game players and NFT enthusiasts and learn
                     all the latest tips and tricks.
                </p>
                <div className='icons'>
                <i class="fa fa-facebook" aria-hidden="true"></i>
                <i class="fa fa-twitter" aria-hidden="true"></i>
                <i class="fa fa-telegram" aria-hidden="true"></i>
                <i class="fa fa-reddit" aria-hidden="true"></i>
                </div>
        </div>
        </div>
    </div>
    </div>
</div>
<div className='Discover'>
    <div className='one'>
        <h1>Discover</h1>
        <span>View all</span>
    </div>
    <div className='two'>
      <div className='inner'>
      <img src='images/earnAndChill.png'></img>
        <div className='more1'>
            <span>Baby wonderland</span>
            <h2>Tiger</h2>
        </div>
        <div className='more2'>
            <span>Price</span>
            <div className='moreInner'>
                <h2>1 BNB</h2>
                <span>=$145</span>
            </div>
        </div>
      </div>
      <div className='inner'>
      <img src='images/Stake BFG earn BFG.png'></img>
        <div className='more1'>
            <span>Baby wonderland</span>
            <h2>Tiger</h2>
        </div>
        <div className='more2'>
            <span>Price</span>
            <div className='moreInner'>
                <h2>1 BNB</h2>
                <span>=$145</span>
            </div>
        </div>
      </div>
      <div className='inner'>
      <img src='images/earnAndChill.png'></img>
        <div className='more1'>
            <span>Baby wonderland</span>
            <h2>Tiger</h2>
        </div>
        <div className='more2'>
            <span>Price</span>
            <div className='moreInner'>
                <h2>1 BNB</h2>
                <span>=$145</span>
            </div>
        </div>
      </div>
      <div className='inner'>
      <img src='images/Stake BFG earn BFG.png'></img>
        <div className='more1'>
            <span>Baby wonderland</span>
            <h2>Tiger</h2>
        </div>
        <div className='more2'>
            <span>Price</span>
            <div className='moreInner'>
                <h2>1 BNB</h2>
                <span>=$145</span>
            </div>
        </div>
      </div>
    </div>
</div>
{/* why choose us? */}
<div className='whyChooseUs'>
    <h1>Why choose us?</h1>
    <div className="reasons">
        <div className='indiv'>
            <img src='images/eagle5-removebg-preview.png'></img>
            <h3>Trade to earn</h3>
            <p>The more you swap, the more you earn. Get free BABY as reward for almost every trade</p>
        </div>
        <div className='indiv'>
            <img src='images/eagle5-removebg-preview.png'></img>
            <h3>Trade to earn</h3>
            <p>The more you swap, the more you earn. Get free BABY as reward for almost every trade</p>
        </div>
        <div className='indiv'>
            <img src='images/eagle3-removebg-preview.png'></img>
            <h3>Trade to earn</h3>
            <p>The more you swap, the more you earn. Get free BABY as reward for almost every trade</p>
        </div>
        <div className='indiv'>
            <img src='images/eagle3-removebg-preview.png'></img>
            <h3>Trade to earn</h3>
            <p>The more you swap, the more you earn. Get free BABY as reward for almost every trade</p>
        </div>
        <div className='indiv'>
            <img src='images/eagle6-removebg-preview.png'></img>
            <h3>Trade to earn</h3>
            <p>The more you swap, the more you earn. Get free BABY as reward for almost every trade</p>
        </div>
        <div className='indiv'>
            <img src='images/eagle6-removebg-preview.png'></img>
            <h3>Trade to earn</h3>
            <p>The more you swap, the more you earn. Get free BABY as reward for almost every trade</p>
        </div>
    </div>
</div>
<div className='footer'>
    <div className='first'>
            <div className='one'>
            <div className='secA'>
                <img src='images/eagle5-removebg-preview.png'></img>
                <div className='more'>
                    <span>BABY</span>
                    <h2>$0.47</h2>
                </div>
            </div>
            <div className='secB'>
                <img src="images/eagle5-removebg-preview.png"></img>
                <button>Buy</button>
            </div>
            </div>
            <div className='two'>
            <div className='indivvv'>
                <span>Max supply</span>
                <h5>1,000,000,000</h5>
            </div>
            <div className='indivvv'>
                <span>Circulating Supply</span>
                <h5>278,302,620</h5>
            </div>
            <div className='indivvv'>
                <span>Total burned</span>
                <h5>16,836,525</h5>
            </div>
            <div className='indivvv'>
                <span>Market cap</span>
                <h5>13,201,670</h5>
            </div>
            </div>
    </div>
    <div className='second'>
        <div className='about'>
            <h3>About</h3>
            <div className='aboutSec'>
                <span>Contact</span>
                <span>Brand</span>
                <span>Docs</span>
                <span>Blog</span>
            </div>
        </div>
        <div className='product'>
            <h3>product</h3>
            <div className='productSec'>
                <span>Contact</span>
                <span>Brand</span>
                <span>Docs</span>
                <span>Blog</span>
            </div>
        </div>
        <div className='services'>
            <h3>services</h3>
            <div className='servicesSec'>
                <span>Contact</span>
                <span>Brand</span>
                <span>Docs</span>
                <span>Blog</span>
            </div>
        </div>
    </div>
    <div className='third'>
        <h1>Community</h1>
        <div className='icons'>
            <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
            <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
            <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
        </div>
    </div>
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
    "images/Stake BFG earn BFG.png",
    "images/earnAndChill.png",
    "images/Stake BFG earn BFG.png",
    "images/earnAndChill.png",
    "images/Stake BFG earn BFG.png",
    "images/earnAndChill.png",
    "images/Stake BFG earn BFG.png"
]