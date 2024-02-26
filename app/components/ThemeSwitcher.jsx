// app/components/ThemeSwitcher.tsx
"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";


export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])



  if(!mounted) return null
const changeTheme=() =>{
    if(theme=='light'){ <MdOutlineLightMode/>
        setTheme('dark')
        
    }else if(theme =='dark'){ <MdOutlineDarkMode/>
        setTheme('light')
       
    }
}
  return (
    
    <div className="flex p-4 ">
        
      {theme == 'light'?(
        <button onClick={changeTheme}>
      <MdOutlineDarkMode size={25}/>
      </button>
      ):(
        <button onClick={changeTheme}>
        <MdOutlineLightMode size={25}/>
        </button>
      )}
      
  

    </div>
  )
};