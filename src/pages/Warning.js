import React from 'react'
import { useState } from 'react'
import './Trade.css'

export default function Warning() {
  return (
    <div className="notice" >
           <div className='inner'>
              <h1>WARNING:</h1>
              <span>please make sure you're visiting <a href='#'>https://exchange.babyswap.finance</a></span>   
              <span>check the URL carefully</span>
           </div>
           <i style={{"fontSize":"20px", "color":"white", "cursor":"pointer"}} class="bi bi-x"></i>
        </div>
  )
}
