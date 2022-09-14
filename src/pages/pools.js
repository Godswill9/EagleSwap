import react, {useState} from 'react'
import Header from '../header'
import PoolsAlt from './poolsAlt'
import "./test.css"
import Warning from './Warning'


export default function Farms(){
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

    return( 
    <div>
         <Warning/>
        <header>
           <Header/>
        </header>
        <div className='poolsCont'>
        <div className="innerPool">
        <img src="/images/NewPool_Banner.png"></img>
        <div className="sectionn2">
        <div className="headOne">
            <button onClick={handleView}><i class="fa fa-arrow-circle-right" aria-hidden="true"></i></button>
            <button onClick={handleView2}><i class="fa fa-arrow-circle-right" aria-hidden="true"></i></button>
            <div className='switch'>
            <input type="checkbox"></input>
            <span></span>Staked only
            </div>
            <div className="switchTwo">
            <button>Live</button>
            <button>Finished</button>
            </div>
            </div>
            <div className='headtwo'>
            <div className='sortOne'>
            <span>Sort by</span>
            <div className="dropdown">
                <span>dropdown</span>
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
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
                <button>Earn Baby</button>
                <button>Earn ALT</button>
                </div> 
            </div>
            {/* <div className='linkShow' style={{"display":"flex"}}> */}
                {/* <EarnBaby_Farms/> */}
                <PoolsAlt displayMode1={displayMode} displayMode2={displayMode2}/>
            {/* </div> */}


            {/* button toggle */}
            <div className='buttonSelect' style={{"display":"none"}}>
            <div className='show' style={{"display":"flex"}}>
            {/* <EarnBaby_Farms/> */}
            </div>
            <div className='hide' style={{"display":"none"}}>
            {/* <EarnAlt_Farms/> */}
            </div>
            </div>
        </div>
    </div>
   )
}