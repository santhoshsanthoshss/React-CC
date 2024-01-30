import React, { useState } from 'react'

function useToggle() {
    let [isbool,setIsbool] = useState(true)
    let toggle = ()=>
    {
        setIsbool(!isbool)
    }
  return [isbool,toggle]
}

export default useToggle