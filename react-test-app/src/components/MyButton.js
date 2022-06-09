


import React from "react"
import { UserContext } from "../contexts/index.js"

export default function MyButton(){
  const [ state, dispatch ] = React.useContext(UserContext)
  return (
    <button onClick={() => dispatch({ type: "toggle_button" })}>
      { state.active ? "On" : "Off" }  
    </button>
  )
}
