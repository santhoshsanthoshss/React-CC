import React, { useState } from 'react'

function useSlider(sliderData) {
    let [count,setCount] = useState(0)
    let right = ()=>
    {
        if(count===sliderData.length-1)
        {
            setCount(0)
        }
        else
        {
            setCount(count+1)
        }
    }
    let left = ()=>
    {
        if(count===0)
        {
            setCount(sliderData.length-1)
        }
        else
        {
            setCount(count-1)
        }
    }
  return [count,right,left]
}

export default useSlider