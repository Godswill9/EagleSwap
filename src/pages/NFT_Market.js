import React from 'react'
import Header from '../header'
import Warning from './Warning'
import './NFT.css'

export default function NFT_Market() {
  return (
    <div>
         <Warning/>
        <header>
           <Header/>
        </header>
        <div className='nft_cont'>
            <div className='innerr'>
            <div className='sectionOne'>
                <img src="/images/Market_banner.webp"></img>
            </div>
            <div className='sectionTwo'>
              <div className='first'>
                <h3>Hot Collections</h3>
                <h2>View All <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></h2>
              </div>
             <div className='second'>
              <div className='innerr'>
              {hotCollections.map((items, index)=>{
                    return(
                        <a href={items.link}>
                <div className='indiv'>
                <img className='img1' src={items.bigImg}></img>
                    <div className='more'>
                        <img src={items.smallImg}></img>
                        <div className='detail'>
                            <h3>{items.text}</h3>
                            <h2>{items.amount}</h2>
                        </div>
                    </div>
                </div>
                </a>
                    )
                })}
              </div>
            </div>
            </div>
            <div className='sectionTwo'>
              <div className='first'>
                <h3>Newest Collections</h3>
                <h2>View All <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></h2>
              </div>
             <div className='second'>
             <div className='innerr'>
                {newestCollections.map((items, index)=>{
                    return(
                        <a href={items.link}>
                <div className='indiv'>
                <img className='img1' src={items.bigImg}></img>
                    <div className='more'>
                        <img src={items.smallImg}></img>
                        <div className='detail'>
                            <h3>{items.text}</h3>
                            <h2>{items.amount}</h2>
                        </div>
                    </div>
                </div>
                </a>
                    )
                })}
              </div>
            </div>
            </div>
            <div className='sectionThree'>
              <div className='first'>
                <h3>Discover</h3>
                <div className='filters'>
                    <button>Import List</button>
                    <div className='dropdownn'>
                        <span>ALL</span>
                        <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                    </div>
                    <div className='dropdownn'>
                        <span>ALL</span>
                        <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                    </div>
                    <div className='filt'>
                    <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                    Filter
                    </div>
                </div>
              </div>
              <div className='secondd'>
                <div className='content'>
                    {NFTs.map((items, index)=>{
                        return(
                   <div className='inner'>
                    <img src={items.img}></img>
                    <div className='details'>
                    <div className='more1'>
                        <span>{items.name}</span>
                        <h2>{items.header}</h2>
                    </div>
                    <hr></hr>
                    <div className='more2'>
                    <span>Price</span>
                    <div className='moreInner'>
                        <h2>{items.mainAmount}</h2>
                        <span>={items.amount2}</span>
                        </div>
                    </div>
                    </div>
                </div>
                        )
                    })}
                </div>
                <button>Load more</button>
              </div>
            </div>
            </div>
        </div>
    </div>
  )
}

var NFTs=[
    {
        img:"/images/didOnline.png",
        name:"Baby wonderland",
        header:"Tiger",
        mainAmount:"1 BNB",
        amount2:"$145"
    },
    {
        img:"/images/perpetual.png",
        name:"Baby wonderland",
        header:"Tiger",
        mainAmount:"1 BNB",
        amount2:"$145"
    },
    {
        img:"/images/perpetual.png",
        name:"Baby wonderland",
        header:"Tiger",
        mainAmount:"1 BNB",
        amount2:"$145"
    },
    {
        img:"/images/Stake BFG earn BFG.png",
        name:"Baby wonderland",
        header:"Tiger",
        mainAmount:"1 BNB",
        amount2:"$145"
    },
    {
        img:"/images/didOnline.png",
        name:"Baby wonderland",
        header:"Tiger",
        mainAmount:"1 BNB",
        amount2:"$145"
    },
    {
        img:"/images/Stake BFG earn BFG.png",
        name:"Baby wonderland",
        header:"Tiger",
        mainAmount:"1 BNB",
        amount2:"$145"
    },
    {
        img:"/images/perpetual.png",
        name:"Baby wonderland",
        header:"Tiger",
        mainAmount:"1 BNB",
        amount2:"$145"
    },
    {
        img:"/images/didOnline.png",
        name:"Baby wonderland",
        header:"Tiger",
        mainAmount:"1 BNB",
        amount2:"$145"
    },
    {
        img:"/images/perpetual.png",
        name:"Baby wonderland",
        header:"Tiger",
        mainAmount:"1 BNB",
        amount2:"$145"
    },
    {
        img:"/images/Stake BFG earn BFG.png",
        name:"Baby wonderland",
        header:"Tiger",
        mainAmount:"1 BNB",
        amount2:"$145"
    },
]

