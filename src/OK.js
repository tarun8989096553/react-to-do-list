import React, { useState } from 'react'
import { FaTrashCan } from "react-icons/fa6";
const Body = ({first,del}) => {


  return (
    <>
           <ul><li> <h1>{first} <button onClick={del}> <FaTrashCan/> </button></h1> </li></ul>
        
    </>
  )
}

export default Body
