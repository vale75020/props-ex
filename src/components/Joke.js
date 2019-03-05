import React from 'react'

function Joke(props) {
    // console.log(props)
    return (
        <div>
            <h3 style={{display: !props.question && "none", backgroundColor:"black", color:"red"}}>Question: {props.question}</h3>
            <h3 style={{color: !props.question && "white"}}>Answer: {props.answer}</h3>
            <hr/>        
        </div>
    )
}

export default Joke

/*  <h3 style={{display: props.question ? "block" : "none", backgroundColor:"black", color:"red"}}>Question: {props.jokes.question}</h3>
            <h3 style={{display: !props.answer && "none", color: !props.question && "white"}}>Answer: {props.jokes.answer}</h3>  */