var hotCollections=[
    {
        link:"#",
        bigImg:"/images/bwc_Banner.png",
        smallImg:"/images/ETH.png",
        text:"BWC - Strange Seed",
        amount:"70.166 BNB"
    },
    {
        link:"#",
        bigImg:"/images/TCY_Banner.png",
        smallImg:"/images/BTC.png",
        text:"BWC - Strange Seed",
        amount:"70.166 BNB"
    },
    {
        link:"#",
        bigImg:"/images/Pancake_Banner.png",
        smallImg:"/images/BNB.png",
        text:"BWC - Strange Seed",
        amount:"70.166 BNB"
    },
    {
        link:"#",
        bigImg:"/images/BabyWonderland_Banner.png",
        smallImg:"/images/ETH.png",
        text:"BWC - Strange Seed",
        amount:"70.166 BNB"
    },
    {
        link:"#",
        bigImg:"/images/bwc_Banner.png",
        smallImg:"/images/ETH.png",
        text:"BWC - Strange Seed",
        amount:"70.166 BNB"
    },
    {
        link:"#",
        bigImg:"/images/TCY_Banner.png",
        smallImg:"/images/BTC.png",
        text:"BWC - Strange Seed",
        amount:"70.166 BNB"
    },
    {
        link:"#",
        bigImg:"/images/Pancake_Banner.png",
        smallImg:"/images/BNB.png",
        text:"BWC - Strange Seed",
        amount:"70.166 BNB"
    },
    {
        link:"#",
        bigImg:"/images/BabyWonderland_Banner.png",
        smallImg:"/images/ETH.png",
        text:"BWC - Strange Seed",
        amount:"70.166 BNB"
    },
    {
        link:"#",
        bigImg:"/images/bwc_Banner.png",
        smallImg:"/images/ETH.png",
        text:"BWC - Strange Seed",
        amount:"70.166 BNB"
    },
    {
        link:"#",
        bigImg:"/images/TCY_Banner.png",
        smallImg:"/images/BTC.png",
        text:"BWC - Strange Seed",
        amount:"70.166 BNB"
    },
    {
        link:"#",
        bigImg:"/images/Pancake_Banner.png",
        smallImg:"/images/BNB.png",
        text:"BWC - Strange Seed",
        amount:"70.166 BNB"
    },
    {
        link:"#",
        bigImg:"/images/BabyWonderland_Banner.png",
        smallImg:"/images/ETH.png",
        text:"BWC - Strange Seed",
        amount:"70.166 BNB"
    },
   
]

var newestCollections=[
   
    {
        link:"#",
        bigImg:"/images/bwc_Banner.png",
        smallImg:"/images/ETH.png",
        text:"BWC - Strange Seed",
        amount:"70.166 BNB"
    },
    {
        link:"#",
        bigImg:"/images/TCY_Banner.png",
        smallImg:"/images/BTC.png",
        text:"BWC - Strange Seed",
        amount:"70.166 BNB"
    },
    {
        link:"#",
        bigImg:"/images/Pancake_Banner.png",
        smallImg:"/images/BNB.png",
        text:"BWC - Strange Seed",
        amount:"70.166 BNB"
    },
    {
        link:"#",
        bigImg:"/images/BabyWonderland_Banner.png",
        smallImg:"/images/ETH.png",
        text:"BWC - Strange Seed",
        amount:"70.166 BNB"
    },
    {
        link:"#",
        bigImg:"/images/bwc_Banner.png",
        smallImg:"/images/ETH.png",
        text:"BWC - Strange Seed",
        amount:"70.166 BNB"
    },
    {
        link:"#",
        bigImg:"/images/TCY_Banner.png",
        smallImg:"/images/BTC.png",
        text:"BWC - Strange Seed",
        amount:"70.166 BNB"
    },
    {
        link:"#",
        bigImg:"/images/Pancake_Banner.png",
        smallImg:"/images/BNB.png",
        text:"BWC - Strange Seed",
        amount:"70.166 BNB"
    },
    {
        link:"#",
        bigImg:"/images/BabyWonderland_Banner.png",
        smallImg:"/images/ETH.png",
        text:"BWC - Strange Seed",
        amount:"70.166 BNB"
    },
    {
        link:"#",
        bigImg:"/images/bwc_Banner.png",
        smallImg:"/images/ETH.png",
        text:"BWC - Strange Seed",
        amount:"70.166 BNB"
    },
    {
        link:"#",
        bigImg:"/images/TCY_Banner.png",
        smallImg:"/images/BTC.png",
        text:"BWC - Strange Seed",
        amount:"70.166 BNB"
    },
    {
        link:"#",
        bigImg:"/images/Pancake_Banner.png",
        smallImg:"/images/BNB.png",
        text:"BWC - Strange Seed",
        amount:"70.166 BNB"
    },
    {
        link:"#",
        bigImg:"/images/BabyWonderland_Banner.png",
        smallImg:"/images/ETH.png",
        text:"BWC - Strange Seed",
        amount:"70.166 BNB"
    },
]