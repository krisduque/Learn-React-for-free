import React from "react"
import Joke from "./Joke"

function App(props){
    return(
        <div>
        <Joke 
            question="Why did the chicken cross the road?" 
            punchLine="cause LOL"
        />
        <Joke 
            punchLine="The American Government"
        />
        <Joke 
            question="What do you call a dog near an air conditioner?" 
            punchLine="a cool dog"
        />
        <Joke 
            punchLine="The Kingdom Hearts storyline" 
        />
        <Joke 
            question="What do you call a fish without eyes?" 
            punchLine="Fsh." 
        />
        </div>
    )
}
export default App
