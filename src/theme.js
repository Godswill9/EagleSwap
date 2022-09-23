import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Theme({themeType}) {
    //   console.log(themeType)
    var themee=""
      const[theme, setTheme]=useState("dark")
      useEffect(()=>{
        setTheme(themeType)
        var themee=theme
         console.log()
      }, [])
  return (
    <div>
    {/* {theme==="dark"?<span>{themee}</span>:<span></span>} */}
    <span>{theme}</span>
    </div>
  )
}
