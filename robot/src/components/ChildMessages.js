import React , {useMemo , useEffect} from 'react'


let ChildMessageCount = 0;

const ChildMessages = () => {

    useEffect(()=> {
        ChildMessageCount++
    })
  return (
    <h2>ChildMessages: {ChildMessageCount}</h2>
  )
}

export default ChildMessages